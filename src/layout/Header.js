import React, { useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


const Header = () => {
    const context = useContext(UserContext)
    return (
     <Navbar color="warning" light expand="md">
         <NavbarBrand>
             <Link to="/" className="text-dark">GitSearch</Link>
         </NavbarBrand>
         <NavbarText className="text-dark">
             {context.user?.email ? context.user.email:""}

         </NavbarText>
         <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
            {context.user ? (  <NavItem>
            <NavLink onClick={() => {context.setUser(null)}} className="text-dark">Logout</NavLink>
          </NavItem>) : (
              <>
                <NavItem>
                <NavLink tag={Link} to="/signup" className="text-dark">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin"className="text-dark">Signin</NavLink>
              </NavItem>
              </>
          )}
        
        
        </Nav>
      </Collapse>
     </Navbar>
    )
}

export default Header
