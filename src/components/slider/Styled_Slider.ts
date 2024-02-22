import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Slide = styled.div`

  text-align: center;
`

const Text = styled.p`
  margin-top:52px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  margin:22px 0 42px;
  display: inline-block;

`
const Pagination = styled.span`
  margin-top:-10px;
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
    
    & + span {
      margin-left:5px
    }
    
    &.active {
      width:20px;
      background-color: ${theme.colors.accent};
    }
    
  }
`
export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}