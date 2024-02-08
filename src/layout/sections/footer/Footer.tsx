import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

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
  min-height: 30vh;
  background-color: #ffbe86;
`
const Title = styled.h3`
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
`


const Copyright = styled.small`
`