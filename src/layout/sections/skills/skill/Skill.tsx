import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    src: string;
    number: string;
    title: string;


}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <IconWrapper>
                <Icon iconSrc={props.src} width={"70px"} height={"70px"}/>
            </IconWrapper>
            <div>
                <SkillNumber>{props.number}</SkillNumber>
                <SkillTitle>{props.title}</SkillTitle>
            </div>
        </StyledSkill>

    );
};

const StyledSkill = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 163px;
`

const SkillNumber = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin: 12px 0 8px 57px;

`

const SkillTitle = styled.h5`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-left: 57px;

`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #FFFFFF1A;
  border-radius: 20px;
`

// 1. Вопрос по отступам в блоке Skills
// 2.