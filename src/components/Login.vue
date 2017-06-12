<template>
     <div id="login">
       <form>
       <div class="column is-6 is-offset-3">
           <div class="card ">
  <header class="card-header">
    <p class="card-header-title">
      Login
    </p>
    <a class="card-header-icon">
      <span class="icon">
        <i class="fa fa-angle-down"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
          <div class="field">
  <label class="label">Email</label>
  <p class="control">
    <input class="input" v-model.lazy="User.Email" type="text" placeholder="Email">
  </p>
</div>

<div class="field">
   <label class="label">Password</label>
      <p class="control">
      <input class="input" type="password" v-model="User.Password" placeholder="Password">
     </p>
  
</div>
<div  class="field">
   <label class="label">Remember me?</label>
   <p class="control">
     <input type="checkbox" value=true v-model="User.RememberMe"/>
   </p>
</div>
<div class="field">
   <label class="label">Gender</label>
   <p class="control">
     <select v-model="User.Gender">
       <option value="">-Select-</option>
       <option value="Male">Male</option>
       <option value="Female">Female</option>
     </select>
   </p>
</div>
  <button @click.prevent="Login" class="button is-success is-outlined">Login</button>
    </div>
  </div>
   {{User.Gender}}
</div>
     </div>
    
       </form>
     </div>


</template>

<script>
     import axios from 'axios';
    export default{
 
        name:'login',
        data:()=>{
           return{
                  User:{
                    Email :'',
                    Password :'',
                    RememberMe:'',
                    Gender:''
                  }
           }
        },
        methods:{
         
        }
    }
</script>

<style lang="sass">
  @import  '../mq'
</style>