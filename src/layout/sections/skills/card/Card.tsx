import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";


type CardPropsType = {
    description: string;
    title: string;
    imgSrc: string;
}
export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <StyledText>
                <DescriptionCard>{props.description}</DescriptionCard>
                <TitleCard>{props.title}</TitleCard>

                <LinkWrapper>
                    <Link href="">Learn More</Link>
                    <Icon iconSrc={"arrowSvg"}/>
                </LinkWrapper>
            </StyledText>

            <PhotoWrapper>
                <StyledImg src={props.imgSrc} alt=""/>
            </PhotoWrapper>
        </StyledCard>
    );
};


const StyledCard = styled.div`
  border: 3px solid ${theme.colors.accent};
  width: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  padding: 0 51px;

`
const LinkWrapper = styled.div`
  display: flex;

`

const Link = styled.a`
  padding-right: 26px;
  font-size: 20px;
  font-weight: 500;
  color: white;
`


const DescriptionCard = styled.span`
  color: grey;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;

`

const TitleCard = styled.h2`
  max-width: 380px;
  font-size: 35px;
  font-weight: 700;
  text-align: left;
`

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

const StyledImg = styled.img`
  border-radius: 20px;
  width: 555px;
  height: 395px;


`

const PhotoWrapper = styled.div`
`
// 1. Как сделать отступ между карточками
// 2. Не поднимается вверх карточка
// 3. Как обращаться к элементу по-середине, через псевдоклассы ?