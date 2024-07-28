import React from 'react'
import axios from 'axios'
import ContentBox from '../../components/content_box/ContentBox';

const Home = () => {
  
  // const howMany = 8;

  // const fetcher = async (pNum) => {
  //   let result = [];
  //   let giveME = [];

  //   result = await axios(`https://pokeapi.co/api/v2/pokemon/${pNum}`)
  //   let beforeGM = [result.data.name, result.data.sprites.front_default];
  //   giveME.push(beforeGM);

  //   return giveME;
  // }

  // const getResult = async (howMany) => {
  //   let pNum = 0;
  //   let finalResult = [];
  //   let result = [];
  //   for(let i = 0; i < howMany; i++){
  //     pNum = Math.floor(Math.random() * 1025);
  //     finalResult = await fetcher(pNum);
  //     result.push(finalResult)
  //   }
  //   return result;
  // }

  // let showMeP = getResult(howMany);

  // console.log(showMeP);


  // let result = fetch(`https://pokeapi.co/api/v2/pokemon/1`)
  // .then(res => res.json)
  // .then(res => res)
  // console.log(result);

  let name = "이름"
  let img = "이미지"
  
  return (
    <div>
      <div className='grid grid-cols-4 grid-rows-4 gap-3'>
        {
          [1,2,3,4,5,6,7,8].map(item => <ContentBox name={name} img={img}/>)
        }
      </div>
    </div>
  )
}

export default Home
