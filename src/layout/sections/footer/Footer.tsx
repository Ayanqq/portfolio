import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Styled_Footer"


const SocialItemsData = [
    {
        height: "21px",
        width: "21px",
        viewBox: "0 0 21px 21px",
        iconSrc: "instSvg",
        href: 'https://www.instagram.com/iyeotaq/'
    },
    {
        height: "21px",
        width: "21px",
        viewBox: "0 0 21px 21px",
        iconSrc: "telegramSvg",
        href: 'https://t.me/ayanqq/'
    },
    {
        height: "21px",
        width: "21px",
        viewBox: "0 0 21px 21px",
        iconSrc: "vkSvg",
        href:'https://github.com/Ayanqq'
    },
    {
        height: "21px",
        width: "21px",
        viewBox: "0 0 21px 21px",
        iconSrc: "linkedSvg",
        href:'https://www.linkedin.com/in/ayanqq/'
    },

]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Ayan</S.Name>
                <S.SocialList>
                    {SocialItemsData.map((F, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink href={F.href}>
                                <Icon height={F.height} width={F.width} viewBox={F.viewBox} iconSrc={F.iconSrc}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2024 Ayan Nazbiyev, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};


