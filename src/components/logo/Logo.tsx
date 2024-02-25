import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from 'react-scroll'

export const Logo: React.FC = () => {
    return (
        <StyledLogo>
            <a onClick={() => {
                scroll.scrollToTop()
            }}>
                <Icon iconSrc={`reactSvg`} width={"50"}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`

    animation-name: rotation;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rotation {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  
`