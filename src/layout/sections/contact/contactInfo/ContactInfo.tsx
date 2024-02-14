import React from 'react';
import styled from "styled-components";

type ContactInfoPropsType = {
    leftText: string;
    rightText: string;
}

export const ContactInfo = (props: ContactInfoPropsType) => {
    return (
        <StyledContactInfo>
            <StyledInfo>
                <StyledLeftText>{props.leftText}</StyledLeftText>
                <StyledRightText>{props.rightText}</StyledRightText>
            </StyledInfo>
        </StyledContactInfo>
    );
};


const StyledContactInfo = styled.div`
`


const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:16px;
`
const StyledLeftText = styled.h5 `
  
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;
`

const StyledRightText = styled.span `
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: right;
  text-transform: capitalize;
`