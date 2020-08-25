<!-- Layout Header -->
<template>
    <header>        
            <Column class="logo column__ct_3 column__xs__ct_8">                
                <img src="@/assets/logo.png" />
                <span>feed.</span>                
            </Column>
            <Column class="column__ct_5 column__xs__ct_1">
                <HiddenDiv />
            </Column>
            <Column class="column__ct_4 column__xs__ct_3">
                <NavMenu />
            </Column>        
    </header>
</template>
<script>
import NavMenu from '@/components/Common/NavMenu.vue'
import Column from "@/components/Common/Column"
import HiddenDiv from '@/components/Common/HiddenDiv'

export default {
    name: 'Header',
    components: {
        NavMenu,
        Column,
        HiddenDiv
    }
}
</script>
<style scoped>
    header { padding: .5rem; float: left; width: 100%; min-height: 30px; margin-bottom: 2rem; }
    header  > * {
        float: left;
    }
    .logo {
        justify-content: center;
        align-items: center;
        display: flex;
    }
    
    .logo span {  font-family: 'Rowdies', cursive; font-size: 3rem; font-weight:bold; margin-left: 10px;}
    .logo img {
        vertical-align: middle;
        max-width: 64px;
    }
</style>
