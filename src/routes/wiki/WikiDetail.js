import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const WikiDetail = () => {

    const [ pokData, setPokData ] = useState([]);
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let fetchedData ;

    // use useEffect!

    const getPok = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPokData(data.height);
    }

    getPok();


    console.log(pokData);

  return (
    <div>
        
    </div>
  )
}

export default WikiDetail