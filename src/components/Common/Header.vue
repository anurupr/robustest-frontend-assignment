<!-- Layout Header -->
<template>
    <header>
        <nav>            
            <Column class="logo column__ct_3">
                <img src="@/assets/logo.png" />
                <span>feed.</span>
            </Column>
            <Column class="column__ct_5">
                <div style="visibility: hidden;">feed</div>
            </Column>
            <Column class="column__ct_4">
                <NavMenu />
            </Column>
        </nav>
    </header>
</template>
<script>
import NavMenu from '@/components/Common/NavMenu.vue'
import Column from "@/components/Common/Column"

export default {
    name: 'Header',
    components: {
        NavMenu,
        Column
    }
}
</script>
<style scoped>
    header { padding: .5rem; float: left; width: 100%; min-height: 30px; margin-bottom: 2rem; }
    header  > * {
        float: left;
    }
    nav { width: 100% }
    nav  > * {
        float: left;
    }
    .logo span {  font-family: 'Rowdies', cursive; font-size: 3rem; font-weight:bold; margin-left: 10px;}
    .logo img {
        vertical-align: middle;
        max-width: 64px;
    }
</style>
