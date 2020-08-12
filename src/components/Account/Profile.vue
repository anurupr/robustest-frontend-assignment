<template>
    <div class="box" id="profile">
        <div><img src="https://www.gravatar.com/avatar/3f3fd2973e4d5ef103ce6d8d17bfa1b2?s=150&d=robohash&r=PG'" ></div>
        <span class="name">Anurup Raveendran</span>
        <span class="location">Kerala, India</span>
    </div>
</template>
<script>
export default {
    name: 'Profile'
}
</script>
<style scoped>
    #profile > span {
        display: block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .name {        
        font-weight: bold;
        font-size: 2.5rem;        
    }

    /* .location {    } */

    #profile img {
        border-radius: 150px;
        border: 1px solid #aaa;       
        /* box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2); */
        max-width: 120px;
    }
</style>