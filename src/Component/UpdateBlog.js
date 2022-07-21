import React,{useState} from 'react'

function UpdateBlog({ idBlog, updateBlog }) {

    // const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const updateHandler = (e) => { 
        e.preventDefault();
        updateBlog(idBlog, content);
        // setTitle("");
        setContent("");
        // updateBlog(id, val, {title: blog.title, content: val, id:id});
        // setInputText("");
      }

    // const updateTitle = (e) => {
    //     setTitle(e.target.value);
    //     // console.log(e.target.value);
    // }

    const updateContent = (e) => {
        setContent(e.target.value);
        // console.log(e.target.value);
    }

  return (
    <div className='update-form'>
        <h4>Update Your Blog!</h4>
        {/* <div className='update-item'>
            <label>Title Blog</label>
            <input className="update-input" onChange={updateTitle} type="text" value={idBlog}/>
        </div> */}

        <div className='update-item'>
            <label>New Content Blog:</label>
            <input className="update-input" onChange={updateContent} type="text" value={content}/>
            <span>Click the blog that you want to update first!</span>
        </div>

        {/* <button onClick={(event) => updateHandler(event,blog.id,inputText)} className='update btn' type="submit">
            <i className='fas fa-pen-to-square'></i>
        </button> */}
        <button onClick={updateHandler} className='update btn' type="submit">
            <i className='fas fa-pen-to-square'></i>
        </button>
    </div>
  )
}

export default UpdateBlog