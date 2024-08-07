// import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// import ContentBox from '../../components/content_box/ContentBox';

// const Home = () => {

//   const [poSprites, setPoSprites] = useState([]);
//   const [poName, setPoName] = useState([]);
  
//   // const howMany = 8;

//   // const fetcher = async (pNum) => {
//   //   let result = [];
//   //   let giveME = [];

//   //   result = await axios(`https://pokeapi.co/api/v2/pokemon/${pNum}`)
//   //   let beforeGM = [result.data.name, result.data.sprites.front_default];
//   //   giveME.push(beforeGM);

//   //   return giveME;
//   // }

//   // const getResult = async (howMany) => {
//   //   let pNum = 0;
//   //   let finalResult = [];
//   //   let result = [];
//   //   for(let i = 0; i < howMany; i++){
//   //     pNum = Math.floor(Math.random() * 1025) + 1;
//   //     finalResult = await fetcher(pNum);
//   //     result.push(finalResult)
//   //   }
//   //   return result;
//   // }

//   // let showMeP = getResult(howMany);

//   // console.log(showMeP);

//   // const sprite = fetch(`https://pokeapi.co/api/v2/pokemon/1`)
//   //                 .then(res => res.json)
//   //                 .catch(error => console.log(error))

//   // console.log(sprite);

//   // const getData = async () => {
//   //   let sprite = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    
//   //   return { sprite : sprite }
//   // }

//   // const showData = async ()=>{
//   //   let show = await getData();
//   //   show.then()
//   // }
  
  
//   // console.log(showData);

//   // const showData = async () => {

//   // }

//   // const myData = {
//   //   name,
//   //   img
//   // }

//   const [pokeData, setPokeData] = useState({
//     name : '',
//     img : ''
//   });

//   const loopFetcher = async () => {
//     let result ;
//     let pNum = Math.floor(Math.random() * 1025) + 1;
//     let po_url = `https://pokeapi.co/api/v2/pokemon-form/${pNum}`;

//     result = await fetch(po_url)

//     let data = await result.json();
//     // setPokeData(data);

//     // console.log(data.pokemon.name);
//     // console.log(data.sprites.front_default);
//     // const myData = {
//     //   name : data.name,
//     //   img : data.sprites.front_default
//     // }

//     setPokeData ({
//       ...pokeData,
//       name : data.name,
//       img : data.sprites.front_default
//     })


//     // console.log(myData);
//     // setPokeData(myData);
//     console.log(pokeData);
//     return data
//   }

//   const forFetcher = async () => {
//     for(let i = 0; i < 8; i++){
//       loopFetcher();
//     }
//   }

//   useEffect(() => {
//     forFetcher();
//   },[])

//   // const showResult = loopFetcher()

//   // console.log(showResult);
















//   let name = "이름"
//   let img = "이미지"
  
//   return (
//     <div>
//       <div>
//         <div className='grid grid-cols-4 grid-rows-4 gap-3'>
//           {
//             [1,2,3,4,5,6,7,8].map(item => <ContentBox key={item} name={name} img={img}/>)
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
