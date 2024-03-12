import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <>
    <MDBNavbar light bgColor='danger'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.pinimg.com/originals/14/bd/f7/14bdf7aa1794bc0a9965bbff73deefe2.gif'
              alt=''
              height='30'
              loading='lazy'
              
            />
            <h5 className='text-light mt-1'>Counter-App</h5>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header