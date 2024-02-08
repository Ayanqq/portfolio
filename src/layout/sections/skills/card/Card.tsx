import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type CardPropsType = {
    description: string;
    title: string;
    imgSrc: string;
}
export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper direction={"column"} justify={"center"}>
                <DescriptionCard>{props.description}</DescriptionCard>
                <TitleCard>{props.title}</TitleCard>
                <a href="">Learn More</a>
            </FlexWrapper>

            <img src={props.imgSrc} alt=""/>
        </StyledCard>
    );
};


const StyledCard = styled.div`
  background-color: azure;
  max-width: 1116px;
  display: flex;
  justify-content: space-around;
  border-radius: 30px;
  border: 1px solid var(--gray, #C4C4C4);
  width: 100%;

  img {
    width: 554px;
    height: 394px;
    object-fit: cover;
  }
`

const DescriptionCard = styled.span`
`

const TitleCard = styled.h2`
  max-width: 380px;
`
