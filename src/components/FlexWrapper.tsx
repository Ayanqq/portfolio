import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?:string;
    gap?:string;
    margin?:string;
    rowGap?:string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => props.gap || "0px"};
  margin: ${props => props.margin || "0"};
  row-gap: ${props => props.rowGap};
  height:100%;
  
`