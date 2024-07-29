import React from 'react'

const ContentBox = ({img, name}) => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-52 h-52 bg-green-400 flex flex-col justify-center items-center'>
          <div className='w-[90%] h-[60%] bg-cyan-400 p-5 gap-1 flex justify-center items-center'>
            {/* <img about={img}> */}
              {img}
            {/* </img> */}
          </div>
          <div className='w-[90%] h-[30%] bg-red-600 p-5 flex justify-center items-center'>{name}</div>
        </div>
    </div>
  )
}

export default ContentBox
