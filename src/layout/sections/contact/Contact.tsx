import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {ContactInfo} from "./contactInfo/ContactInfo";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {IconWrapper} from "../skills/skill/Skill";

type CardType = {
    iconSrc: string
    width:string
    height:string
    viewBox:string
    content: { leftText: string, rightText: string }[] // Array<{leftText: string, rightText: string}>
}

const cards: CardType[] = [{
    iconSrc: 'contactSvg1', width:'15px', height:'15px', viewBox:"0 0 15 15",
    content: [
        {leftText: 'Country', rightText: 'Bangladesh'},
        {leftText: 'City', rightText: 'Dhaka'},
        {leftText: 'Street', rightText: '35 Vhatara, Badda'},
    ]
}, {
    iconSrc: 'contactSvg2', width:'15px', height:'13.5px', viewBox:"0 0 15 13.5",
    content: [
        {leftText: 'Email', rightText: 'youremail@gmail.com'},
        {leftText: 'Skype', rightText: '@Yourusername'},
        {leftText: 'Telegram', rightText: '@Yourusername'},]

}, {
    iconSrc: 'contactSvg3', width:'10.5px', height:'15px', viewBox:"0 0 10.5 15",
    content: [
        {leftText: 'Support Services', rightText: '15369'},
        {leftText: 'Office', rightText: '+58 (021)356 587 235'},
        {leftText: 'Personal:', rightText: '+58 (021)356 587 235'},]
}

]


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper gap={"30px"}>
                    <StyledContactForm>
                        <FlexWrapper direction={"column"}>
                            <SectionTitle>Leave Us Your Info</SectionTitle>
                            <StyledForm>
                                <StyledLabel>
                                    Your Full Name (Required)
                                    <StyledInput type={"text"} placeholder={""} required/>
                                </StyledLabel>

                                <StyledLabel>
                                    Your Email (required)
                                    <StyledInput type={"text"} placeholder={""} required/>
                                </StyledLabel>

                                <StyledLabel>
                                    Subject
                                    <StyledInput type={"text"} placeholder={""} required/>
                                </StyledLabel>

                                <StyledLabel>
                                    Your message
                                    <StyledInput placeholder={""} as={"textarea"}/>
                                </StyledLabel>
                                <Button>Send Message</Button>
                            </StyledForm>
                        </FlexWrapper>
                    </StyledContactForm>

                    <StyledInfo>
                        <FlexWrapper direction={'column'}>
                            <SectionTitle>Contact Information</SectionTitle>
                            <FlexWrapper direction={"column"} gap={"18px"}>
                            {cards.map((card: CardType) => (
                                <>

                                    <StyledInfoCard>
                                        <IconWrapper>
                                            <Icon iconSrc={card.iconSrc} width={card.width} height={card.height}
                                                  viewBox={card.viewBox}/>
                                        </IconWrapper>
                                        {card.content.map((content) =>
                                            (<ContactInfo leftText={content.leftText} rightText={content.rightText}/>))}
                                    </StyledInfoCard>

                                </>
                            ))
                            }
                            </FlexWrapper>
                        </FlexWrapper>
                    </StyledInfo>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  ${SectionTitle} {
    letter-spacing: 0;
  }
`
const StyledContactForm = styled.div`
  flex-grow: 1;

  ${SectionTitle} {
    justify-content: flex-start;
  }
`
const StyledForm = styled.form`
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

const StyledLabel = styled.form`
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


const StyledInput = styled.input`
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


const StyledInfo = styled.div`
  width: 370px;

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

const StyledInfoCard = styled.div`
  background-color: ${theme.colors.secondaryBg};
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 25px 25px 0;
`
// 1. Как первому заголовку сделать flex-start, а второму заголовку flex-end


