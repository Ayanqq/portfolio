import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const StyledLink = styled.a<{active?:boolean}>`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
  
  
  &:hover {
    &::before {
      height: 10px;

    }
  }

  &::before {
    content: "";
    display: inline-block;

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    height:0;
    
    ${props => props.active && css<{active?:boolean}>`
      height:10px;
    `}
  }
`