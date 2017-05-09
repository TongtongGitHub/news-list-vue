<template>

  <div class="blog-main">
  <h2>Welcome</h2>
  <div></div>
  </div>
</template>

<script>
  export default {
    name: 'blog-main',
    data () {
      return {
        articles: null
      }
    }
  }
</script>

<style lang="scss">
	.blog-main {
    height: calc(100% - 91px);
    text-align: center;
  }
</style>
