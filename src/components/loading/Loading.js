import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loading = () => {

  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <div className='w-[300px] h-[300px] flex flex-col justify-center items-center -mt-[25vh]'>
          <PacmanLoader
            color={"#f73e44"}
            size={50}
            aria-label='loading...'
            />
        </div>
    </div>
  )
}

export default Loading