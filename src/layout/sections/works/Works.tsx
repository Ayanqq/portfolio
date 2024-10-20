import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import todolistImg from "../../../assets/images/project3.png"
import counterImg from "../../../assets/images/project4.png"
import {Container} from "../../../components/Container";
import {AnimatePresence, motion} from "framer-motion"

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
        src:todolistImg,
        title:"Todolist",
        description:"Todolist web application, includes CRUD actions. Used technologies: material ui, react, rtk",
        href:'https://ayanqq.github.io/tasker/#/login',
        codeBase:'https://github.com/Ayanqq/tasker',
        type: "spa"
    },
    {
        src:counterImg ,
        title:"Counter",
        description:"Simple counter, you could add two numbers and click to count. Used technologies: react, rtk",
        href:'https://ayanqq.github.io/counter_2.0/',
        codeBase:'https://github.com/Ayanqq/counter_2.0',
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
                    <AnimatePresence>
                    {filteredWorks.map((w, index) => {
                        return (
                            <motion.div>
                                <Work src={w.src} key={index}
                                      title={w.title}
                                      description={w.description}
                                      href={w.href}
                                      codeBase={w.codeBase}
                                />
                            </motion.div>

                        )
                    })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
 position:relative;
`