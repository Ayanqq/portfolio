import React from 'react';
import styled from "styled-components";
import {StyledLink} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";


type WorkPropsType = {
    src: string;
    title: string;
    description: string;
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </ImageWrapper>


            <StyledDescription>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <StyledLink href={"#"}>demo</StyledLink>
                <StyledLink href={"#"}>code</StyledLink>
            </StyledDescription>

        </StyledWork>
    );
};

const ImageWrapper = styled.div`
  position:relative;
  
  &:hover {
    &::before {
      content:"";
      position:absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background:rgba(0, 0, 0, 0.3);
      backdrop-filter:blur(4px);
    }
    ${Button} {
      opacity: 1;
      z-index:1;
    }
  }
  
  ${Button} {
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    opacity: 0;
    
    &::before {
      width:100%;
      height:100%;
      z-index:-1;
    }
  }

`


const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};

  ${StyledLink} {
    padding: 10px 0;

    & + ${StyledLink} {
      margin-left: 20px;
    }
  }
`


const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 14px 0 10px;
`

const StyledDescription = styled.div`
  padding: 25px 20px;
`

