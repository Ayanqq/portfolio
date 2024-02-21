import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})}


  display: flex;
  justify-content: center;
  //font-family: 'Josefin Sans', sans-serif;
  //font-size: 36px;
  //font-weight: 600;
  letter-spacing: 5px;

  position: relative;
  margin-bottom: 90px;


  &::before {
    content: '';
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    display: inline-block;

    position: absolute;
    bottom: -30px;
    
    @media ${theme.media.mobile} {
      bottom:-24px;
    }

  }


`