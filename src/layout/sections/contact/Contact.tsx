import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {ContactInfo} from "./contactInfo/ContactInfo";
import {Container} from "../../../components/Container";
import {IconWrapper} from "../skills/skill/Styled_Skill";
import {S} from "./Styled_Contact"

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


export const Contact:React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <FlexWrapper gap={"30px"} wrap={"wrap-reverse"} rowGap={"50px"}>
                    <S.ContactForm>
                        <FlexWrapper direction={"column"}>
                            <SectionTitle>Leave Us Your Info</SectionTitle>

                            <S.Form>
                                <S.Label>
                                    Your Full Name (Required)
                                    <S.Input type={"text"} placeholder={""} required/>
                                </S.Label>

                                <S.Label>
                                    Your Email (required)
                                    <S.Input type={"text"} placeholder={""} required/>
                                </S.Label>

                                <S.Label>
                                    Subject
                                    <S.Input type={"text"} placeholder={""} required/>
                                </S.Label>

                                <S.Label>
                                    Your message
                                    <S.Input placeholder={""} as={"textarea"}/>
                                </S.Label>

                                <Button>Send Message</Button>
                            </S.Form>
                        </FlexWrapper>
                    </S.ContactForm>

                    <S.Info>
                        <FlexWrapper direction={'column'}>
                            <SectionTitle>Contact Information</SectionTitle>
                            <FlexWrapper direction={"column"} gap={"18px"}>
                            {cards.map((card: CardType) => (
                                <>

                                    <S.InfoCard>
                                        <IconWrapper>
                                            <Icon iconSrc={card.iconSrc} width={card.width} height={card.height}
                                                  viewBox={card.viewBox}/>
                                        </IconWrapper>
                                        {card.content.map((content) =>
                                            (<ContactInfo leftText={content.leftText} rightText={content.rightText}/>))}
                                    </S.InfoCard>

                                </>
                            ))
                            }
                            </FlexWrapper>
                        </FlexWrapper>
                    </S.Info>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};




