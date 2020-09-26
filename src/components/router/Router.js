import ShowBlogs from '../ShowBlogs.vue'
import AddBlogs from '../AddBlogs.vue'
import SingleBlog from '../SingleBlog.vue'
export default[
	{path:"/",component:ShowBlogs},
	{path:"/add",component:AddBlogs},
	{path:"/blog/:id",component:SingleBlog}
]