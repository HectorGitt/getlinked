import React from 'react'
import styled from 'styled-components'
import congratulation from '../assets/images/congratulation.png'

const Popup = ({handleBack}) => {

  return (
    <PopupCont>
        <div>
            <img src={congratulation} alt="" />
            <h2>Congratulations <br/> you have successfully registered</h2>
            <p>Yes, it was easy and you did it!<br/>check your mail for next step😉</p>
            <button onClick={handleBack}>Back</button>
        </div>
        
    </PopupCont>
  )
}

export default Popup

const PopupCont = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #140d27e2;
    div {
        border: 1px solid #D434FE;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2%;
    }
    img {
        width: 50%;
    }
    h2 {
        font-size: 2rem;
        text-align: center;
        margin: 1rem 0;
    }
    p {
        text-align: center;
        margin: 1rem 0;
    }
`