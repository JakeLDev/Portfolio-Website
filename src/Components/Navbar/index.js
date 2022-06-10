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
              <Link to='/#About Me' className="button" id="notblog">
                About Me
              </Link>
              <Link to='/#Projects' className="button" id="notblog">
                Projects
              </Link>
              <Link to='/#Work Experience' className="button" id='notblog'>
                Work Experience
              </Link>
              <Link to='/#Events' className="button" id="notblog">
                Events
              </Link>
              <Link to='/Blog' className="button" id="blog">
                Blog -&gt;
              </Link>
          </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;