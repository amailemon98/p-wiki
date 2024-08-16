import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading';
import ImgBox from '../../components/imgBox/ImgBox';

const WikiDetail = () => {

    const [ pokData, setPokData ] = useState([]);
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let fetchedData ;

    // const [ randomPoke, setRandomPoke ] = useState([])
    const [ loading, setLoading ] = useState(false);

    const loopFetcher = async () => {

      setLoading(true);
      
      let result = [];
      let my = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
        let data = await my.json()
        const myData =  {
            id : data.id,
            name : data.name,
            url : data.sprites.front_default,
            height : data.height,
            weight : data.weight
        }

        // 키에 "." 붙이기
        if(myData.height.toString().length !== 1){ // 수치가 한줄 이상일때만 실행
          let originalHeightData = myData.height;
          let frontHeight = originalHeightData.toString().slice(0, originalHeightData.toString().length-1);
          let backHeight = originalHeightData.toString().slice(originalHeightData.toString().length-1);
          let buildedHeightData = frontHeight.toString().concat('.', backHeight);

          console.log("결과값", buildedHeightData);

          myData.height = buildedHeightData
        }else if(myData.height.toString().length === 1){ 
          let zeroDot = "0."
          let buildedHeightData = zeroDot.toString().concat("", myData.height)

          myData.height = buildedHeightData;
        }

        // 무게에 "." 붙이기
        if(myData.weight.toString().length !== 1){ // 수치가 한줄 이상일때만 실행
          let originalWeightData = myData.weight;
          let frontWeight = originalWeightData.toString().slice(0, originalWeightData.toString().length-1);
          let backWeight = originalWeightData.toString().slice(originalWeightData.toString().length-1);
          let buildedWeightData = frontWeight.toString().concat('.', backWeight);

          console.log("결과값", buildedWeightData);

          myData.weight = buildedWeightData
        }else if(myData.weight.toString().length === 1){ 
          let zeroDot = "0."
          let buildedWeightData = zeroDot.toString().concat("", myData.weight)

          myData.weight = buildedWeightData;
        }



      console.log("myData : ", myData);
      result.push(myData);
          
      setPokData( ...pokData, result )
      console.log("pokData : ", pokData);

      setLoading(false);
    }

  useEffect( ()=>{
      loopFetcher();
  }, [])

  return (
    <div>
        {
          loading ? ( <Loading /> )
          : (<div className='h-[calc(100vh-107px)] flex justify-center -mb-10'>
              {
                pokData.length >=1  && pokData.map(item => (
                  <div className='w-full h-full flex flex-col items-center justify-center'>
                      <ImgBox url={item.url} />
                      <div>
                        <div>
                          <h2>도감번호 : {item.id}</h2>
                          <h2>이름 : {item.name}</h2>
                          <h2>키 : {item.height} m</h2>
                          <h2>무게 : {item.weight} kg</h2>
                        </div>
                      </div>
                  </div>
                )
              )
                
              }
            </div>)
        }
    </div>
  )
}

export default WikiDetail