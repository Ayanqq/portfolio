import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Styled_Skill";
import {Container} from "../../../components/Container";

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconSrc={"quoteSvg"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`

  ${IconWrapper} {
    position: relative;
    border-radius: 0;
    z-index:1;
    background-color: transparent;
    

    &::before {
      content:"";
      position: absolute;
      display: inline-block;
      background-color: #FFFFFF1A;
      width:80px;
      height:80px;
      transform: rotate(-45deg);
      z-index:-1;
      
    }
  }
`

