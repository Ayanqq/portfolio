import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


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
                <a href="">Learn More</a>
            </StyledText>

            <img src={props.imgSrc} alt=""/>
        </StyledCard>
    );
};


const StyledCard = styled.div`
  border:3px solid ${theme.colors.accent};
  width: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;


  img {
    width: 554px;
    height: 394px;
    object-fit: cover;
    border-radius: 10px;
  }
`

const DescriptionCard = styled.span`
`

const TitleCard = styled.h2`
  max-width: 380px;
`

const StyledText = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    
`