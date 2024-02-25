import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo:React.FC = () => {
    return (
        <StyledLogo>
            <a href="#">
                <Icon iconSrc={`reactSvg`} width={"50"}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
    
`