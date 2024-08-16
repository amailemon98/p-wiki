import React, { useState } from 'react'
import ContentBox from '../content_box/ContentBox'
import { Link } from 'react-router-dom';

const InputBox = ({img, name, id}) => {
    // const [ haveValue, setHaveValue ] = useState(null);
    // console.log(img);
    
  return (
    <Link className='w-[80%] h-30 border-[3px] border-p-black hover:border-p-red flex justify-center items-center rounded-b-md pt-[-10px]' to={`/wiki/${id}`}>
        <img src={img}></img>
        <div>
          <div>ID : {id}</div>
          <div>{name}</div>
        </div>
    </Link>
  )
}

export default InputBox