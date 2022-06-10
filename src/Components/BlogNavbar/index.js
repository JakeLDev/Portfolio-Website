import React from 'react';
import {
  Nav,
  NavMenu,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';
import { HashLink as Link } from 'react-router-hash-link';

const BlogNavbar = () => {
  
  return (
    <>
      <Nav>
          <NavMenu>
              <Link to="/" className="button" id="blog"> Home </Link>
          </NavMenu>
      </Nav>
    </>
  );
};
  
export default BlogNavbar;