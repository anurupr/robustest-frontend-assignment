<template>
    <img class="loader" :src="require('@/assets/Eclipse-1s-200px.svg')" >
</template>
<style scoped>
    .loader {
        position: absolute;
        top: 2rem;
        right: 2rem;
        max-width: 5rem;
    }

    @media screen and (max-width: 576px) {
        .loader {
            top: 1rem;
            right: 1rem;
            max-width: 3rem;
        }
    }

    
</style>