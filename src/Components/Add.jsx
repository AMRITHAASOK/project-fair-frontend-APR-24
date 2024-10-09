import React, { useContext, useEffect, useState } from 'react'
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import userImg from '../assets/Auth.jpg'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { addProject } from '../Services/AllApis';
import { addProjectContextResponse } from '../ContextAPI/ContextShare';

function Add() {
  const { addProjectRes,setAddProjectRes } = useContext(addProjectContextResponse)

    const [optSmModal, setOptSmModal] = useState(false);
    const toggleOpen = () => setOptSmModal(!optSmModal);
    //to hold project details
    const [projectDetails,setProjectDetails] = useState({
      title:'',language:'',github:'',website:'',overview:'',projectImg:''
    });
    console.log(projectDetails); 
    const [imgFileStatus,setImgFileStatus] = useState(false);
    //to assign image url
    const [preview,setPreview] = useState(userImg);

    useEffect(()=>{
      if(projectDetails.projectImg.type ==='image/png' || projectDetails.projectImg.type ==='image/jpeg'|| projectDetails.projectImg.type ==='image/jpg'){
        setImgFileStatus(true)
        //convert img file into url
        setPreview(URL.createObjectURL(projectDetails.projectImg))
      }
      else{
        setImgFileStatus(false)
        // setProjectDetails({...projectDetails,projectImg:""})
      }
    },[projectDetails.projectImg])
    
    const handleAdd =async()=>{
      console.log("inside add");
      const {title,language,github,website,overview,projectImg}=projectDetails;
      if(!title ||!language ||!github ||!website||!overview||!projectImg){
        toast.warn('Please Fill the form', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
         
          });
      }
      else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("language",language)
        reqBody.append("github",github)
        reqBody.append("website",website)
        reqBody.append("overview",overview)
        reqBody.append("projectImg",projectImg)
        const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          try{
            //api calling
            const response = await addProject(reqBody,reqHeader)
            console.log(response);
            if(response.status==200){
              setAddProjectRes(response.data)
              toast.success('Project Added successfully..', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
               
                });
                toggleOpen()
                projectDetails({
                  title:"",
                  language:"",
                  github:"",
                  website:"",
                  overview:"",
                  projectImg:" "
                })
                setPreview("")
            }
            else{
              toast.error(response.response.data, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
               
                });
            }
            

          }
          catch(error){
            console.log("Error "+error);
            
          }
        }
      }
      
    }
  return (
    <div>
    <button className='btn btn-info' style={{float:'right'}} onClick={toggleOpen}> Add</button>  
    <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
    <MDBModalDialog size='lg'>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>Project Name</MDBModalTitle>
          <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <div className="row">
            <div className="col-6">
              <label>
                <input onChange={(e)=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})}  type="file" style={{display:'none'}} />
                <img src={preview} width={'100%'} alt="" />
              </label>
              {
                !imgFileStatus && <div className='text-center fw-bolder text-danger'>* Only allowed the following file types .jpg,.jpeg,.png</div>

              }
            </div>
            <div className="col-6">
               
                    <input type="text" onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} className='form-control mb-3' placeholder='Title'  />
                    <input type="text" onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}  className='form-control mb-3' placeholder='Language'  />
                    <input type="text" onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}  className='form-control mb-3' placeholder='Github'  />
                    <input type="text" onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}  className='form-control mb-3' placeholder='Website'  />
                   <textarea onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}  className='form-control mb-3' placeholder='Overview' ></textarea>
                   <div className='d-flex justify-content-evenly'>
                    <button onClick={handleAdd} type='submit' className='btn btn-success'>Add</button>
                    <button type='submit' onClick={toggleOpen} className='btn btn-dark'>Cancel</button>
                   </div>
                
             </div>
          </div>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
  <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
   
      />
    </div>
  )
}

export default Add