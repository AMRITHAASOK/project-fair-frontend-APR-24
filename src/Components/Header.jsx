import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { GiLaptop } from "react-icons/gi";
function Header() {
  return (
    <div><MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/'>
      <GiLaptop className='text-info fs-1 me-3'  />
        Project Fair
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header