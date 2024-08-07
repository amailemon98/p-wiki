import React from 'react'
import Home from '../../routes/home/Home'

const PokeMain = () => {
    const ary = []
    for(let a = 1; a<=100; a++){
        ary.push(a)
    }
  return (
    <div>
        {
            [1,2,3,4,5,6,7,8].map(item => <Home name={item.name} img={item.url} />)
        }
    </div>
  )
}

export default PokeMain