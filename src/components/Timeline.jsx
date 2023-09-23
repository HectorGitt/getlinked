import React from 'react'
import styled from 'styled-components'
import timelineData from '../timelineData'
import verticalLine from '../assets/images/verticalLine.png'
import { device } from '../breakpoint'
import {scrollReveal} from '../animation';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';

const Timeline = () => {
    const [element, controls] = useScroll();
  return (
    <TimelineCont
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
    >
        <div className='timeline-heading'>
            <h2>Timeline</h2>
            <p>Here is the breakdown of the time we<br/>anticipate using for the upcoming event.</p>
        </div>
        
        <section className="timeline">
            {timelineData.map((data,index) => {
                return (
                    <div className='moment' key={index}>
                        <div className='timeline-text'>
                            <h3>{data.topic}</h3>
                            <p>{data.content}</p>
                        </div>
                        <div className='middle'>
                            <img src={verticalLine} alt="" />
                            <span className='circle-index'>{index + 1}</span>
                        </div>
                        <h3>{data.date}</h3>
                    </div>
                )
            })}
        </section>
    </TimelineCont>
  )
}

export default Timeline

const TimelineCont = styled(motion.div)`
    p {
        font-size: 14px;
    }
    .timeline-heading {
        text-align: center;
        margin-bottom: 50px;
        h2 {
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
        font-family: 'Clash Display',sans-serif;
        }
    }

    .timeline {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .timeline-text {
        align-self: flex-end;
    }
    .moment:nth-child(even) {
        flex-direction: row-reverse;
    }
    .moment {
        display: flex;
        justify-content: space-evenly;
        align-items: end;
        width: 80%;
        
        h3 {
            color: #D434FE;
            font-size: 24px;
        }

        & > * {
            flex: 1;
        }

        .middle {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            
        }
        .circle-index {
            width: 50px;
            height: 50px;
            background: linear-gradient(270deg, #903AFF 0%, #D434FE 100%);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
        }
    }
    @media screen and (${device.md}) {
        .moment {
            display: grid;
            grid-template-columns: 2fr 8fr;
            align-items: center;
            .middle {
                grid-column: 1/2;
                grid-row: 1/3;
                justify-self: flex-start;
            }

        }
        
    }
    
`