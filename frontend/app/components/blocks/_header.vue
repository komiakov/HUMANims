<template>
    <header id="header-ims" class="container-flex">
        <section>
            <nav>
                <NuxtLink class="header-ims_nav-link active">
                    <span class="header-ims_nav-link_label">Dashboars</span>
                </NuxtLink>
                <NuxtLink class="header-ims_nav-link">
                    <span class="header-ims_nav-link_label">Databases</span>
                </NuxtLink>
                <NuxtLink class="header-ims_nav-link">
                    <span class="header-ims_nav-link_label">Reports</span>
                </NuxtLink>
                <span id="header-ims_nav-line"></span>
            </nav>
        </section>
        <section>

        </section>
    </header>
</template>

<style lang="scss">
@mixin hover() {
    &:hover {
        @media (hover: hover) and (pointer: fine) {
            @content;
        }
    }
}

#header-ims {
    padding: 12px 24px;

    section {
        nav {
            position: relative;
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 6px;

            #header-ims_nav-line {
                position: absolute;
                width: 96px;
                height: 2px;
                bottom: 0;
                background-color: var(--ft-main);

            }

            .header-ims_nav-link {
                padding: 6px 12px;
                border-radius: 6px;
                transition: .3s all;
                cursor: pointer;

                .header-ims_nav-link_label {
                    color: var(--ft-secondary);
                    font-size: 13px;
                    font-weight: 400;
                    transition: .3s all;
                }

                &.active {
                    .header-ims_nav-link_label {
                        color: var(--ft-main);
                    }
                }

                @include hover() {
                    background-color: var(--bg-item-main);

                    .header-ims_nav-link_label {
                        color: var(--ft-main);
                    }
                }
            }


        }
    }
}
</style>