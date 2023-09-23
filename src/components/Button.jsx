import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = ({to, text, className}) => {
  return (
    <ButtonCont to={to} className={className}>
        {text}
    </ButtonCont>
  )
}

export default Button

const ButtonCont = styled(Link)`
    border-radius: 4px;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
    padding: 10px 20px;
    border: none;
    color: #fff;
    

`