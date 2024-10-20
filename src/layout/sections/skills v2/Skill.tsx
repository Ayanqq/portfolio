// @flow
import * as React from 'react';
import {SkillsDataType} from "./Skills";
import styled from "styled-components";


export const Skill = ({altTitle, logo, title}:SkillsDataType) => {
    return (
        <SkillWrapper>
            <StyledImg src={logo} alt={altTitle} />
            <SmallText>{title}</SmallText>
        </SkillWrapper>
    );
};

const StyledImg = styled.img`
    width: 70px;
    height: 70px;
`
const SkillWrapper = styled.div`
    width:100px;
    height:100px;
`

const SmallText = styled.h5`
    opacity:0.5
`