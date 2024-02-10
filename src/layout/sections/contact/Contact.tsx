import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {ContactInfo} from "./contactInfo/ContactInfo";

type CardType = {
    iconSrc: string
    content: {leftText: string, rightText: string}[] // Array<{leftText: string, rightText: string}>
}

const cards: CardType[] = [{
    iconSrc: 'contactSvg1',
    content:[
        {leftText: 'Country', rightText: 'Bangladesh'},
        {leftText: 'City', rightText: 'Dhaka'},
        {leftText: 'Street', rightText: '35 Vhatara, Badda'},
    ]
},

]


export const Contact = () => {
    return (
        <StyledContact>


            <StyledContactForm>
                <FlexWrapper direction={"column"}>
                    <SectionTitle>Leave Us Your Info</SectionTitle>
                    <StyledForm>
                        <label>
                            Your Full Name (Required)
                            <input type={"text"} placeholder={""}/>
                        </label>

                        <label>
                            Your Full Name (Required)
                            <input type={"text"} placeholder={""}/>
                        </label>

                        <label>
                            Your Full Name (Required)
                            <input type={"text"} placeholder={""}/>
                        </label>

                        <label>
                            Your Full Name (Required)
                            <textarea></textarea>
                        </label>
                        <Button>Send Message</Button>
                    </StyledForm>
                </FlexWrapper>
            </StyledContactForm>

            <StyledInfo>
                <FlexWrapper direction={'column'}>
                    <SectionTitle>Contact Information</SectionTitle>

                    { cards.map((card)=>(
                            <>
                                <Icon iconSrc={card.iconSrc}/>
                                {card.content.map((content)=>(
                                    <ContactInfo leftText={content.leftText} rightText={content.rightText}/>
                                ))}
                            </>
                        ))
                    }




                </FlexWrapper>
            </StyledInfo>

        </StyledContact>
    );
};

const StyledContact = styled.section`
  display: flex;
  width: 100%;
  gap: 50px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 50%;

  label {
    display: flex;
    flex-direction: column;
  }
`

const StyledContactForm = styled.div`
  min-width: 50%;
`

const StyledInfo = styled.div`
  width: 50%;
  border:1px solid black;
  
  Icon {
    
  }
`


