import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import idea from '../assets/images/The big idea.png'
import rules from '../assets/images/7450159 1.png'
import criteria from '../assets/images/8046554 1.png'
import faq from '../assets/images/cwok_casual_21 1.png'
import cup from '../assets/images/cup.png'
import rewards from '../assets/images/Rewards.png'
import Liberty from '../assets/images/Liberty.png'
import Liberty2 from '../assets/images/Liberty2.png'
import Winwise from '../assets/images/Winwise.png'
import wisper from '../assets/images/wisper.png'
import paybox from '../assets/images/Paybox.png'
import vizual from '../assets/images/Vizual.png'
import Dropdown from '../components/Dropdown';
import policy from '../assets/images/privacy.png'
import verticalLine from '../assets/images/verticalLine.png';
import HorizontalLine from '../assets/images/horizontalLine.png';
import listStyle from '../assets/images/list-style.png'
import Timeline from '../components/Timeline';
import Flex from '../components/Flex';
import { device } from '../breakpoint';
import Footer from '../components/Footer';
import {scrollReveal, pageAnime} from '../animation';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';

const Home = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
  return (
    <motion.div
        variants={pageAnime}
        initial="hidden"
        animate="show"
        exit="exit"
    >
       <Header/>
        <Flex className='introduction'>
            <div className='intro-circle'>
            </div>
            <div className='img-cont'><img src={idea} alt="" /></div>
            <div className='flex-content'>
                <h2>Introduction to getlinked <span>tech Hackathon 1.0</span></h2>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is asclear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </Flex>
        <Flex>
            <div className='rules-circle'>
                </div>
            <div className='img-cont'><img src={rules} alt="" /></div>
            <div className='flex-content'>
                <h2>Rules and<span>Guidelines</span></h2>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </Flex>
        <Flex>
            <div className='criteria-circle'>
            </div>
            <div className='img-cont'><img src={criteria} alt="" /></div>
            <div className='flex-content'>
                <h2 id='overview'>Judging Criteria<span>Key attributes</span></h2>
                <p>
                <span>Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                </p>
                <p>
                <span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                </p>
                <p>
                <span>Impact and Relevance</span>: Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                </p>
                <p>
                <span>Technical Complexity</span>: Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                </p>
                <p>
                <span>Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                </p>
                <button>Read More</button>
            </div>
        </Flex>
        <Flex id='faq'>
            <div className='faq-circle'>
            </div>
            <div className='img-cont'><img src={faq} alt="" /></div>
            <div className='flex-content'>
                <h2>Frequently Ask<span>Question</span></h2>
                <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                <div>
                    <Dropdown text="Can I work on a project I started before the hackathon?" />
                    <Dropdown text="What happens if I need help during the hackathon?" />
                    <Dropdown text="What happens if I don't have an idea for a project?" />
                    <Dropdown text="What happens if I need help during the hackathon?" />
                    <Dropdown text="Can I join a team or do I have to come with one?" />
                    <Dropdown text="What happens after the hackathon ends?" />
                    <Dropdown text="Can I work on a project I started before the hackathon?" />
                </div>
            </div>
            
        </Flex>
        <Timeline/>
        <Rewards
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <div className='circle'>
            </div>
            <div className='heading'>
                <h2>Prizes and <span>Rewards</span></h2>
                <p>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
            
            <div className='flex'>
                <div><img src={cup} alt="" /></div>
                <div>
                    
                    <img src={rewards} alt="" />
                </div>
            </div>
            
        </Rewards>
        <Sponsors
            variants={scrollReveal}
            animate={controls2}
            initial="hidden"
            ref={element2}
        >
            <div className='first-circle'>
            </div>
            <div className='second-circle'>
            </div>
            <h2>Partners and Sponsors</h2>
            <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            <div className='box'>
                <div>
                    <img src={Liberty} alt="" />
                    <img className='v-line' src={verticalLine} alt=''/>
                    <img src={Liberty2} alt="" />
                    <img className='v-line' src={verticalLine} alt=''/>
                    <img src={Winwise} alt="" />
                    <img className='h-line' src={HorizontalLine} alt=''/>
                    <p></p>
                    <img className='h-line' src={HorizontalLine} alt=''/>
                    <p></p>
                    <img className='h-line' src={HorizontalLine} alt=''/>
                    <img src={wisper} alt="" />
                    <img className='v-line' src={verticalLine} alt=''/>
                    <img src={paybox} alt="" />
                    <img className='v-line' src={verticalLine} alt=''/>
                    <img src={vizual} alt="" />
                </div>
            </div>
        </Sponsors>
        <Flex>
            <div className='privacy-circle'>
            </div>
            <div className='img-cont'><img src={policy} alt="" /></div>
            <div className='flex-content'>
                <h2>Privacy Policy and<span>Terms</span></h2>
                <p className='faded'>Last updated on September 12, 2023</p>
                <p>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                <div className='box'>
                    <p>
                    At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                    </p>
                    <span>Licensing Policy</span>
                    <p>Here are terms of our Standard License:</p>
                    <div className='check'>
                        <img src={listStyle} alt="" />
                        <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <div className='check'>
                        <img src={listStyle} alt="" />
                        <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <button>Read More</button>
                </div>
            </div>
        </Flex>
        <Footer/>
    </motion.div>
  )
}

export default Home;



const Rewards = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-top: 60px;
    padding: 30px 50px;
    position: relative;
    min-height: 70vh;
    .circle {
        position: absolute;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: linear-gradient(180deg, #7b01fe 0%, #ab3dff 100%);
        filter: blur(200px);
        background-blend-mode: hard-light;
        top: 0;
        left: 0;
    }
    .heading {
        display: grid;
        grid-template-columns: 1fr 1fr;
        h2 {
            grid-column: 2/3;
        }
        p {
            grid-column: 2/3;
        }
    }
    h2 {
        margin: 0;
        font-size: 2rem;
        font-family: 'Clash Display',sans-serif;
        span {
            color: #D434FE;
            display: block;
        }
    }
    .flex {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    img {
        max-width: 100%;
        height: auto; 
    }
    @media screen and (${device.md}) {
        .flex {
            flex-direction: column;
        }
        .heading {
            grid-template-columns: 1fr;
            text-align: center;
            h2,p {
                grid-column: 1/2;
            }
        }
        .circle {
            display: none;
        }
    }
`
const Sponsors = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    text-align: center;
    position: relative;
    min-height: 100vh;
    .first-circle, .second-circle {
        position: absolute;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: linear-gradient(180deg, #7b01fe 0%, #ab3dff 100%);
        filter: blur(200px);
        background-blend-mode: hard-light;
    }
    .first-circle {
        top: 0%;
        left: -10%;
    }
    .second-circle {
        top: 50%;
        right: -10%;
    }
    .box {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 5px;
        border: 1px solid #D434FE;
        background: rgba(255, 255, 255, 0.01);
        padding: 50px 80px;
        .h-line {
            height: 5px;
        }
        
        div {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            justify-content: space-evenly;
            align-items: center;
            img {
                max-width: 100%;
                height: auto;
                
                margin: 0 auto;
            }
            
        }
    }
    @media screen and (${device.md}) {
        .box {
            padding: 50px 20px;
            .v-line {
                height: 3rem;
            }
            .h-line {
                height: 3px;
            }

        }
        .first-circle, .second-circle {
            display: none;
        }
        
    }
`

