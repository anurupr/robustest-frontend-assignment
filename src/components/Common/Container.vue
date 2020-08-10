/* Layout Container */
<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Container'
}
</script>
<style scoped>
    .container {
        padding-left: 15px;
        padding-right: 15px;
    }
</style>
