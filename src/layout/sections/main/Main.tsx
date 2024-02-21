import React from 'react';
import styled from "styled-components";
import Photo from "./../../../../src/assets/images/proj-3.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Ayan Nazbiyev</span></Name>
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
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    bottom: -16px;
    z-index: -1;
    
    margin-left:-5px;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left:20px;
    }
  }

`


const StyledImg = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right:15px;


  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif ", weight: 700, Fmax: 50, Fmin: 36})};
  
  letter-spacing: 0.05em;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 1;
    white-space: nowrap;
    
    
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin:15px 0 22px;
  }
`
const StyledH1 = styled.h1`
  font-size: 27px;
  font-weight: 400;

  ${font({weight: 400, Fmax: 27, Fmin: 20})};

  
  @media ${theme.media.mobile} {
    margin-bottom: 65px;
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

