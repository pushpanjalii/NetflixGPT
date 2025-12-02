import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (

    <>
        <div className='absolute -z-10 '>
      <img className='h-screen w-screen bg-cover bg-center bg-no-repeat'
      src={BG_URL} 
      alt="Netflix Logo" />
      </div>
      <div className=''>
            <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  )
}

export default GptSearch