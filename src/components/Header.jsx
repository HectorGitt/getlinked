import React from 'react'
import styled from 'styled-components'
import hero from '../assets/images/Purple-Lens-Flare-PNG.png'
import heroimg from '../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import ball from '../assets/images/ball.png'
import Button from './Button';
import textIcon from '../assets/images/textIcon.png'
import bulb from '../assets/images/bulb.png'
import line from '../assets/images/line.png'
import Nav from '../components/Nav';
import { device } from '../breakpoint'
import { useCountdown } from './Countdown'

const Header = () => {
    const nowInMS = new Date().getTime();
    // nov 18, 2023 00:00:00
    const nextDate = new Date(2023, 10, 18, 0, 0, 0);
    const target = nextDate + nowInMS;
    const [hours, minutes, seconds] = useCountdown(target);
  return (
    <HeaderCont>
        <Nav/>
        <div className='hero'>
            <div className='hero-img'>
                <img src={heroimg} alt="hero" />
                <img src={ball} alt="ball" />
            </div>
            <div className='hero-content'>
                <div className='banner-text'>
                    <h2>Igniting a Revolution in HR Innovation</h2>
                    <img src={line} alt="" />
                </div>
                
                <div className='heading'>
                    <h1>getlinked Tech<br/>Hackathon 1.0
                    <img className='textIcon' src={textIcon} alt="" />
                    <img className='bulb' src={bulb} alt="" />
                    </h1>
                    
                </div>
                
                <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <Button text='Register' to='/register' />
                <div className='countdown'>
                    <span>{hours}<small>H</small></span>
                    <span>{minutes}<small>M</small></span>
                    <span>{seconds}<small>S</small></span>
                </div>
            </div>
        </div>
    </HeaderCont>
  )
}

export default Header;

const HeaderCont = styled.header`
    min-height: 100vh;
    height: fit-content;
    background: url(${hero});
    background-blend-mode:  hard-light;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #140D27;
    position: relative;
    .hero {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin-left: 5rem;
    }
    .hero-img {
        width: 100%;
        img {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 42.1%;
        }
    }
    .hero-content {
        position: relative;
        .banner-text {
            display: flex;
            flex-direction: column;
            margin-right: 2rem;
            h2 {       
                font-size: 2rem;
                font-family: 'Clash Display',sans-serif;
                font-weight: 600;
                line-height: 0;
                text-align: end;
            }
            img {
                align-self: flex-end;
                width: 13rem;
            }
        }   
        
        p {
            line-height: 1.5;
            width: 24rem;
        }
        div {
            display: flex;
            position: relative;
        }
        .heading {
            margin-top: 60px;
        }
        h1 {
            display: inline;
            position: relative;
        }
        .textIcon {
            display: inline;
            height: 2.5rem;
        }

        .bulb {
            position: absolute;
            top: -50%;
            left: 18.5rem;
        }
        .countdown {
            margin-top: 2rem;
            gap: 1rem;
            span {
                font-size: 3rem;
                font-family: 'Unica One', cursive;
            }
            small {
                font-size: 1rem;
            }
        }
    }
    @media screen and (${device.md}) {
        height: fit-content;
        padding-bottom: 15rem;
        
        .hero {
            margin-left: 0;
        }
        .hero-img {
            img {
                width: 100%;
            }
        }
        .hero-content {
            text-align: center;
            .bulb {
                left: 20rem;
            }
            p {
                width: 100%;
            }
        }
        
        .heading {
            margin: 2rem;
            justify-content: center;
        }
        .countdown {
            margin: 0 auto;
            display: flex;
            justify-content: center;
        }
        
    }
    @media screen and (${device.sm}) {
        padding-bottom: 10rem;
        .hero-content {
            .heading {
                margin-top: 90px;
            }
            .banner-text h2 {
                line-height: 0;
                font-size: 1.2rem;
            }
        }
    }
    @media screen and (${device.xs}) {
        padding-bottom: 10rem;
        .hero-content {
            .banner-text h2 {
                line-height: 1;
            }
            .bulb {
                top: -27%;
                left: 13rem;
            }
        }
        
    }
    
`