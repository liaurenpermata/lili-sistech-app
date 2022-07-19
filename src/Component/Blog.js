import React from 'react'

function Blog({ blog, updateBlog, title, content, id }) {

  // ini mau diganti ke khusus edit karena edit kan bukan ada di tombol ini lagian inputnya harus dibikin jadi none
  //jan lupa yak mau tidur bisi besok tiba tiba lupa gituu
  const updateHandler = (id) => {
    updateBlog(id);
  }

  return (
    <div className='blog'>
      <li className="blog-item">
        <ul className='blog-item-ul'>
          <li className='title'>{title}</li>
          <li className='content'>{content}</li>
        </ul>
      </li>
        <button onClick={updateHandler({id})} className='complete-btn'>
            <i className='fas fa-pen-to-square'></i>
        </button>
    </div>
  )
}

export default Blog