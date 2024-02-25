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


const skillsData = [
    {
        src: "figmaSvg",
        number: "01",
        title: "UX/UI Design"
    },
    {
        src: "scSvg",
        number: "02",
        title: "Front End Development"
    },
    {
        src: "tsSvg",
        number: "03",
        title: "Responsive Design"
    },
]

const cardsData = [
    {
        description: "UX/UI Design",
        title:"Research, Design, Prototype, and Animation",
        imgSrc:Photo1
    },
    {
        description: "Front end development",
        title:"Implement UX design into live and user friendly",
        imgSrc:Photo2
    },
    {
        description: "responsive design",
        title:"I build landing pages and responsive websites and web App",
        imgSrc:Photo3
    }
]


export const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container>
                <SectionTitle>What I Do</SectionTitle>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"} gap={"30px"}
                             margin={"0 0 120px 0"}>

                    {skillsData.map((s, index) => {
                        return <Skill src={s.src} key={index}
                                      number={s.number}
                                      title={s.title}/>
                    })}
                </FlexWrapper>
                <FlexWrapper direction={"column"} align={"center"} wrap={"wrap"} gap={"100px"}>

                    {cardsData.map((c, index)=> {
                        return <Card description={c.description} key={index}
                                     title={c.title}
                                     imgSrc={c.imgSrc}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  position:relative;
`
