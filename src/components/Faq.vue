<template>
  <div id="faq">
         <div class="container">
        <section class="section">
        <h1 class="title">FAQ</h1>
        <h2 class="subtitle is-4">Lorum ipsum and all of that jazz.</h2>

        <div class="columns" v-if="faqs && faqs.length">
          <div class="column is-one-third" v-for="faq of faqs">
            <div class="card">
              <div class="card-content">
                <p class="title">{{ faq.title }}</p>
                <p class="answer">{{ faq.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>    
</template>

<script>
    export default{
        name:'faq',
        data:()=>({
            faqs:[],
            errors:[]
        }),
       
    }

</script>
<style lang="sass" scoped>
  @import '../mq'
  .pd
     padding: 2.5em 0 1.5em 0
  .answer
     margin-top: 10px !important
     color: gray
  .columns
    flex-wrap: wrap
</style>