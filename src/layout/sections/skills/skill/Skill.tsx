import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./Styled_Skill"

type SkillPropsType = {
    src: string;
    number: string;
    title: string;


}

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <S.IconWrapper>
                <Icon iconSrc={props.src} width={"70px"} height={"70px"}/>
            </S.IconWrapper>
            <div>
                <S.SkillNumber>{props.number}</S.SkillNumber>
                <S.SkillTitle>{props.title}</S.SkillTitle>
            </div>
        </S.StyledSkill>

    );
};



