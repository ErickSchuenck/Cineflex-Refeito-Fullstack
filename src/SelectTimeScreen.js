import React, { useEffect, useState } from 'react'
import Header from './Header'
import styled from 'styled-components';
import axios from 'axios';


export default function SelectTimeScreen() {

  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${localStorage.getItem('id')}/showtimes`

  const [sessionList, setSessionList] = useState();

  useEffect(() => {
    axios.get(URL)
      .then(response => setSessionList(response.data))

  }, [URL])

  return (
    <>
      <Header />
      <Horarios>
        {
          sessionList ?
            sessionList.days.map((session) =>
              <div>
                <h1>
                  {session.weekday}
                </h1>
                <h2>
                  {session.date}
                </h2>
              </div>
            )
            :
            <div className='loading' />
        }

      </Horarios>
    </>
  )
}

const Horarios = styled.div`
    margin-top: 75px;
    width: 100%;
`
