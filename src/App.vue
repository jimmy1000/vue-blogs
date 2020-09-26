<template>
  <div id="app">
	<!-- <AddBlogs></AddBlogs>
	<Show-Blogs></Show-Blogs> -->
	<BlogHeader></BlogHeader>
	<router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader.vue'
export default {
  name: 'App',
  components: {
	BlogHeader
  }
}
</script>

<style>

</style>
