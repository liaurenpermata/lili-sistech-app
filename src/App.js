import { useEffect, useState } from 'react';
import './App.css';

import Blogs from './Component/Blogs';
import FormBlog from './Component/FormBlog';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [updNewBlog, setUpdNewBlog] = useState("");

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

  const updateBlog = async (id, newContent, value) => {

    const res = await fetch(`https://sistech-api.vercel.app/blog/`, {
      method: 'PUT',
      headers: {
        "authorization": "bearer 2b2ed488-bec6-40b1-8223-21841e3c40b8",
        "Content-type": "application/json"
      },
      body: JSON.stringify(value)
    })

    const data = await res.json();
    return data;

    // res.status === 200 ? setBlogs(
    //   blogs.map((blog) =>
    //     blog.id === id ? {...blog, value} : blog)
    // ) : console.log('error while update blog');

    // res.status === 200 ? setBlogs(
    //   blogs.map((blog) =>
    //     blog.id === id ? window.location.reload() : blog)
    // ) : console.log('error while update blog');
  }


  return (
    <div className="App">
      <Blogs setUpdNewBlog={setUpdNewBlog} updNewBlog={updNewBlog} blogs={blogs} updateBlog={updateBlog} setBlogs={setBlogs}/>
      <FormBlog createBlog={createBlog}/>
    </div>
  );
}

export default App;
