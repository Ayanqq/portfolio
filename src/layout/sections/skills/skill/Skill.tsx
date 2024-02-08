import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import Icon1 from "./../../../../assets/images/icon-1.svg"

type SkillPropsType = {
    src: string;
    number: string;
    title: string;


}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <div>
                <img alt="icon" src={props.src}/>
            </div>
            <SkillNumber>{props.number}</SkillNumber>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>

    );
};

const StyledSkill = styled.div`
  display: flex;
`

const SkillNumber = styled.span`
`

const SkillTitle = styled.h3`
`