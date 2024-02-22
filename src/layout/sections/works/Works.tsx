import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project1.webp"
import timerImg from "../../../assets/images/project2.webp"
import {Container} from "../../../components/Container";


const worksItems = ["All", "Landing Page", "React", "SPA"]

const worksData = [
    {
        src:socialImg,
        title:"Social Network",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        src:timerImg,
        title:"Timer",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]

export const Works:React.FC = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle >
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} gap={"30px"}>
                    {worksData.map((w, index) => {
                        return  <Work src={w.src} key={index}
                                      title={w.title}
                                      description={w.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
 
`