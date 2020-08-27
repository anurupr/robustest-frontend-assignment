<template>
  <div id="app"> 
    <Login ref="login" />
    <template v-if="isLoading">
      <ActivityIndicator />
    </template>
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import { bus } from './bus'
import ActivityIndicator from '@/components/Common/ActivityIndicator'
import Login from '@/components/Account/Login'
import { mutations } from '@/store'
export default {
  name: 'App',
  components: {
    Home,
    ActivityIndicator,
    Login    
  },
  data() {
    return {
      isLoading: false
    }
  },
  created (){
    bus.$on('loading', (data) => {      
      this.isLoading = data;
    })
    bus.$on('start-login', (data) => {
      if (data) {
        this.$refs.login.showLoginForm();
      } else {
        this.$refs.login.hideLoginForm();
      }
    })
    bus.$on('start-logout', () => {
      console.log('starting logout process');
      mutations.logout();
    })
  }
}
</script>