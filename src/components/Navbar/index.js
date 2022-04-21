import React from 'react'
import {Nav, NavBarContainer, NavLogo} from './NavBarStyled'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>Cashit</NavLogo>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar
