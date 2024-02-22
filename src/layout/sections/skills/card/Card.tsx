import React from 'react';
import {S} from './Styled_Card'
import {Icon} from "../../../../components/icon/Icon";



type CardPropsType = {
    description: string;
    title: string;
    imgSrc: string;
}
export const Card:React.FC<CardPropsType> = (props: CardPropsType) => {
    return (
        <S.StyledCard>
            <S.StyledText>
                <S.DescriptionCard>{props.description}</S.DescriptionCard>
                <S.TitleCard>{props.title}</S.TitleCard>

                <S.LinkWrapper>
                    <S.Link href="">Learn More</S.Link>
                    <Icon width={"27px"} height={"22px"} viewBox={"0 0 27 22"} iconSrc={"arrowSvg"}/>
                </S.LinkWrapper>
            </S.StyledText>

            <S.PhotoWrapper>
                <S.StyledImg src={props.imgSrc} alt=""/>
            </S.PhotoWrapper>
        </S.StyledCard>
    );
};



