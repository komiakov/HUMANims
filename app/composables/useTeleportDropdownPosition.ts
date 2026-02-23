type Align = "left" | "right" | "center";
type Placement = "bottom" | "top";

export function useTeleportDropdownPosition(opts: {
  isOpen: Ref<boolean>;
  anchorRef: Ref<HTMLElement | null>;
  dropdownRef: Ref<HTMLElement | null>;
  align?: Align;
  offset?: number;
  preferPlacement?: Placement;
  boundaryPadding?: number;
  matchAnchorWidth?: boolean;
}) {
  const align = opts.align ?? "left";
  const offset = opts.offset ?? 6;
  const preferPlacement = opts.preferPlacement ?? "bottom";
  const boundaryPadding = opts.boundaryPadding ?? 8;
  const matchAnchorWidth = opts.matchAnchorWidth ?? false;

  const style = ref<Record<string, string>>({
    position: "fixed",
    top: "0px",
    left: "0px",
    zIndex: "9999",
  });

  function clamp(v: number, min: number, max: number) {
    return Math.max(min, Math.min(max, v));
  }

  function computeLeft(anchor: DOMRect, dropdown: DOMRect) {
    if (align === "left") return anchor.left;
    if (align === "right") return anchor.right - dropdown.width;
    // center
    return anchor.left + anchor.width / 2 - dropdown.width / 2;
  }

  function pickPlacement(anchor: DOMRect, dropdownH: number) {
    const spaceBelow = window.innerHeight - anchor.bottom;
    const spaceAbove = anchor.top;

    if (preferPlacement === "bottom") {
      if (spaceBelow >= dropdownH + boundaryPadding) return "bottom";
      if (spaceAbove >= dropdownH + boundaryPadding) return "top";
      return spaceBelow >= spaceAbove ? "bottom" : "top";
    } else {
      if (spaceAbove >= dropdownH + boundaryPadding) return "top";
      if (spaceBelow >= dropdownH + boundaryPadding) return "bottom";
      return spaceAbove >= spaceBelow ? "top" : "bottom";
    }
  }

  function recompute() {
    const anchorEl = opts.anchorRef.value;
    const dropEl = opts.dropdownRef.value;

    if (!anchorEl || !dropEl) return;

    const a = anchorEl.getBoundingClientRect();

    // ВАЖНО: dropEl уже в DOM (Teleport), поэтому можем измерить
    const d = dropEl.getBoundingClientRect();

    const placement = pickPlacement(a, d.height);

    let top =
      placement === "bottom"
        ? a.bottom + offset
        : a.top - d.height - offset;

    let left = computeLeft(a, d);

    // boundary clamp
    const minLeft = boundaryPadding;
    const maxLeft = window.innerWidth - d.width - boundaryPadding;
    left = clamp(left, minLeft, Math.max(minLeft, maxLeft));

    const minTop = boundaryPadding;
    const maxTop = window.innerHeight - d.height - boundaryPadding;
    top = clamp(top, minTop, Math.max(minTop, maxTop));

    style.value = {
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      zIndex: "9999",
      ...(matchAnchorWidth ? { width: `${a.width}px` } : {}),
    };
  }

  const onWinChange = () => {
    if (!opts.isOpen.value) return;
    recompute();
  };

  // Когда открыли — ждём рендер телепорта и меряем
  watch(
    () => opts.isOpen.value,
    async (open) => {
      if (!open) return;
      await nextTick();
      recompute();
    }
  );

  onMounted(() => {
    window.addEventListener("resize", onWinChange, { passive: true });

    // scroll ловим в capture, чтобы реагировать на прокрутку любых контейнеров
    window.addEventListener("scroll", onWinChange, { passive: true, capture: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", onWinChange);
    window.removeEventListener("scroll", onWinChange, true as any);
  });

  return {
    dropdownStyle: computed(() => style.value),
    recompute,
  };
}