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
   <Slide text={"There has not yet been a person born who could not become a programmer"}
          userName={"Igor U."}/>,
   <Slide text={"Maybe later"}
          userName={"Maybe later"}/>,
];

export const Slider = () => (
    <S.Slider>
    <AliceCarousel
        mouseTracking
        items={items}
    />
    </S.Slider>
);







