import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-4xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black py-2 md:py-4 px-6 md:px-12 text-2xl rounded-md mr-4 hover:bg-opacity-80'>
                Play
            </button>
            <button className='bg-gray-500 hidden md:inline-block text-white p-4 px-12 mx-2 text-xl rounded-md mr-4 bg-opacity-50 hover:bg-opacity-70'>
                More info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle