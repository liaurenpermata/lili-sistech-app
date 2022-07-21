import React, { useState } from 'react'

function Blog({ getLikes, setIdBlog, setTitle, blog }) {

  const setIdUpdate = () => {
    setIdBlog(blog.id);
    setTitle(blog.title);
  }

  const getLike = () => {
    getLikes(blog.id);
  }

  return (
    <div className='blog' onClick={setIdUpdate}>
      <div className='blog-item'>
        <div className='item title'>
          <p>{blog.title}</p>
        </div>

        <div className='item content'>
          <p>{blog.content}</p>
        </div>
      </div>

      <div className='blog-like'>
        <i className='fas fa-heart fa-lg' onClick={getLike}></i>
        <span>{blog.like}</span>
        <span>{blog.like > 1 ? "Likes" : "Like"}</span>
      </div>
    </div>
  )
}

export default Blog