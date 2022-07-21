import React from 'react'
import Blog from './Blog'

function Blogs({ getLike, setTitle, setIdBlog, blogs, updateBlog }) {
  return (
    <div className='blogs-container'>
      <ul className="blogs-list">
        {blogs.map((blog) => (
            <Blog getLikes={getLike} setIdBlog={setIdBlog} setTitle={setTitle} key={blog.id} updateBlog={updateBlog} blog={blog}/>
        ))}
      </ul>
    </div>
  )
}

export default Blogs