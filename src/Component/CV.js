import React from 'react'

function CV() {
  return (
    <div className='cv-blog'>

      <div className="jumbotron">
        <p className="lead">Hi!</p>
        <h1 className="display-5">I'm Liauren Permata Sari</h1>
        <p className="text-sm">an undergraduate Computer Science student who is always passionate and curious <br></br>about software development with proven ability to build application. I develop my <br></br>passion in  Frontend Website and Mobile Application.</p>
        <hr className="my-4"></hr>
        <p>Check out my linkedin profile below!</p>
        <a className="btn btn-primary btn-lg" href="https://www.linkedin.com/in/liauren-permata-sari" role="button">See more</a>
      </div>

      <div className='experiences'>

        <h3 className='text-center'>Experiences</h3>

        <div className="card">
          <div className="card-body">

            <div className='row'>

              <div className='col-md-10'>
                <h5 className="card-title">IT Administrator</h5>
                <p className='card-text'>Ikatan Apoteker Indonesia <span>Mei 2022 - Juni 2022</span></p>
                <ul className='card-text'>
                  <li>Managed over 1000+ participant data, invoice, and account access using Wordpress CMS.</li>
                  <li>Coordinated 42+ Zoom Meeting Webinar with 6 Host & 10 Co-Host, 15+ sponsor, and tawk.to website.</li>
                </ul>
              </div>

              <div className='col-md-2'>
                <a href="https://apoteker.or.id/#!/main/" className="btn btn-primary">Check It Out!</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-body">

            <div className='row'>

              <div className='col-md-10'>
                <h5 className="card-title">Chief Financial Officer</h5>
                <p className='card-text'>BNCC @Bandung <span>Maret 2022 - Present</span></p>
                <ul className='card-text'>
                  <li>Monitored internal & external document of 10+ events in BNCC.</li>
                  <li>Collaborated with human resource, marketing, research, and training division to maintain substantial organizational growth.</li>
                </ul>
              </div>

              <div className='col-md-2'>
                <a href="https://student-activity.binus.ac.id/bncc/organization-structure/" className="btn btn-primary">Check It Out!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='project'>
        <h3 className='text-center'>Project</h3>

        <div className='row no-gutters'>
          
          <div className='col-md-3'>
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Quori</h6>
                <p className="card-text">This is a fullstack project for my final project in BNCC Course using Laravel, SQL, and boostrap as the framework.</p>
                <a href="https://github.com/liaurenpermata/FinalProject-BNCCFullstack2020" className="btn btn-primary">See</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."></img> */}
              <div className="card-body">
                <h6 className="card-title">Anime React App</h6>
                <p className="card-text">A project which made with React Router and Jikan Moe API for show you the most popular anime list.</p>
                <a href="https://github.com/liaurenpermata/AnimeReactApp" className="btn btn-primary">See</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."></img> */}
              <div className="card-body">
                <h6 className="card-title">Simply Recipes</h6>
                <p className="card-text">A static project with HTML, Javascript, and CSS which show many food recipes.</p>
                <a href="https://github.com/liaurenpermata/Simply_Recipes" className="btn btn-primary">See</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."></img> */}
              <div className="card-body">
                <h6 className="card-title">Mobile App</h6>
                <p className="card-text">A Simple mobile application build using Java which show you many furniture list.</p>
                <a href="https://github.com/liaurenpermata/MCS_Java-Android" className="btn btn-primary">See</a>
              </div>
            </div>
          </div>
        
        </div>

        <div className='row no-gutters'>

          <div className='col-md-3'>
              <div className="card down">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                  <h6 className="card-title">Face Mask Detection</h6>
                  <p className="card-text">This project build by Google Collab to detect people with mask and calculating the value of accuracy using python.</p>
                  <a href="https://github.com/liaurenpermata/Face-Mask-Detection" className="btn btn-primary">See</a>
                </div>
              </div>
            </div>
          <div className='col-md-3'>
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                  <h6 className="card-title">To Do List</h6>
                  <p className="card-text">This project built using React for help you to track your task.</p>
                  <a href="https://github.com/liaurenpermata/todolist_react_app" className="btn btn-primary">See</a>
                </div>
              </div>
            </div>
          <div className='col-md-3'>
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                  <h6 className="card-title">Starbucks</h6>
                  <p className="card-text">A Starbucks Landing Page Clone using HTML, CSS, and Javascript in a single page aplication.</p>
                  <a href="https://github.com/liaurenpermata/Starbucks_Page" className="btn btn-primary">See</a>
                </div>
              </div>
            </div>

        </div>

      </div>

      <div className='skill'>

        <h3 className='text-center'>Skills</h3>

          <div className='row no-gutters'>

            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://www.w3schools.com/html/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://www.w3schools.com/css/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://getbootstrap.com/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://www.w3schools.com/js/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://reactjs.org/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://vuejs.org/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://laravel.com/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://www.mysql.com/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://www.java.com/en/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://www.w3schools.com/c/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://git-scm.com/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-md-2'>

              <div className="card">
                <div className="card-body">
                  <a href='https://code.visualstudio.com/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                  </a>
                </div>
              </div>

            </div>

          </div>

      </div>

    </div>
  )
}

export default CV