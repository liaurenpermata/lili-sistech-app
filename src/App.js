import { useEffect, useState } from 'react';
import './App.css';

import Blogs from './Component/Blogs';
import FormBlog from './Component/FormBlog';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogFromServer = await fetchBlogs();
      setBlogs(blogFromServer);
    };

    getBlogs();
  }, [])

  const fetchBlog = async (id) => {
    const res = await fetch(`https://sistech-api.vercel.app/blog/?id=${id}`, {
      headers: {
        "authorization": "bearer 2b2ed488-bec6-40b1-8223-21841e3c40b8"
      }
    })
    const data = await res.json()

    return data
  }

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

    setBlogs([...blogs, data]);
  }

  const updateBlog = async (id, newContent) => {
    const contentToPut = await fetchBlog(id);
    const updContent = {...contentToPut, content: newContent};
    
    const res = await fetch(`https://sistech-api.vercel.app/blog/?id=${id}`, {
      method: 'PUT',
      headers: {
        "authorization": "bearer 2b2ed488-bec6-40b1-8223-21841e3c40b8",
        "Content-type": "application/json"
      },
      body: JSON.stringify(updContent)
    })

    const data = await res.json();

    setBlogs(
      blogs.map((blog) => 
        blog.id === id ? {...blog, content: newContent} : blog)
    )
  }


  return (
    <div className="App">
      {blogs.map(blog => 
        <h1 key={blog.id}>{blog.title}</h1>
      )}

      <Blogs blogs={blogs} updateBlog={updateBlog}/>
      <FormBlog createBlog={createBlog}/>
    </div>
  );
}

export default App;
