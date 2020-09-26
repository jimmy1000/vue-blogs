<template>
  <div id="ShowBlogs" v-theme:column="'narrow'">
	<h1>博客总览</h1>
	<input type="text" v-model="search" placeholder="搜索">
	<div v-for="(blog,index) in filteredBlogs" :key="index" class="single-blog">
		<router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{blog.title | toUpercase}}</h2></router-link>
		<article>
			{{blog.body | snippet}}
		</article>
	</div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlogs',
  data(){
	return{
    blogs:[],
	search:""
	}
},
 created(){
	this.$http.get('./static/posts.json').then(
		function(data){
			this.blogs = data.body.slice(0,10)
		}
	)
 },
 computed:{
	filteredBlogs:function(){
		return	this.blogs.filter((blog)=>{
			return blog.title.match(this.search);
		})
	}
 },
 filters:{
	toUpercase(value){
		return value.toUpperCase();
	}
 },
 directives:{
	'rainbow':{
		bind(el){
			el.style.color = '#' + Math.random().toString(16).slice(2,8);
		}
	}
 }
	
 }
</script>

<style scoped>
#ShowBlogs{
	max-width: 50rem;
	margin: 0 auto;
}
.single-blog{
	padding: 1.25rem;
	margin: 1.25rem 0;
	box-sizing: border-box;
	background: #eee;
}
#ShowBlogs a{
	color: #444444;
	text-decoration: none;
	}
input[type='text']{
	padding: 8px;
	width: 100%;
	box-sizing: border-box;
}
</style>
