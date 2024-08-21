import React from 'react'
import styles from '../App.module.css'
import { Outlet } from 'react-router-dom'

const WikiLayout = () => {
  return (
    <div className="w-full flex justify-center">
        <div className="w-[100%] lg:w-[80%] xl:w-[75%] 3xl:h-[calc(100vh-147px)]">
          <div className={styles.mainBody}><Outlet /></div>
        </div>
      </div>
  )
}

export default WikiLayout