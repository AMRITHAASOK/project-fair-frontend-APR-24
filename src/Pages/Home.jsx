import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';
import { getHomeProjectsAPI } from '../Services/AllApis';

function Home() {

  let token = sessionStorage.getItem('token');
  const [projects,setProjects]=useState([])
  const getHomeProjects=async()=>{
   
         try{
          const HomeProjects = await getHomeProjectsAPI()
          console.log(HomeProjects);
          if(HomeProjects.status==200){
            setProjects(HomeProjects.data)
          }
          else{
            console.log("Cant get projects");
            
          }
         }
         catch(error){
          console.log(error);
          
         }
    
     
      
  }
  useEffect(()=>{
    getHomeProjects()
  },[])
  return (
    <div>
      <div className="row p-5 ">
        <div className="col-6 text-center p-5 mt-5">
          <h1 className='m-3 text-info'>Project Fair</h1>
          <p className='m-3 '>One destination for all software development Projects</p>
          <div>
           {
            token ?
            <Link to={'/dashboard'}>
            <MDBBtn rounded className='mx-2 m-3' color='info'>
              View Dashboard
            </MDBBtn>
          </Link>
          :
          <Link to={'/login'}>
          <MDBBtn rounded className='mx-2 m-3' color='info'>
            Get Started
          </MDBBtn>
        </Link>
           }
          </div>
        </div>
        <div className="col-6">
          <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="" />
        </div>
      </div>
      <div className="row m-5">
        <h1 className='m-3 text-info text-center'>Explore Our Projects</h1>
            <div className="row">
              {
                projects.length>0?projects.map(item=>(
                  <div className="col">
                    <ProjectCard projects={item}/>
                  </div>
                ))        : <p className='text-danger fw-bolder'>Can't fetch data</p>

              }
            </div>
   
     </div>
     <div className='text-center'>
      <Link to={'/projects'}>
      <button className='btn btn-primary m-5'>View Projects</button>
      </Link>
    
     </div>
    </div>
  )
}

export default Home