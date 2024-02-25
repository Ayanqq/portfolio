import React from 'react';
import styled from "styled-components";
import {StyledLink} from "../../../../components/Link";

export type TabsStatusType = "all" | "landing" | "react" | "spa"


type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>,
    changeFilterStatus:(value:TabsStatusType) => void,
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <div>
            <StyledTabMenu>
                <ul>
                    {props.tabsItems.map((item, index) => {
                        return <StyledLinkItem key={index}>
                            <StyledLink active={props.currentFilterStatus === item.status} as={"button"} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</StyledLink>
                        </StyledLinkItem>
                    })}
                </ul>
            </StyledTabMenu>
        </div>
    );
};


const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;

    margin: 0 auto 40px;

  }


`
const StyledLinkItem = styled.li`
`





