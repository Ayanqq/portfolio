import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {StyledLink} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

const ImageWrapper = styled.div`
  position:relative;

  ${Button} {
    opacity: 0;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -30%);
    transition:${theme.animations.transition};

    &::before {
      width:100%;
      height:100%;

    }
  }

  &::before {
    content:"";
    position:absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    
    backdrop-filter:blur(4px);
    opacity: 0;
    
    transition:${theme.animations.transition}

  
  }
  
  
  &:hover {
    &::before {
      opacity: 1;
      
      
    }
    
    ${Button} {
      opacity: 1;
      transition:${theme.animations.transition};
      transform:translate(-50%, -50%);
    }
  }
  
  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

`


const StyledWork = styled.div`
  
  width: 330px;
  flex-grow: 1;
  background-color: ${theme.colors.secondaryBg};

  ${StyledLink} {
    padding: 10px 0;

    & + ${StyledLink} {
      margin-left: 20px;
    }
  }
  
  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`


const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  vertical-align: top;
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

export const S = {
    ImageWrapper,
    StyledWork,
    Image,
    Title,
    Description,
    StyledDescription
}