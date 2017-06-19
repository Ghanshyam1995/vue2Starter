<template>
     <div id="dashboard">
          <table class="table is-bordered is-striped is-narrow">
              <thead>
                  <tr>
                      <th>Sr No.</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Email</th>
                       <th>Mobile</th>
                       <th>Dob</th>
                       <th>Zip</th>
                  </tr>
              </thead>
              <tbody>
               <tr v-for="(user,index) in Users">
                   <td>{{index+1}}</td>
                     <td>{{user.FirstName}}</td>
                      <td>{{user.LastName}}</td>
                     <td>{{user.Email}}</td>
                     <td>{{user.Mobile}}</td>
                      <td>{{user.DOB}}</td>
                       <td>{{user.Zip}}</td>
               </tr>
               </tbody>
          </table>
     </div>
</template>
<script>
     export default{
         name:'dashboard',
            data:()=>({
                Users:[]
            }),
            mounted()
            {
                 this.$http.get("http://localhost:3000/account/Users").then(res=>{
                        this.Users=res.body;
                 });
            }
       
     }
    
</script>
<style>

tr td{
    cursor: pointer;
}
</style>
