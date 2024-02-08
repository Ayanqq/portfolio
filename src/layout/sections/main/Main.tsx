import React from 'react';
import styled from "styled-components";
import Photo from "./../../../../src/assets/images/proj-3.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <StyledH2>I Am Ayan Nazbiyev</StyledH2>
                    <StyledH1>A Web Developer</StyledH1>
                </div>

                <StyledImg src={Photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
`

const StyledImg = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const StyledH2 = styled.h2`


`
const StyledH1 = styled.h1`

`
