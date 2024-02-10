import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Card} from "./card/Card";
import Photo1 from "./../../../assets/images/proj-1.jpeg"
import Photo2 from "./../../../assets/images/proj-2.jpeg"
import Photo3 from "./../../../assets/images/proj-3.jpeg"
import {Container} from "../../../components/Container";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>What I Do</SectionTitle>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Skill src={"figmaSvg"} number={"01"} title={"UX/UI Design"}/>
                    <Skill src={"scSvg"} number={"02"} title={"Front End Development"}/>
                    <Skill src={"tsSvg"} number={"03"} title={"Responsive Design"}/>
                </FlexWrapper>


                <FlexWrapper direction={"column"} align={"center"}>
                    <Card description={"UX/UI Design"} title={"Research, Design, Prototype, and Animation"}
                          imgSrc={Photo1}/>
                    <Card description={"Front end development"}
                          title={"Implement UX design into live and user friendly "}
                          imgSrc={Photo2}/>
                    <Card description={"responsive design"}
                          title={"I build landing pages and responsive websites and web App"} imgSrc={Photo3}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

`