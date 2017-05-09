<template>
  <div class="blog-nav">
      <div class="loading" v-if="loading">
      Loading...
      </div>

      <div v-if="error" class="error">
        {{ error }}
      </div>

      <ul v-if="sources">
          <li class="source" v-for="source in sources">
            <router-link :to="{ name: 'source', params: { id: source.id }}">{{source.name}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'blogNav',
    data () {
      return {
        sources: null
      }
    },
    created: function(){
      var self = this;
      self.error = self.sources = null
      self.loading = true
      $.ajax({
        url: "https://newsapi.org/v1/sources?language=en",
        type: "GET",
        dataType: "json",
        data: {
        },
        success: function(data){
          self.loading = false;
          if (data.sources) {
          self.sources = data.sources;
          }else {
          self.error = "fail to get sources!"
        }
        },
        error: function(){
          console.log("error")
        }
      });
    },
  }
</script>

<style lang="scss">
	.blog-nav {
    overflow-y: scroll;
    position: absolute;
    top: 91px;
    bottom: 0;
    border-right: 1px solid #ccc;
    width: 200px;
    background: #fff;
    padding: 50px 50px;
    font-size: 20px;
    line-height: 2;
    a {
      color: #7f8c8d;
      &:hover {
        color: #222;
      }
    }
  }
</style>
