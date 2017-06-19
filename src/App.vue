<template>
     
  <div id="app" @keyup.esc="isActive=false">
    <top-progress ref="topProgress"></top-progress>
     <div class="nav is-light is-fixed-top">
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

          <router-link v-ripple to="/" class="nav-item r-item"><i class="fa fa-home"></i>Home</router-link>
          <router-link  v-ripple to="faq" class="nav-item r-item"><i class="fa fa-file"></i>Features</router-link>
          <router-link v-ripple  to="dashboard" class="nav-item r-item"><i class="fa fa-dashcube"></i>Dashboard</router-link>
          <router-link v-ripple to="faq" class="nav-item r-item"><i class="fa fa-quora"></i>Faq</router-link>
          <a class="nav-item r-item" v-if="LoggedIn"  @click.prevent="Logout"><i class="fa fa-sign-out"></i>Logout</a>
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

    <!--<button class="button is-info is-outlined" @click="Test">Open Model</button>-->
    <div class="modal" :class="{'is-active':isActive}">
  <div class="modal-background"></div>
  <div class="modal-content">
       <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a>#css</a> <a>#responsive</a>
      <br>
      <small>11:09 PM - 1 Jan 2016</small>
    </div>
  </div>
</div>
  </div>
  <button class="modal-close" @click="isActive=false"></button>
</div>
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
import {isLoggedIn,Logout} from "./service"
import miniToastr from 'mini-toastr'
import topProgress from 'vue-top-progress'
export default {
  name: 'app',
  components:{topProgress},
  data:function(){
    return {
      isActive:false,
      LoggedIn:false,
      
    }
  },
 
  created(){
    this.LoggedIn=isLoggedIn();
  },
  mounted(){
     miniToastr.init()
     this.$refs.topProgress.start()
      setTimeout(() => {
      this.$refs.topProgress.done()
    }, 2000)
  },
  watch:{
    
  },
  methods:{
    toggleNav:function(){
      this.isActive=!this.isActive;
    },
     Logout:function(){
        Logout();
        this.$router.push("login");
        this.LoggedIn=false;
    },
    Test:function(){
        this.isActive=true;
    }
   
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
