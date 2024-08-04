import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import ContentBox from '../../components/content_box/ContentBox';
import Loading from '../../components/loading/Loading';

const Home = () => {

  const howMany = 12;
  const [ randomPoke, setRandomPoke ] = useState([])
  const [ loading, setLoading ] = useState(false);
  
  const loopFetcher = async () => {

        setLoading(true);
        
        let result = [];
        for(let a=1; a<=howMany ; a++)  {
          let pNum = Math.floor(Math.random() * 1025) + 1;
          let my = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pNum}`) 
            let data = await my.json()
            const myData =  {
                id : data.id,
                name : data.pokemon.name,
                url : data.sprites.front_default
            }
            
            console.log("myData : ", myData);
            result.push(myData);
            
        }
         setRandomPoke( ...randomPoke, result )
         console.log("randomPoke : ", randomPoke);

         setLoading(false);
    }
 
    useEffect( ()=>{
        loopFetcher();
    }, [])

  // let name = "이름"
  // let img = "이미지"
  
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        {
          loading ? ( <Loading /> )
          : (<div className='grid grid-cols-2 grid-rows-8 gap-3 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-3 mt-5 mb-16'>
              {
                randomPoke.length >=1  && randomPoke.map(item => (
                  <ContentBox name={item.name} img={item.url} id={item.id} />
                ))
              }
            </div>)
        }
      </div>
      {/* <div className='absolute bottom-0 m-auto z-1'><button>MORE!</button></div> */}
    </div>
  )
}

export default Home
