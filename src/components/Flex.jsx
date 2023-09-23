import React from 'react'
import styled from 'styled-components'
import { device } from '../breakpoint';
import {scrollReveal} from '../animation';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';

const Flex = ({children}) => {
    const [element, controls] = useScroll();

  return (
    <FlexCont className='flex'
        variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
        {children}
    </FlexCont>
  )
}

export default Flex

const FlexCont = styled(motion.div)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    gap: 50px;
    border-top: 1px solid #cccccc3d;
    width: 100%;
    min-height: 100vh;
    .intro-circle, .faq-circle, .rules-circle, .criteria-circle, .privacy-circle {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: linear-gradient(180deg, #7b01fe 0%, #ab3dff 100%);
        filter: blur(200px);
        background-blend-mode: hard-light;
    }
    .intro-circle {
        top: 70%;
        left: 10%;
    }
    .rules-circle {
        top: 30%;
        right: -20%;
    }
    .criteria-circle {
        top: 30%;
        left: -20%;
    }
    .faq-circle {
        top: 10%;
        right: 10%;
    }
    .privacy-circle {
        top: 30%;
        left: -20%;
    }

    &:nth-child(odd) {
        flex-direction: row-reverse;
    }

    & > * {
        flex: 1;
    }
    .img-cont {
        flex: 1;
        display: flex;
        justify-content: center;
        img {
            max-height: 100vh;
            max-width: 100%;
        }
    }
    
    .box {
        border-radius: 5px;
        border: 1px solid #D434FE;
        background: rgba(217, 217, 217, 0.03);
        padding: 30px;
    }
    .faded {
        color: rgba(255, 255, 255, 0.75);
    }
    .check {
        display: flex;
        align-items: center;
        gap: 10px;
        p {
            font-size: 16px;
        }
        svg {
            color: #2DE100;
            background-color: white;
        }
    }
    .flex-content {
        width: 100%;
        h2 {
            font-size: 2rem;
            font-family: 'Clash Display',sans-serif;
            span {
                color: #D434FE;
                display: block;
            }
        }
        p {
            span {
                color: #FF26B9;
            }
        }
        
    }
    @media screen and (${device.md}) {
        &.flex {
            flex-direction:column;
            text-align: center;
        }
        &.flex:nth-child(n+5) {
            flex-direction:column-reverse;
        }
        .rules-circle, .faq-circle {
            display: none;
        }
    }
`