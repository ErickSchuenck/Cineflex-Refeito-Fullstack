import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header.js'
import { Link } from 'react-router-dom';

export default function SelectMovieScreen() {

  const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies'

  const [movieList, setMovieList] = useState();

  useEffect(() => {
    const promise = axios.get(URL)
    promise.then(response => setMovieList(response.data))
  }, [])

  return (
    <>
      <Header />
      <Movie>
        {(movieList ?
          movieList.map(movie =>
            <Link to={'/'} key={movie.id}>
              <div className='border'>
                <div className='movie'>
                  <img src={`${movie.posterURL}`} alt={'poster'} />
                </div>
              </div>
            </Link>
          )
          :
          <div className='loading' />
        )}
      </Movie>
    </>
  )

}

const Movie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 40px;
  .border{
    display: flex;
    align-items: center;
    width: 145px;
    height: 209px;
    justify-content: center;
    border: 1px solid black;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-left: 14px;
    margin-right: 14px;
    margin-bottom: 5px;
    margin-top: 5px;
    background-color: #FFF;
  }
  .movie img{
    width: 129px;
    height: 193px;
  }
`
