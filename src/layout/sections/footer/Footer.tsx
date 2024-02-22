import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Styled_Footer"


const SocialItemsData = [{
        height: "21px",
        width: "21px",
        viewBox:"0 0 21px 21px",
        iconSrc: "instSvg",
    },
    {
        height: "21px",
        width: "21px",
        viewBox:"0 0 21px 21px",
        iconSrc: "telegramSvg",
    },
    {
        height: "21px",
        width: "21px",
        viewBox:"0 0 21px 21px",
        iconSrc: "vkSvg",
    },
    {
        height: "21px",
        width: "21px",
        viewBox:"0 0 21px 21px",
        iconSrc: "linkedSvg",
    },

]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Ayan</S.Name>
                <S.SocialList>
                    {SocialItemsData.map((F, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height={F.height} width={F.width} viewBox={F.viewBox} iconSrc={F.iconSrc}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Ayan Nazbiyev, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};


