<template>
	<div id="SingBlog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.body}}</article>
	</div>
</template>

<script>
	export default{
		name:"SingBlog",
		data(){
			return{
				id:this.$route.params.id,
				blog:{	
				}
			}
		},
	created(){
		this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
		.then(function(data){this.blog = data.body});
	}
	}
</script>

<style>
</style>
