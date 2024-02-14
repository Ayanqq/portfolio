import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Title>Ayan</Title>
                <SocialList>

                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconSrc={"instSvg"}/>
                            </SocialLink>
                        </SocialItem>


                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconSrc={"telegramSvg"}/>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconSrc={"vkSvg"}/>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconSrc={"linkedSvg"}/>
                            </SocialLink>
                        </SocialItem>

                </SocialList>
                <Copyright>© 2023 Ayan Nazbiyev, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #1F1F20;
  padding:40px 0;
  
`
const Title = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
    
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin:30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  
  display:flex;
  justify-content: center;
  align-items: center;
 
  
  color:${theme.colors.accent};
  
  &:hover {
    color:${theme.colors.primaryBg};
    transform:translateY(-4px);
  }
  
`


const Copyright = styled.small`
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`


// 1. WrapperIcon - размер 21х28, но иконка 21х21 из-за этого не центрируется

