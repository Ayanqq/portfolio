import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project1.webp"
import timerImg from "../../../assets/images/project2.webp"
import {Container} from "../../../components/Container";


const tabsItems:Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status:"all"
    },
    {
        title: "Landing Page",
        status:"landing"
    },
    {
        title: "React",
        status:"react"
    },
    {
        title: "SPA",
        status: "spa"
    }
]

const worksData = [
    {
        src:socialImg,
        title:"Social Network",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },
    {
        src:timerImg,
        title:"Timer",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type:"react"
    },
]

export const Works:React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus ] = useState("all")
    let filteredWorks = worksData


    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }


    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }


    return (
        <StyledWorks id="works">
            <Container>
                <SectionTitle>My Works</SectionTitle >
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} gap={"30px"}>
                    {filteredWorks.map((w, index) => {
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
 position:relative;
`