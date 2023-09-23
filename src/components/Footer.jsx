import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../breakpoint'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {FaXTwitter, FaPhoneVolume, FaLocationDot} from 'react-icons/fa6'
import {TbMinusVertical} from 'react-icons/tb'
import {scrollReveal} from '../animation';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';


const Footer = () => {
    const [element, controls] = useScroll();
  return (
    <FooterCont
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
    >
        <div className='circle'>
        </div>
        <div>
            <h2>get<span>linked</span></h2>
            <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
            <div className='term-links'>
                <span>Terms of Use</span>
                <TbMinusVertical size='2rem' />
                <span>Privacy Policy</span>
            </div>
        </div>
        <nav>
            <h3>Useful Links</h3>
            <ul>
            <li><a href="/">Timeline</a></li>
                    <li><a href="/#overview">Overview</a></li>
                    <li><a href="/#faq">FAQs</a></li>
                    <li><Link to="/Register">Register</Link></li>
                <li className='social'>
                    <span>Follow us</span>
                    <FaInstagram size='1.5rem'/>
                    <FaXTwitter size='1.5rem'/>
                    <FaFacebookF size='1.5rem'/>
                    <FaLinkedinIn size='1.5rem'/>
                </li>
            </ul>
        </nav>
        <div className='contact'>
            <h3>Contact Us</h3>
            <ul>
                <li>
                    <FaPhoneVolume />
                    <span>+234 6707653444</span>
                </li>
                <li>
                    <FaLocationDot/>
                    <span>27,Alara Street<br/>Yaba 100012<br/>Lagos State 
                    </span>
                </li>
            </ul>
        </div>
        <p className='copy'>All rights reserved. &copy; getlinked Ltd.</p>
    </FooterCont>
  )
}

export default Footer

const FooterCont = styled(motion.footer)`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 30px 50px;
    .circle {
        position: absolute;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: linear-gradient(180deg, #7b01fe 0%, #ab3dff 100%);
        filter: blur(200px);
        background-blend-mode: hard-light;
        top: -50%;
        left: 10%;
    }
    p {
        line-height: 1.5;
    }
    .term-links {
        display: flex;
        align-items: center;
        svg {
            color: #D434FE;
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        gap:15px;
    }
    .social {
        display: flex;
        align-items: center;
        gap: 10px;
        span {
            color: #D434FE;
        }
    }
    h3 {
        color: #D434FE;
    }
    h2 {
        font-family: 'Clash Display',sans-serif;
        font-size: 2rem;
        line-height: 0;
    }
    h2 span {
        color: #D434FE;
    }
    .copy {
        text-align: center;
        grid-column: 1/4;
    }
    .contact li {
        display: flex;
        gap: 15px;
    }
    @media screen and (${device.md}) {
        grid-template-columns: 1fr;

        .copy {
            grid-column: 1/2;
        }
        .circle {
            display: none;
        }
    }
`