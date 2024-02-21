import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";
import {font} from "../../../../styles/Common";


type CardPropsType = {
    description: string;
    title: string;
    imgSrc: string;
}
export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <StyledText>
                <DescriptionCard>{props.description}</DescriptionCard>
                <TitleCard>{props.title}</TitleCard>

                <LinkWrapper>
                    <Link href="">Learn More</Link>
                    <Icon width={"27px"} height={"22px"} viewBox={"0 0 27 22"} iconSrc={"arrowSvg"}/>
                </LinkWrapper>
            </StyledText>

            <PhotoWrapper>
                <StyledImg src={props.imgSrc} alt=""/>
            </PhotoWrapper>
        </StyledCard>
    );
};


const StyledCard = styled.div`
  border: 3px solid ${theme.colors.accent};
  width: 100%;
  border-radius: 30px;
  display: flex;
  padding: 0 51px;
  flex-wrap:wrap;
  
  column-gap:125px;
  row-gap:50px;
  
  @media screen and (max-width:1168px) {
    max-width:500px;
    width:100%;
  }
  
  @media ${theme.media.mobile} {
    margin-bottom:50px;
  }

`
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  color:${theme.colors.accent};
`

const Link = styled.a`
  padding-right: 26px;
  font-size: 20px;
  font-weight: 500;
`


const DescriptionCard = styled.span`
  color: grey;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;

`

const TitleCard = styled.h2`
  ${font({weight:700, Fmax:35, Fmin:24})}
  
  max-width: 380px;
  //font-size: 35px;
  //font-weight: 700;
  text-align: left;
  padding: 36px 0 70px;
  
  @media ${theme.media.mobile} {
    padding:24px 0 45px;
  }
  
`

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 50px;

`

const StyledImg = styled.img`
  border-radius: 20px;
  max-width: 555px;
  width:100%;
  max-height: 394px;
  
  //object-fit: cover;


`

const PhotoWrapper = styled.div`
  transform: translateY(-50px);
  
  @media ${theme.media.mobile} {
    transform: translateY(-25px);
  }
`
