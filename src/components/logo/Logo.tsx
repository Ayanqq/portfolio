import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from 'react-scroll'

export const Logo:React.FC = () => {
    return (
        <StyledLogo>
            <a onClick={()=>{scroll.scrollToTop()}}>
                <Icon iconSrc={`reactSvg`} width={"50"}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
    
`