import React, { useContext, useState } from 'react'
import { TbEdit } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addProjectContextResponse } from '../ContextAPI/ContextShare';
import { getUserProjectsAPI } from '../Services/AllApis'

function View() {
    const [projects,setProjects]=useState([])
    console.log(projects);
    const { addProjectRes,setAddProjectRes } = useContext(addProjectContextResponse)

    const getUserProjects=async()=>{
        let token = sessionStorage.getItem('token');
        if(token){
          const reqHeader={
            "Content-Type": "application/json",
            "Authorization":"Bearer " + token
             }
             try{
              const allProjects = await getUserProjectsAPI(reqHeader)
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
        getUserProjects()
      },[addProjectRes])
  return (
    <>
        <div className="row">
        {
              projects.length>0?projects.map(item=>(
                <div className="col">
             <div className="col border shadow p-3">
                <div className="row">
                    <div className="col-8 ">
                        <h5>{item.title}</h5>
                    </div>
                    <div className="col-4" >
                    <TbEdit className='fs-3 text-success fw-bolder me-2'/>
                    <FiExternalLink  className='fs-3 text-primary fw-bolder me-2'/>
                    <IoLogoGithub className='fs-3 text-black fw-bolder me-2' />
                    <RiDeleteBin6Line className='fs-3 text-danger fw-bolder me-2'/>

                    </div>
                </div>
            </div>
            </div>
              )):"No data"
            }
           
        </div>
    </>
  )
}

export default View