<template>
  <div class="blog-footer">
    <li>Copyright</li>
  </div>
</template>

<script>
export default {
  name: 'blog-footer',
  data () {
    return {
      menu: "home"
    }
  }
}
</script>

<style lang="scss">
.blog-footer {
      margin-left: 300px;
  text-align: center;
  line-height: 50px;
	height: 50px;
	border-top: 1px solid #ccc;
	background: #fff;
}
</style>
