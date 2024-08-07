// import React, { useEffect, useState } from 'react'  
// const Pok = () => {
  
//   const howMany = 8; 
//   const [ myRandomPoke, setRandomPoke ] = useState([])
  
//   const loopFetcher = async () => {
        
//         let result = [];
//         // let pNum = Math.floor(Math.random()*100) + 1
//         for(let a=1; a<=howMany ; a++)  {
//             let my = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${a}`) 
//             let data = await my.json()
//             const myData =  {
//                 name : data.pokemon.name,
//                 url : 'myUrl',
//                 src : 'mySrc'
//             }
            
//             console.log( myData);
//             result.push(myData)
//         }
//          setRandomPoke( result )
//          console.log(myRandomPoke )
//     }
 
    
//     useEffect( ()=>{
//         loopFetcher();
//     },[])
 

//   return (
//     <div>
//       <div className='grid grid-cols-4 grid-rows-4 gap-3'>
//         poke
//         {
//           myRandomPoke.length >=1  && myRandomPoke.map(item => item.name)
//         }
//       </div>
//     </div>
//   )
// }

// export default Pok