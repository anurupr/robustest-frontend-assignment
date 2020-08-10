/* Layout Header */
<template>
    <header>
        <nav>            
            <div class="logo column__ct_3">
                <span>feed.</span>
            </div>
            <div class="column__ct_3">
                <NavMenu />
            </div>
            <div class="column__ct_3">
                <AccountMenu />
            </div>
        </nav>
    </header>
</template>
<script>
import NavMenu from '@/components/Common/NavMenu.vue'
import AccountMenu from '@/components/Account/AccountMenu.vue'

export default {
    name: 'Header',
    components: {
        NavMenu,
        AccountMenu
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
    .logo span {  font-family: 'Rowdies', cursive; font-size: 3rem; font-weight:bold;}
</style>
