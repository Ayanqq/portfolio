import {FC} from 'react';
import Tilt from 'react-parallax-tilt';
import Photo from "./../../../../src/assets/images/proj-3.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import {Button} from "../../../components/Button";
import styled from "styled-components";


export const Main: FC = () => {
    return (
        <S.StyledMain id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Ayan Nazbiyev</span></S.Name>
                        <S.StyledH1>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer 💻', 'Looking for job 😁'],
                                    autoStart: true,
                                    loop: true,
                                    delay:70,
                                    deleteSpeed:2
                                }}
                            />
                        </S.StyledH1>
                        <Button className={'btnCV'} href={'https://drive.google.com/file/d/1Y9AIi6afMobhjIgxhRznS9E96BwzHwXO/view?usp=sharing'} target={'_blank'}> Download CV </Button>
                    </div>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.StyledImg src={Photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};

