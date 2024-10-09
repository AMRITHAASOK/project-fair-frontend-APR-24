import React, { useState } from 'react'
import { serverURL } from "../Services/serverUrl";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
  } from 'mdb-react-ui-kit';
  import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function ProjectCard({projects}) {
  console.log(projects);
  console.log(`${serverURL}/uploads/${projects.projectImg}`);
  
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleOpen = () => setOptSmModal(!optSmModal);
  return (
    <div> <div className='row'>
    <MDBCard onClick={toggleOpen} style={{ width: '350px', height: '400px' }}>
      <MDBCardImage src={projects?`${serverURL}/uploads/${projects.projectImg}`:'https://th.bing.com/th/id/OIP.HefJP8AoKvdJQhyonaQ67QHaE8?rs=1&pid=ImgDetMain'} position='top' width={'300px'} height={'350px'} alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center'>{projects.title}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  </div>
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
              <img src="https://th.bing.com/th/id/OIP.HefJP8AoKvdJQhyonaQ67QHaE8?rs=1&pid=ImgDetMain" width={'100%'} alt="" />
            </div>
            <div className="col-6">
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum officia cumque impedit, cupiditate non tempora eveniet mollitia natus delectus voluptates voluptas. Eaque consequuntur natus eius ducimus? Doloribus, porro at.</p>
              <h3>Technologies : React </h3>

            </div>
            <hr />
            <div className="row d-flex justify-content-evenly">
              <div className='col'><FaGithub className='fs-1' /></div>
              <div className='col'><FaLink className='fs-1' /></div>
            </div>
          </div>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal></div>
  )
}

export default ProjectCard