<template>
  <div>
    <blogNav></blogNav>  
    <div class="blog-main">
      <div class="articles">
        <div class="article" v-for="article in articles">
          <p>
            <h3>{{article.title}}</h3>
            <span class="date">{{article.date}}</span>
          </p>
          <p>{{article.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import blogNav from "./Nav.vue";
  export default {
    name: 'blog-main',
    data () {
      return {
        articles: null
      }
    },
    created: function(){
      var self = this;
      $.getJSON("src/files/list.json",function(result){
        console.log(result)
        self.articles  = result;
      });
    },
    components: {blogNav}
  }
</script>

<style lang="scss">
</style>
