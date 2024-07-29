import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import ContentBox from '../../components/content_box/ContentBox';

const Home = () => {

  const howMany = 8; 
  const [ randomPoke, setRandomPoke ] = useState([])
  
  const loopFetcher = async () => {
        
        let result = [];
        for(let a=1; a<=howMany ; a++)  {
          let pNum = Math.floor(Math.random() * 1025) + 1;
          let my = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pNum}`) 
            let data = await my.json()
            const myData =  {
                name : data.pokemon.name,
                url : data.sprites.front_default
            }
            
            console.log(myData);
            result.push(myData);
            
        }
         setRandomPoke( ...randomPoke, result )
         console.log(randomPoke);
    }
 
    
    useEffect( ()=>{
        loopFetcher();
    },[])












  let name = "이름"
  let img = "이미지"
  
  return (
    <div>
      <div>
        <div className='grid grid-cols-4 grid-rows-4 gap-3'>
        {
          randomPoke.length >=1  && randomPoke.map(item => (
            <ContentBox name={item.name} img={item.url} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Home
