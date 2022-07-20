import React from 'react'
import Blog from './Blog'

function Blogs({ updNewBlog, setUpdNewBlog, blogs, updateBlog, setBlogs }) {
  return (
    <div className='blogs-container'>
      <ul className="blogs-list">
        {blogs.map((blog) => (
            <Blog updNewBlog={updNewBlog} setUpdNewBlog={setUpdNewBlog} key={blog.id} setBlogs={setBlogs} updateBlog={updateBlog} blog={blog} blogs={blogs}/>
        ))}
      </ul>
    </div>
  )
}

export default Blogs