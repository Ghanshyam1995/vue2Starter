<template>
     
  <div id="app" >
    <top-progress ref="topProgress"></top-progress>
     <div class="nav is-light">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item"><img src="https://vuejs.org/images/logo.png"/></a>
        </div>

        <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">

          <router-link v-ripple.mouseover="'rgba(100,50,100,0.9)'" to="/" class="nav-item r-item"><i class="fa fa-home"></i>Home</router-link>
          <router-link v-ripple.mouseover="'rgba(100,50,100,0.9)'" to="faq" class="nav-item r-item"><i class="fa fa-file"></i>Features</router-link>
          <router-link v-ripple.mouseover="'rgba(100,50,100,0.9)'" to="dashboard" class="nav-item r-item"><i class="fa fa-dashcube"></i>Dashboard</router-link>
          <router-link v-ripple.mouseover="'rgba(100,50,100,0.9)'" to="faq" class="nav-item r-item"><i class="fa fa-quora"></i>Faq</router-link>
        
          <a @click.prevent="Logout" v-if="LoggedIn" v-ripple.mouseover="'rgba(200,50,100,0.9)'" class="nav-item r-item dropLink" ><i class="fa fa-user"></i> {{Username}}
            <div class="dropMenu">
               <a href="#">Link 1</a>
               <a href="#">Link 2</a>
               <a href="#">Link 3</a>
            </div>
          </a>
         
          <div class="nav-item" v-if="!LoggedIn">
            <p class="control">
            <router-link to="login" class="button is-primary is-outlined">
            <span class="icon">
                   <i class="fa fa-download"></i>
                </span>
             <span>  Join Now</span>
               </router-link>
              
            </p>
          </div>

        </div>
      </div>
    </div>
  

  <br>
    <router-view></router-view>
    <footer class="footer is-secondary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>And this right here is a spiffy footer, where you can put stuff.</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="#"><i class="fa fa-facebook"></i></a>
            <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
     
    </footer>
  </div>
   
</template>
    
<script>
import {isLoggedIn,Logout,Username} from "./service"
import test from './components/Test'
import miniToastr from 'mini-toastr'
import topProgress from 'vue-top-progress'
export default {
  name: 'app',
  components:{test,topProgress},
  data:function(){
    return {
      isActive:false,
      LoggedIn:false,
      Username:''
    }
  },
  created(){
    
    this.LoggedIn=isLoggedIn();
    
    this.Username=Username()
  },
  mounted(){
     miniToastr.init()
     this.$refs.topProgress.start()
      setTimeout(() => {
      this.$refs.topProgress.done()
    }, 2000)
  },
  methods:{
    toggleNav:function(){
      this.isActive=!this.isActive;
    },
     Logout:function(){
       
        Logout()
    },
   
  }
}
</script>
<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'
.nav
  
  a:hover
    color: gray

.nav-left a 
  color: #fff
  font-weight: bold

a.r-item
  color:#C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.nav-toggle span
  background-color: #C1C1C1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px

.is-active
    color:aqua

.dropLink.dropMenu
   display:none
</style>
