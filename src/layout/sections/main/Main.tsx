import React from 'react';
import styled from "styled-components";
import Photo from "./../../../../src/assets/images/proj-3.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <StyledH2>I am <span>Ayan Nazbiyev</span></StyledH2>
                        <StyledH1>A Web Developer</StyledH1>
                    </div>


                    <PhotoWrapper>
                    <StyledImg src={Photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const PhotoWrapper = styled.div`
  position:relative;
  z-index:1;
  
  &::before {
    content:"";
    width:360px;
    height:470px;
    border:5px solid ${theme.colors.accent};
    
    position:absolute;
    top:-24px;
    left:24px;
    bottom:-16px;
    z-index:-1;
  }
    
`


const StyledImg = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const StyledH2 = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin:10px 0;
  
  span {
    position:relative;
    z-index:1;
    
    &::before {
      content: "";
      display:inline-block;
      width:100%;
      height:20px;
      background-color: ${theme.colors.accent};
      position:absolute;
      bottom:0;
      z-index:-1;
    }
  }
  
`
const StyledH1 = styled.h1`
  font-size: 27px;
  font-weight: 400;
  
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

