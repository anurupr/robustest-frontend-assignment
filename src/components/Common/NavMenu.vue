/* Nav Menu */
<template>
    <Menu />    
</template>
<script>
import Menu from '@/components/Common/Menu.vue'

export default {
    name: 'NavMenu',
    components: {
        Menu
    },
    data() {
        return {
            urls: []
        }
    }
    
}
</script>
<style scoped>
    
</style>
