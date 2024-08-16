import React, { useState } from 'react'
import ContentBox from '../content_box/ContentBox'
import { Link } from 'react-router-dom';

const InputBox = ({img, name, id}) => {
    // const [ haveValue, setHaveValue ] = useState(null);
    // console.log(img);
    
  return (
    <Link to={`/wiki/${id}`}>
        <div className='w-[500px] h-30 border-[3px] border-p-black hover:border-p-red flex justify-center items-center rounded-b-md pt-[-10px]'>
            <img src={img}></img>
            <div>
              <div>ID : {id}</div>
              <div>{name}</div>
            </div>
        </div>
    </Link>
  )
}

export default InputBox