<template>
  <div class="blog-source">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="content" class="content">
      <div class="article" v-for="article in content">
        <div class="article-image"><img v-bind:src="article.urlToImage"></div>
        <div class="article-text">
          <h3>{{article.title}}</h3>
          <p>{{article.author}}</p>
          <p>{{article.publishedAt}}</p>
          <p>{{article.description}}</p>
          <p><a target="_blank" v-bind:href="article.url">{{article.url}}</a></p>
        </div>
      </div>
    </div>

    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
  import BlogFooter from './Footer.vue';
  export default {
    name: 'blog-article',
    data () {
      return {
        loading: false,
        content: null,
        error: null
      }
    },
    created: function(){
      this.fetchData();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData(){
        var self = this;
        self.error = self.content = null
        self.loading = true
        var contentId = this.$route.params.id;
        $.ajax({
          url: "https://newsapi.org/v1/articles",
          type: "GET",
          dataType: "json",
          data: {
            source: contentId,
            apiKey: "cd34a86f5f564734bf7e1cb420c37fc0"
          },
          success: function(data){
            console.log(data);
            self.loading = false;
            if (data.status == "ok") {
              self.content = data.articles;
            }else {
              self.error = "fail to get articles!"
            }
          },
          error: function(){
            console.log("error")
          }
        });
      }
    },
    components: {BlogFooter}
  }
</script>

<style lang="scss">
  .blog-source {
    height: 100%;
    overflow-y: scroll;
    .loading, .error {
      padding: 20px;
      min-height: calc(100% - 91px);
      margin-left: 300px;
      text-align: center;
    }
    .content {
      min-height: calc(100% - 91px);
      margin-left: 300px;
      background: #fff;
      padding: 20px;
      .article {
        width: 1200px;
        margin: 0px auto;
        padding: 20px;
        border-bottom: 1px solid #ccc;
        &:after {
          content:"";
          display: table;
          clear: both;
        }
      }
      .article-image {
        width: 200px;
        height: 200px;
        float: left;
        margin-right: 50px
      }
      .article-text {
        width: 800px;;
        float: left;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
