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
      <h3>Write your new blog!</h3>
      <div className='form-input'>
        <div className='form-control'>
          <span>Title Blog</span>
          <input value={newTitle} onChange={newTitleHandler} type="text" className="title-input" />        
        </div>

        <div className='form-control'>
          <span>Content Blog</span>
          <textarea value={newContent} onChange={newContentHandler} type="text" className="content-input" />
        </div>
      </div>
      
      <div className='form-input'>
        <button onClick={submitBlogButton} className="create btn" type="submit">Add Blog</button>
      </div>
    </form>
  )
}

export default FormBlog