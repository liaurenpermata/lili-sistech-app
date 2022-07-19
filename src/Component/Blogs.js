import React from 'react'
import Blog from './Blog'

function Blogs({ blogs, updateBlog }) {
  return (
    <div className='blogs-container'>
      <ul className="blogs-list">
        {blogs.map((blog) => (
            <Blog key={blog.id} updateBlog={updateBlog} blog={blog} title={blog.title} content={blog.content} id={blog.id}/>
        ))}
      </ul>
    </div>
  )
}

export default Blogs