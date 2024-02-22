import React from 'react';

import Photo from "./../../../../src/assets/images/proj-3.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"


export const Main:React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Ayan Nazbiyev</span></S.Name>
                        <S.StyledH1>A Web Developer</S.StyledH1>
                    </div>


                    <S.PhotoWrapper>
                        <S.StyledImg src={Photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};



