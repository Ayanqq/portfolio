import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire Me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 30vh;
  text-align: center;
  
  ${Button} {
    background-color: transparent;
    
    &::before {
      background-color: ${theme.colors.accent};
    }
  }
  
`