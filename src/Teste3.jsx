import React, { useState } from 'react'
import styled from 'styled-components';



export default function Answer() {
  const [isCorrect, setIsCorrect] = useState(true)

  return (
    <AnswerContainer>
      <h1>Um transpilador de JavaScript</h1>
      {
      isCorrect?
      <div className='right'><ion-icon name="checkmark-circle" /></div>
      :
      <div className='wrong'>
      <ion-icon name="close-circle" />
      </div>
      }
    </AnswerContainer>
  )
}

const AnswerContainer = styled.div`
  background-color: var(--cor-secundaria);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid var(--cor-terciaria);
  display: flex;
  justify-content: center;
  position: relative;

  h1{
    padding: 14px;
    font-size: 20px;
    font-family: var(--fonte-primaria)
  }

  ion-icon{
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 26px;
    
  }
  .right{
    color: green;
  }
  .wrong{
    color: red;
  }
`