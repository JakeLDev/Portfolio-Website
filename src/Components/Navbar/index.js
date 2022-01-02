import React, { useEffect } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavQFin,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';
  
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
        <NavQFin className="QFin" to="/home" activestyle="true">
          QFin UWA
        </NavQFin>
        {isMobile &&
          <Bars className="burger" onClick={toggleBurger}/>
        }
        {(!isMobile || burgerOpen) &&
          <NavMenu>
            <NavLink to='/about' activestyle="true">
              About Me
            </NavLink>
            <NavLink to='/projects' activestyle="true">
              Projects
            </NavLink>
            <NavLink to='/events' activestyle="true">
              Work Experience
            </NavLink>
          </NavMenu>
        }
      </Nav>
    </>
  );
};
  
export default Navbar;