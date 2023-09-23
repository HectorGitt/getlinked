import React from 'react'
import styled from 'styled-components'

const Dropdown = ({text}) => {
  return (
    <Accordion>
        <p>{text}</p>
        <span className="icon">
            +
        </span>
    </Accordion>
  )
}

export default Dropdown;

const Accordion = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #D434FE;
    text-align: left;
    span {
        margin-left: auto;
        color: #D434FE;
    }
`