import React,{useState} from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import registerImg from '../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png'
import Popup from '../components/Popup'
import {RegisterForm} from '../components/form/RegisterForm'
import { device } from '../breakpoint'
import {pageAnime} from '../animation';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';

const Register = () => {
    const [element, controls] = useScroll();
    const [showPopup, setShowPopup] = useState(false)
    const handleBack = () => {
        setShowPopup(false)
    }
  return (
    <RegisterCont
        variants={pageAnime}
        animate={controls}
        initial="hidden"
        ref={element}
    >
        <Nav/>
        <div className='content'>
            <div>
                <div className='circle'></div>
                <div className='circle2'></div>
                <div className='img-cont'>
                <img src={registerImg} alt="" />
                </div>
                <RegisterForm/>
            </div>
        </div>

        {showPopup && <Popup handleBack={handleBack} />}
    </RegisterCont>
  )
}

export default Register

const RegisterCont = styled(motion.div)`
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        margin-top: 30px;

    }
    .content > div {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0 20px;
        img {
            width: 100%;
        }
        & > * {
            flex: 1;
        }
        
    }
    .circle {
        position: absolute;
        top: 10%;
        left: -10%;
        width: 30%;
        height: 30%;
        border-radius: 20px;
        background: linear-gradient(180deg, #7b01fe 0%, #ab3dff 100%);
        filter: blur(200px);
    }
    .circle2 {
        position: absolute;
        top: 40%;
        right: -15%;
        width: 35%;
        height: 35%;
        border-radius: 20px;
        background: linear-gradient(180deg, #D434FE 0%, #d634fe98 100%);
        filter: blur(200px);
        pointer-events: none;
    }
    h2,h3 {
        color: #D434FE;
        font-weight: 600;
    }
    @media screen and (${device.md}) {
        .content > div {
            flex-direction: column;
            img {
                width: 50%;
            }
            .img-cont {
                display: flex;
                justify-content: center;
            }
        }
    }
`