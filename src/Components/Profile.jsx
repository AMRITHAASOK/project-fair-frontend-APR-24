import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { FaArrowAltCircleUp } from "react-icons/fa";
import userIcon from '../assets/userIcon.png';

function Profile() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div>
        <div className="row">
            <div className="col-6">
               <h6 className='fw-bolder'>Profile Update !</h6> 
            </div>
            <div className="col-6">
                <button onClick={toggleOpen} className='btn rounded-pill' style={{float:"right"}}><FaArrowAltCircleUp className='fs-3'/></button>
            </div>
        </div>
        <MDBCollapse open={isOpen}>
        <div className="row text-center">
            <label>
                <input type="file" style={{display:'none'}} />
                <img src={userIcon} alt="" width={'200px'} height={'200px'} className='mb-3'/>
                <input type="text" className='form-control mb-3' placeholder='Username' />
                <input type="text" className='form-control mb-3' placeholder='Github link' />
                <input type="text" className='form-control mb-3' placeholder='LinkedIn' />
                <button className='btn btn-success mt-4 mb-3'>Update</button>

            </label>
        </div>
        </MDBCollapse>
    </div>
  )
}

export default Profile