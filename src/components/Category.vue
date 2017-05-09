<template>
  <div class="blog-category">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div class="category">
      <div v-if="business">
        <h2>business</h2>
        <li v-for='b in business'><router-link :to="{ name: 'source', params: { id: b.id }}">{{b.name}}</router-link></li>
      </div>
      <div v-if="entertainment">
        <h2>entertainment</h2>
        <li v-for='e in entertainment'><router-link :to="{ name: 'source', params: { id: e.id }}">{{e.name}}</router-link></li>
      </div>
      <div v-if="gaming">
        <h2>gaming</h2>
        <li v-for='g in gaming'><router-link :to="{ name: 'source', params: { id: g.id }}">{{g.name}}</router-link></li>
      </div>
      <div v-if="general">
        <h2>general</h2>
        <li v-for='ge in general'><router-link :to="{ name: 'source', params: { id: ge.id }}">{{ge.name}}</router-link></li>
      </div>
      <div v-if="music">
        <h2>music</h2>
        <li v-for='m in music'><router-link :to="{ name: 'source', params: { id: m.id }}">{{m.name}}</router-link></li>
      </div>
      <div v-if="politics">
        <h2>politics</h2>
        <li v-for='p in politics'><router-link :to="{ name: 'source', params: { id: p.id }}">{{p.name}}</router-link></li>
      </div>
      <div v-if="scienceAndNature">
        <h2>scienceAndNature</h2>
        <li v-for='sn in scienceAndNature'><router-link :to="{ name: 'source', params: { id: sn.id }}">{{sn.name}}</router-link></li>
      </div>
      <div v-if="sport">
        <h2>sport</h2>
        <li v-for='s in sport'><router-link :to="{ name: 'source', params: { id: s.id }}">{{s.name}}</router-link></li>
      </div>
      <div v-if="technology">
        <h2>technology</h2>
        <li v-for='t in technology'><router-link :to="{ name: 'source', params: { id: t.id }}">{{t.name}}</router-link></li>
      </div>
      <div v-if="other">
        <h2>other</h2>
        <li v-for='o in other'><router-link :to="{ name: 'source', params: { id: o.id }}">{{o.name}}</router-link></li>
      </div>
    </div>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
  import BlogFooter from './Footer.vue';
  export default {
    name: 'blog-category',
    data () {
      return {
        loading: false,
        sources: null,
        business: [],
        entertainment: [], 
        gaming: [], 
        general: [], 
        music: [], 
        politics: [], 
        scienceAndNature: [], 
        sport: [], 
        technology: [],
        other: [],
        error: null
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
            // self.sources = data.sources;
            for (var i = 0; i < data.sources.length; i++) {
              if (data.sources[i].category == 'business') self.business.push(data.sources[i]);
              else if (data.sources[i].category == 'entertainment') self.entertainment.push(data.sources[i]);
              else if (data.sources[i].category == 'gaming') self.gaming.push(data.sources[i]);
              else if (data.sources[i].category == 'general') self.general.push(data.sources[i]);
              else if (data.sources[i].category == 'music') self.music.push(data.sources[i]);
              else if (data.sources[i].category == 'science-and-nature') self.scienceAndNature.push(data.sources[i]);
              else if (data.sources[i].category == 'sport') self.sport.push(data.sources[i]);
              else if (data.sources[i].category == 'technology') self.technology.push(data.sources[i]);
              else self.other.push(data.sources[i]);
            }
          }else {
            self.error = "fail to get sources!"
          }
        },
        error: function(){
          console.log("error")
        }
      });
    },
    components: {BlogFooter}
  }
</script>

<style lang="scss">
  .blog-category {
    height: 100%;
    overflow-y: scroll;
    .loading, .error {
      padding: 20px;
      min-height: calc(100% - 91px);
      margin-left: 300px;
      text-align: center;
    }
    .category {
      min-height: calc(100% - 91px);
      margin-left: 300px;
      background: #fff;
      padding: 20px;
    }
  }
</style>
