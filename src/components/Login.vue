<template>
     <div id="login">
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
    <input class="input" type="text" placeholder="Email">
  </p>
</div>

<div class="field">
   <label class="label">Password</label>
      <p class="control">
      <input class="input" type="password" placeholder="Password">
     </p>
</div>

  <button class="button is-success is-outlined">Login</button>
    </div>
  </div>
 
</div>
     </div>
     </div>

   
</template>

<script>

    export default{
        name:'login'
    }
</script>

<style lang="sass">
  @import  '../mq'
</style>