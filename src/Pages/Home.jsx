import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';

function Home() {
 
  return (
    <div>
      <div className="row p-5 ">
        <div className="col-6 text-center p-5 mt-5">
          <h1 className='m-3 text-info'>Project Fair</h1>
          <p className='m-3 '>One destination for all software development Projects</p>
          <div>
            <Link to={'/login'}>
              <MDBBtn rounded className='mx-2 m-3' color='info'>
                Get Started
              </MDBBtn>
            </Link>
          </div>
        </div>
        <div className="col-6">
          <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="" />
        </div>
      </div>
      <div className="row m-5">
        <h1 className='m-3 text-info text-center'>Explore Our Projects</h1>
     <ProjectCard/>
     </div>
    </div>
  )
}

export default Home