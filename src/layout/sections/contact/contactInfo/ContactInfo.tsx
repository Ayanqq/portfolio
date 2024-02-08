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
                <h5>{props.leftText}</h5>
                <span>{props.rightText}</span>
            </StyledInfo>
        </StyledContactInfo>
    );
};


const StyledContactInfo = styled.div`

  
`


const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border:1px solid black;
  gap:20px;
`
