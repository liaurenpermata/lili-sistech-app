import { useEffect, useState, useRef } from 'react';
import './App.css';

import Blogs from './Component/Blogs';
import FormBlog from './Component/FormBlog';
import UpdateBlog from './Component/UpdateBlog';
import CV from './Component/CV'
import ScrollToTop from './Component/ScrollToTop';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [idBlog, setIdBlog] = useState("");
  const [title, setTitle] = useState("");

  const scrollCV = useRef(null);
  const scrollAddBlog = useRef(null);
  const scrollUpdateBlog = useRef(null);
  const scrollBlogs = useRef(null);

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

  function handleScrollCV () {
    scrollCV.current.scrollIntoView({behavior: 'smooth'});
  }
  function handleScrollAddBlog () {
    scrollAddBlog.current.scrollIntoView({behavior: 'smooth'});
  }
  function handleScrollUpdateBlog () {
    scrollUpdateBlog.current.scrollIntoView({behavior: 'smooth'});
  }
  function handleScrollBlogs () {
    scrollBlogs.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Lili Sistech</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={handleScrollCV}>CV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleScrollAddBlog}>Add Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleScrollUpdateBlog}>Update Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleScrollBlogs}>Blogs</a>
            </li>
          </ul>
        </div>
      </nav>


      <div className='app-item cv' ref={scrollCV}>
        <CV/>
      </div>

      <div className='app-item' ref={scrollAddBlog}>
        <FormBlog createBlog={createBlog}/>
      </div>

      <div className='app-item' ref={scrollUpdateBlog}>
        <UpdateBlog  title={title} idBlog={idBlog} updateBlog={updateBlog}/>
      </div>

      <div className='app-item' ref={scrollBlogs}>
        <Blogs getLike={getLike} setTitle={setTitle} setIdBlog={setIdBlog} idBlog={idBlog} blogs={blogs} updateBlog={updateBlog}/>
      </div>

    <ScrollToTop/>

    </div>
  );
}

export default App;
