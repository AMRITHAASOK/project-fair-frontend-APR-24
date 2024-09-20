import React from 'react'
import { TbEdit } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
function View() {
  return (
    <>
        <div className="row">
            <div className="col border shadow p-3">
                <div className="row">
                    <div className="col-8 ">
                        <h5>Project Name</h5>
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
    </>
  )
}

export default View