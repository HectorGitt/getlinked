import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/getlinked.png'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import menu from '../assets/logos/menu.svg'
import { device } from '../breakpoint'

const Nav = () => {
    const {pathname} = useLocation();
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    };
    const closeNav = () => {
        setNav(false);
    };
  return (
    <NavBar>
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
        <ul className='lg-nav'>
            <li><a href="/">Timeline</a></li>
            <li><a href="/#overview">Overview</a></li>
            <li><a href="/#faq">FAQs</a></li>
            <li className={pathname === '/contact'? 'background' : ''}><Link to="/contact">Contact</Link></li>
        </ul>
        <Button className={`lg-btn ${pathname === '/register'? 'border-btn' : ''}`} to='/register' text='Register'/>
        <img className='mobile-menu' onClick={toggleNav} src={menu} alt="Menu" />
        {nav && (
            <div className='mobile-nav'>
                <div className='nav'>
                    <span className='nav-close' onClick={closeNav} >X</span>
                    <ul>
                        <li><a href="/">Timeline</a></li>
                        <li><a href="/#overview">Overview</a></li>
                        <li><a href="/#faq">FAQs</a></li>
                        <li className={pathname === '/contact'? 'background' : ''}><Link  to="/contact">Contact</Link></li>
                    </ul>
                    <Button className={`mobile-btn ${pathname === '/register'? 'border-btn' : ''}`} to='/register' text='Register'/>
                </div>
            </div>   
        )}
    </NavBar>
    )
}

export default Nav

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    border-bottom: 1px solid #f4c7ff39;
    .mobile-menu, .mobile-nav {
        display: none;
    }
    .background {
        background: linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .border-btn {
        border-radius: 4px;
        border: 2px solid #9A39FF;
        background: transparent;
    }
    .lg-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        li {
            margin: 0 20px;
            a {
                text-decoration: none;
                font-size: 18px;
            }
        }

    }
    @media screen and (${device.md}) {
        .lg-nav, .lg-btn {
            display: none;
        }
        .mobile-menu, .mobile-nav {
            display: block;
        }
        .mobile-nav {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #150E28;
            z-index: 100;
            display: flex;
            align-items: center;
            
            .mobile-btn {
                margin-top: 30px;
                width: fit-content;
                padding: 20px 40px;
            }
            ul {
                font-size: 18px;
                display: flex;
                flex-direction: column;
                gap: 40px;
            }
            .nav {
                display: flex;
                flex-direction: column;
                height: 80%;
                width: 100%;
                padding: 0 40px;
            }
            .nav-close {
                text-align: right;
                width: 50px;
                margin: 0 0 20px auto;
                cursor: pointer;
                border-radius: 50%;
                border: 2px solid #903AFF;;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 40px;
            }
        }

    }
`