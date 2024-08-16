import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InputBox from '../../components/inputBox/InputBox';

const Wiki = () => {

  const [ inputSave, setInputSave ] = useState("");
  const [ inputSuggest, setInputSuggest ] = useState([]);
  const [ pokData, setPokData ] = useState("");


  useEffect(() => {
    const fetchSuggest = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputSave}`);
      const data = await res.json();
      setInputSuggest(data);
      setPokData(data.sprites.front_default)
      

      // setPokData(data);
      // console.log(data);
      // console.log("pokData", pokData);
      console.log("front_default_img", pokData);
      // console.log(pokData.sprites.front_default);
      // console.log(pokData.name);
      // console.log("inputSuggest", inputSuggest.sprites.front_default);
    }

    if( inputSave ){
      fetchSuggest();
    }
    else if( !inputSave ){
      setInputSuggest([]); // 초기화
    }
  }, [inputSave])

  const handleInputChange = (ev) => {
    setInputSave(ev.target.value);
  }

  return (
    <div className='w-full h-[calc(100vh-147px)] flex justify-center'>
      <div className='w-full mt-10 flex flex-col'>
        <div className='w-full flex flex-col justify-center items-center'>
          <input className='w-[80%] h-10 rounded-t-md text-p-white placeholder-p-white bg-p-black text-center text-lg'
                 type='text'
                 placeholder='도감번호를 입력해 주세요.'
                 value={inputSave}
                 onChange={(ev) => handleInputChange(ev)}
          >
          </input>
          {
            inputSave &&
            //  inputSuggest.sprites.front_default &&
            pokData &&
            (<InputBox
              img={pokData}
              name={inputSuggest.name}
              id={inputSuggest.id}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default Wiki
