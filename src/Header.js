import React from 'react'
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <h3>CINEFLEX</h3>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #C3CFD9;
    color: #E8833A;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    padding: 20px 0;
    font-weight: 400;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`
