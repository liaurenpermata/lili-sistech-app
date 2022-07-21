import { useEffect, useState } from 'react';
import './App.css';

import Blogs from './Component/Blogs';
import FormBlog from './Component/FormBlog';
import UpdateBlog from './Component/UpdateBlog';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [idBlog, setIdBlog] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      const blogFromServer = await fetchBlogs();
      setBlogs(blogFromServer);
    };

    getBlogs();
  }, [])

  const fetchBlogs = async () => {
    const res = await fetch('https://sistech-api.vercel.app/blog/', {
      headers: {
        "authorization": "bearer 2b2ed488-bec6-40b1-8223-21841e3c40b8"
      }
    })
    const data = await res.json()

    return data
  }

  const createBlog = async (newBlog) => {
    const res = await fetch('https://sistech-api.vercel.app/blog/', {
      method: 'POST',
      headers: {
        "authorization": "bearer 2b2ed488-bec6-40b1-8223-21841e3c40b8",
        "Content-type": "application/json"
      },
      body: JSON.stringify(newBlog)
    })

    const data = await res.json();

    res.status === 200 ? setBlogs([...blogs, data]) : console.log("error while adding blog");
  }

  const updateBlog = async (id, newContent) => {

    const value = {title: title, content: newContent, id: idBlog};
    console.log(value);

    const res = await fetch(`https://sistech-api.vercel.app/blog/`, {
      method: 'PUT',
      headers: {
        "authorization": "bearer 2b2ed488-bec6-40b1-8223-21841e3c40b8",
        "Content-type": "application/json"
      },
      body: JSON.stringify(value)
    })

    // const data = await res.json();
    // return data;

     res.status === 200 ? setBlogs(
      blogs.map((blog) =>
        blog.id === idBlog ? {...blog, content : newContent} : blog)
    ) : console.log('error while update blog');

    setIdBlog("");
    setTitle("");
  }

  const getLike = async (id) => {
    const res = await fetch(`https://sistech-api.vercel.app/blog/like`, {
      method: 'POST',
      headers: {
        "authorization": "bearer 2b2ed488-bec6-40b1-8223-21841e3c40b8",
        "Content-type": "application/json"
      },
      body: JSON.stringify({id:id})
    })

    const data = await res.json();

    res.status === 200 ? setBlogs(
      blogs.map((blog) =>
         blog.id === id ? {...blog, like: data.like} : blog)
    ) : console.log('error while update blog');
  }

  return (
    <div className="App">
      <div className='app-item'>
        <FormBlog createBlog={createBlog}/>
      </div>

      <div className='app-item'>
        <UpdateBlog idBlog={idBlog} updateBlog={updateBlog}/>
      </div>

      <div className='app-item'>
        <Blogs getLike={getLike} setTitle={setTitle} setIdBlog={setIdBlog} idBlog={idBlog} blogs={blogs} updateBlog={updateBlog}/>
      </div>
    </div>
  );
}

export default App;
