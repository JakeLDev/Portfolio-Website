import React from 'react';
import {
  Nav,
  NavMenu,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  
  return (
    <>
      <Nav>
          <NavMenu>
              <a href='/#About Me' className="button">
                About Me
              </a>
              <a href='/#Projects' className="button">
                Projects
              </a>
              <a href='/#Work Experience' className="button">
                Work Experience
              </a>
              <a href='/#Events' className="button">
                Events
              </a>
              <a href='/Blog' className="button">
                Blog -&gt;
              </a>
          </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;