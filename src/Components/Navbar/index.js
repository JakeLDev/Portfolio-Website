import React from 'react';
import {
  Nav,
  NavMenu,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  
  return (
    <>
      <Nav>
          <NavMenu>
              <Link to='/#About Me' className="button">
                About Me
              </Link>
              <Link to='/#Projects' className="button">
                Projects
              </Link>
              <Link to='/#Work Experience' className="button">
                Work Experience
              </Link>
              <Link to='/#Events' className="button">
                Events
              </Link>
              <Link to='/Blog' className="button">
                Blog -&gt;
              </Link>
          </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;