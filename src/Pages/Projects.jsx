import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { FaSearch } from "react-icons/fa";
import { getAllProjectsAPI } from '../Services/AllApis';

function Projects() {
  const [projects,setProjects]=useState([])

  const getAllProjects=async()=>{
    let token = sessionStorage.getItem('token');
    if(token){
      const reqHeader={
        "Content-Type": "application/json",
        "Authorization":"Bearer " + token
         }
         try{
          const allProjects = await getAllProjectsAPI(reqHeader)
          console.log(allProjects.data);
          if(allProjects.status==200){
            setProjects(allProjects.data)
          }
          else{
            console.log("Cant get projects");
            
          }
         }
         catch(error){
          console.log(error);
          
         }
    }
     
      
  }
  useEffect(()=>{
    getAllProjects()
  },[])
  return (
    <>
      <div className='text-center container m-5 p-5 w-100'>
        <h1 className='mb-5'>All Projects</h1>
        <div className='d-flex justify-content-center'>
          <div className='d-flex w-50'>
            <input type="text" className='form-control  ' placeholder= ' Search By Technology' />
            <FaSearch className='fs-3 mt-1' style={{ marginLeft: '-50px' }} />
          </div>
        </div>
      </div>
      <div className="row px-5 mb-5">
       {
        projects.length > 0 ? projects.map(item=>(
          <div className="col m-2">
          <ProjectCard projects={item} />
        </div>
        ))
        : <p className='text-danger fw-bolder'>Can't fetch data</p>
       }
      </div>
    </>
  )
}

export default Projects