import HmnButton from "@/components/HmnButton";

export default function Dashboard() {
  return (
    <div id="ims-content">
      <div id="functional-panel" className="container-flex">
        <section></section>
        <section>
          <HmnButton
            iconLeft="editDashboard"
            disabled={true}
          />
        </section>
      </div>
    </div>
  );
}
