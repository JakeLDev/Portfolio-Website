import React, { useEffect } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';

import "./navbar.css"

const Navbar = () => {

  const [burgerOpen, setBurgerOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const onWindowResize = () => setIsMobile(window.innerWidth < 768);

  useEffect(() => {
    onWindowResize();
    window.onresize = onWindowResize;
  }, []);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  }

  return (
    <>
      <Nav>
        {isMobile &&
          <Bars className="burger" onClick={toggleBurger}/>
        }
        {(!isMobile || burgerOpen) &&
          <NavMenu>
              <a href='#bannerEnd' className="button">
                About Me
              </a>
              <a href='#aboutEnd' className="button">
                Projects
              </a>
              <a href='#projectEnd' className="button">
                Work Experience
              </a>
          </NavMenu>
        }
      </Nav>
    </>
  );
};
  
export default Navbar;