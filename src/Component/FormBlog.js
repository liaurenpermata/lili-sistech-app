import React, {useState} from 'react'

function FormBlog({ createBlog }) {

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const newTitleHandler = (e) => {
    setNewTitle(e.target.value);
  }

  const newContentHandler = (e) => {
    setNewContent(e.target.value);
  }

  const submitBlogButton = (e) => {
    e.preventDefault();
    createBlog({ title : newTitle, content : newContent});
  }

  return (
    <form>
      <input value={newTitle} onChange={newTitleHandler} type="text" className="blog-input" />
      <input value={newContent} onChange={newContentHandler} type="text" className="blog-input" />
      <button onClick={submitBlogButton} className="blog-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  )
}

export default FormBlog