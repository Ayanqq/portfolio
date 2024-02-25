import {IconWrapper} from "../skills/skill/Styled_Skill";
import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {inputLabelPropsType} from "./Contact";

const Contact = styled.section`
  ${SectionTitle} {
    letter-spacing: 0;
  }
  
  position:relative;
`
const ContactForm = styled.div`
  flex-grow: 1;

  ${SectionTitle} {
    justify-content: flex-start;
  }
`
const Form = styled.form`
  flex-direction: column;
  background-color: #252527;
  padding: 25px;

  textarea {
    resize: none;
    height: 210px;
  }
  
  ${Button} {
    background-color: ${theme.colors.accent};
  }
`

const Label = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  margin-bottom: 8px;
  color: rgb(118, 118, 118);
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;
`


const Input = styled.input<Omit<inputLabelPropsType, 'text'>>`
  background-color: #252527;
  height: 50px;
  border: 1px solid #4A4A4A;
  padding: 7px 12px;

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: ${theme.colors.font};
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-align: left;


`


const Info = styled.div`
  width:370px;
  
  @media screen and (max-width:715px) {
    width:100%;
}
  

  ${IconWrapper} {
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.accent};
    margin:0 auto 20px;
  }

  ${SectionTitle} {
    justify-content: flex-start;
  }
`

const InfoCard = styled.div`
  background-color: ${theme.colors.secondaryBg};
  padding: 25px 25px 0;
  
  ${IconWrapper} {
    min-width:0;
  }
`

export const S = {
    Contact,
    ContactForm,
    Form,
    Label,
    Input,
    Info,
    InfoCard
}