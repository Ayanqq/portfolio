import React from 'react';
import styled from "styled-components";
import {StyledLink} from "../../../../components/Link";



export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <StyledTabMenu>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <StyledLinkItem key={index}>
                            <StyledLink href="">{item}</StyledLink>
                        </StyledLinkItem>
                    })}
                </ul>
            </StyledTabMenu>
        </div>
    );
};
// [{titleIg:'',subCards:[{},{},{}]},{},{}]

const StyledTabMenu = styled.nav`
  //margin-bottom: 40px;

  ul {
    display: flex;
    justify-content: space-between;
    max-width:352px;
    width:100%;
    
    margin:0 auto 40px;
    
  }
  
  
`
const StyledLinkItem = styled.li`
  
`





