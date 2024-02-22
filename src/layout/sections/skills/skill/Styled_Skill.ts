import {theme} from "../../../../styles/Theme";
import styled from "styled-components";

const StyledSkill = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap:30px;
  width:350px;
  white-space: pre;
  
`

const SkillNumber = styled.span`
  font-size: 20px;
  font-weight: 500;

`

const SkillTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  white-space: pre;

`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 100px;
  background-color: #FFFFFF1A;
  border-radius: 20px;
  
  color:${theme.colors.accent}
`

export const S = {
    StyledSkill,
    SkillNumber,
    SkillTitle,
    IconWrapper
}