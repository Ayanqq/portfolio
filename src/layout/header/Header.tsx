import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    )
        ;
};


const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding:10px 0;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  box-shadow: 0 0 74px -10px #7572D5;
`