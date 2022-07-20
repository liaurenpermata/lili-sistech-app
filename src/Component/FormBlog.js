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
    if(!newTitle && !newContent){
     alert('Please add title and content!');
     return 
    }
    createBlog({ title : newTitle, content : newContent});
    setNewTitle('');
    setNewContent('');
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