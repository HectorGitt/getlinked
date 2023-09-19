import React from 'react'
import Logo from '../assets/images/getlinked.png'
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
        <Header>
            <nav>
                <img src={Logo} alt="Logo" />
                <ul>
                    <li><a href="/">Timeline</a></li>
                    <li><a href="/">Overview</a></li>
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <button>Register</button>
            </nav>
            <div>

            </div>
        </Header>
    </div>
  )
}

export default Home;

const Header = styled.header`
    min-height: 100vh;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 50px;
        ul {
            display: flex;
            list-style: none;
            li {
                margin: 0 20px;
                a {
                    text-decoration: none;
                    font-size: 18px;
                }
            }
        }
    }
    button {
        border-radius: 4px;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
        padding: 10px 20px;
        border: none;
    }
`