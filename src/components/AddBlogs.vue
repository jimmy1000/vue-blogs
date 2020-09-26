<template>
	<div class="add-blog">
		<h2>添加博客</h2>
	<form v-if="!submited" >
		<label>博客标题:</label>
		<input type="text" v-model="blog.title" required />
		<p></p>
		<label >博客内容:</label><p></p>
		<textarea v-model="blog.content"></textarea>
		
		<div id="checkboxes">
			<label >Vue.js</label>
			<input type="checkbox" value="Vue.js" v-model="blog.categories">
			<label >Node.js</label>
			<input type="checkbox" value="Node.js" v-model="blog.categories">			
			<label >React.js</label>
			<input type="checkbox" value="React.js" v-model="blog.categories">
			<label >Angular4</label>
			<input type="checkbox" value="Angular4" v-model="blog.categories">
			<label >作者</label>
			<select v-model="blog.author">
				<option v-for="(author,index) in authors" :key="index" >
					{{author}}
				</option>
			</select> 
		</div>
		<button v-on:click.prevent="post">添加博客</button>
	</form>
	<div v-if="submited">
		<h3>您的博客已经发布成功!</h3>
	</div>
	<div id="preview">
		<h3>博客总览</h3>
		<p>博客标题:{{blog.title}}</p>
		<p>博客内容:</p>
		<p>{{blog.content}}</p>
		<p>博客分类:</p>
		<ul>
			<li v-for="(user,index) in blog.categories" :key='index'> {{user}}</li>			
		</ul>
		<p>作者：{{blog.author}}</p>
	</div>
	</div>
</template>

<script>
	export default{
		name:'add-blog',
		data(){
			return{
				blog:{
					title:"",
					content:"",
					categories:[],
					author:""
				},
				authors:["小青","小白","小黑"],
				submited:false
			}
		},
		methods:{
			post:function(){
				this.$http.post("http://jsonplaceholder.typicode.com/posts",{
					title:this.blog.title,
					body:this.blog.content,
					userId:1
				}).then(function(data){
					console.log(data);
					this.submited = true
				})
			}
		}
	}
</script>

<style scoped>
	#add-blog{
		margin: 1.25rem auto;
		max-width: 12.5rem;
		padding: 1.25rem;
	}
	label{
		display: block;
		margin: 1.25rem 0 0.625rem;
	}
	input[type="text"],textarea,select{
		display: block;
		width: 94%;
		padding: 0.5rem;
	}
	textarea{
		width: ;
		height: 12.5rem;
	}
	#checkboxes label{
		display: inline-block;
		margin-right: 0.625rem;
	}
	button{
		display: block;
		margin: 1.25rem;
		background: crimson;
		border: 0;
		padding: 10px;
		border-radius: 0.25rem;
		font-size: 1.125rem;
		cursor: pointer;
	}
	#preview{
		padding: 0.625rem 1.25rem;
		border: 0.0625rem dotted #ccc;
		margin: 1.875rem 0;
	}
	h3{
		margin-top: 0.625rem;
	}
</style>
