import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from 'react-scroll'

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconSrc={"arrowTopSvg"} width={"16px"} height={"15px"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}


        </>
    );
};

const StyledGoTopBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: #0000004D;;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 20px;
  right: 20px;
`