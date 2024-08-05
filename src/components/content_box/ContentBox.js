import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ContentBox = ({img, name, id}) => {
  // console.log(img)
  // console.log(name)
  // console.log("this Id : ", id);
  const styleShadow = {boxShadow : '2px 2px 7px black'};
  const [ shadow, setShadow ] = useState(false);
  
  return (
    <Link to={`/wiki/${id}`} >
      <div className='flex justify-center items-center mb-5 mt-5 mr-5 ml-5 cursor-pointer'>
          <div className='w-60 h-52 border-[3px] border-black flex flex-col justify-center items-center hover:border-p-beige3 rounded-xl'
              onMouseOver={() => {setShadow(true)}}
              onMouseOut={() => {setShadow(false)}}
              style={ shadow ? styleShadow : null }
          >
            <div className='w-full h-[65%] bg-newP-red p-5 gap-1 flex justify-center items-center rounded-t-lg'>
              <img src={img} />
            </div>
            <div className='w-full h-[35%] bg-p-white p-5 flex justify-center items-center text-p-black text-xl rounded-xl'>{name}</div>
          </div>
      </div>
    </Link>
  )
}

export default ContentBox
