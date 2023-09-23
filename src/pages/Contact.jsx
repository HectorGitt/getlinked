import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import {ContactForm} from '../components/form/ContactForm'
import { device } from '../breakpoint'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'


const Contact = () => {
  return (
    <ContactCont>
        <Nav/>
        <div className='content'>
            <div className=''>
                <div className='circle'></div>
                <div className='circle2'></div>
                <div className='in-touch'>
                    <h2>Get in touch</h2>
                    <p>Contact<br/>Information</p>
                    <p>27,Alara Street<br/>Yaba 100012<br/>Lagos State</p>
                    <p>Call Us : 07067981819</p>
                    <p>we are open from Monday-Friday<br/>08:00am - 05:00pm</p>
                    <p>
                        Share on<br/>
                        <span className='social'>
                            <FaInstagram size='1.5rem'/>
                            <FaXTwitter size='1.5rem'/>
                            <FaFacebookF size='1.5rem'/>
                            <FaLinkedinIn size='1.5rem'/>
                        </span>
                    </p>
                </div>
                {/* <form>
                    <h3>Questions or need assistance?<br/>Let us know  about it!</h3>
                    <input type="text" name="first_name" id="#first_name" placeholder='First Name' />
                    <input type="email" placeholder='Mail' />
                    <textarea name="message" placeholder='Message' id="message" cols="30" rows="5"></textarea>
                    <button type='submit'>Submit</button>
                </form> */}
                <ContactForm/>
            </div>
        </div>
    </ContactCont>
  )
}

export default Contact

const ContactCont = styled.div`
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
    .content {
        display: flex;
        min-height: 80vh;
        height: 100%;
        margin: 30px 20px;
    }
    .content > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        gap: 20px;
        & > * {
            
        }
        div,form {
            display: flex;
            flex-direction: column;
        }
    }
    .circle {
        position: absolute;
        top: 10%;
        left: -10%;
        width: 35%;
        height: 35%;
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
        background: linear-gradient(180deg, #7b01fe 0%, #ab3dff 100%);
        filter: blur(200px);
    }
    h2,h3 {
        color: #D434FE;
        font-weight: 600;
    }
    .social {
        margin-top: 10px;
        display: flex;
        gap: 1rem;
    }
    @media screen and (${device.sm}) {
        .content > div {
            flex-direction: column;
            margin: 0 15px;
        }
        .in-touch {
            align-self: self-start;
        }
    }
`