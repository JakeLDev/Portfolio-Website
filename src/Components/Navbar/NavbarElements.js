import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
// Style of the navbar
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: rgba(42, 218, 226, .95);
  height: 50px;
  display:flex;
  justify-content: center;
  // align-items: center;
  padding: 0px calc((100vw - 1000px) / 2);
  z-index: 12;
  padding: 4px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: 3rem auto;
    place-items: center;
    height: minmax(100%, max-content);
    height: max-content;
  }
`;

// Colour of text on nav bar
export const NavLink = styled(Link)`
  color: #000000;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 150px;
  padding: 0 1rem;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  &.active {
    color: #000000;
    background: rgba(34, 166, 171, .35);
  }
  &:hover {
    color: #000000;
    background: rgba(34, 166, 171, .95);
    font-weight: bold;

  }
`;

// Icon for the hamburger menu
export const Bars = styled(FaBars)`
  color: #808080;
  height: 2rem;
  position: absolute;
  top: 0.75rem;
  right: 1.5rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    place-items: center;
    grid-gap: 0.5rem;
    padding-bottom: 1rem;
  }
`;