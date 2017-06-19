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
    <input class="input"  v-model.lazy="User.Email" type="text" placeholder="Email">
  </p>
</div>

<div class="field">
   <label class="label">Password</label>
      <p class="control">
      <input class="input"  type="password" v-model="User.Password" placeholder="Password">
     </p>
  
</div>

  <button @click.prevent="Login" v-ripple="'rgba(100, 50, 100, 0.2)'" class="button">Login</button>
    </div>
  </div>
  
</div>
     </div>
    
       </form>
     </div>


</template>

<script>
    import VueNotifications from 'vue-notifications'
   import Login from "../service"
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
         Login()
         {
                  this.$http.post("http://localhost:3000/account/Login",{User : this.User})
                  .then(res=>{
                 if(res.status=200 && res.body[0]!=null)
                    {
                      VueNotifications.success({message:"Redirecting ! Please wait...."})
                     localStorage.setItem('authUser',JSON.stringify(res.body[0]));
                      this.$router.push('/home');
                    }
                    else{
                         VueNotifications.error({message:"Login failed ! Invalid credential provided"})}
                  })
         }
        }
    }
</script>

<style lang="sass">
  @import  '../mq'
</style>