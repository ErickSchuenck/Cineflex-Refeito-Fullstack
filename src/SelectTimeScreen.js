import React, { useEffect, useState } from 'react'
import Header from './Header'
import styled from 'styled-components';
import axios from 'axios';


export default function SelectTimeScreen() {

  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${localStorage.getItem('id')}/showtimes`

  const [sessionList, setSessionList] = useState();

  useEffect(() => {
    const promise = axios.get(URL)
    promise.then(response => setSessionList(response.data))
    console.log(sessionList)
  }, [URL])

  return (
    <>
      <Header />
      <Horarios>
        <h1>{localStorage.getItem('id')}</h1>
      </Horarios>
    </>
  )
}

const Horarios = styled.div`
    margin-top: 75px;
    width: 100%;
`
