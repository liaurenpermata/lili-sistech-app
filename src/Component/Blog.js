import React, { useState } from 'react'

function Blog({ updNewBlog, setUpdNewBlog, blogs, blog, updateBlog, setBlogs }) {

  const [inputText, setInputText] = useState("");

  const updateHandler = (e, id, val) => { 
    e.preventDefault();

    updateBlog(id, val, {title: blog.title, content: val, id:id});
    setInputText("");
    window.location.reload();
  }

  const updateInput = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className='blog'>
      <li className="blog-item">
        <ul className='blog-item-ul'>
          <li className='title'>{blog.title}</li>
          <li className='content'>{blog.content}</li>
        </ul>
      </li>

      <form>
      <input className='update-input' onChange={updateInput} type="text" value={inputText}/>
        <button onClick={(event) => updateHandler(event,blog.id,inputText)} className='complete-btn' type="submit">
            <i className='fas fa-pen-to-square'></i>
        </button>

      </form>
    </div>
  )
}

export default Blog