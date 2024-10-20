import React from 'react';
import {StyledLink} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "./Styled_Work"


type WorkPropsType = {
    src: string;
    title: string;
    description: string;
    href:string
    codeBase:string
}
export const Work = (props: WorkPropsType) => {

    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button href={props.href}>View Project</Button>
            </S.ImageWrapper>


            <S.StyledDescription>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <StyledLink active href={props.href}>demo</StyledLink>
                <StyledLink href={props.codeBase}>code</StyledLink>
            </S.StyledDescription>

        </S.StyledWork>
    );
};



