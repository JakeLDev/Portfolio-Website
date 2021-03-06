import styled from 'styled-components';
  
export const Button = styled.div`
   position: fixed;
   bottom: 50px;
   height: 0px;
   right: 10px;
   font-size: 2.5rem;
   z-index: 1;
   cursor: pointer;
   // color: rgba(226, 226, 226, .6);
   color: $props => props.theme.fontColor;
`