import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'
import {S} from "./Styled_Slider"


type SlidePropsType = {
    text:string,
    userName:string
}


const Slide = (props:SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}


const items = [
   <Slide text={"Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"}
          userName={"I Ivanov"}/>,
   <Slide text={"Lorem ipsum"}
          userName={"I Ivanov"}/>,
   <Slide text={"Lorem ipsum"}
          userName={"I Ivanov"}/>
];

export const Slider = () => (
    <S.Slider>
    <AliceCarousel
        mouseTracking
        items={items}
    />
    </S.Slider>
);







