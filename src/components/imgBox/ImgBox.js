import React from 'react'

const ImgBox = ({url}) => {
  return (
    <div className='-mt-10 mb-10 border border-p-black w-[300px] h-[300px] flex justify-center items-center relative'>
        <div className='h-[12px] w-[12px] bg-ball-pattern bg-no-repeat absolute top-0 left-0'></div>
        <div className='h-[12px] w-[12px] bg-ball-pattern bg-no-repeat absolute top-0 right-0'></div>
        <div className='h-[12px] w-[12px] bg-ball-pattern bg-no-repeat absolute bottom-0 left-0'></div>
        <div className='h-[12px] w-[12px] bg-ball-pattern bg-no-repeat absolute bottom-0 right-0'></div>
        <img src={url}/>
    </div>
  )
}

export default ImgBox