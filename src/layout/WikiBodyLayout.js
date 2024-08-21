import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from '../App.module.css'
import Navbar from '../components/navbar/Navbar'
import './bgBody.css'
const WikiBodyLayout = () => {
  return (
    <div className="bgBody flex flex-col w-full relative">
        <header className="top-0 w-full">
            <h1 className="text-center bg-newP-red text-cyan-50 flex justify-center cursor-pointer">
            <Link to={"/"} className={styles.titleImg}></Link>
            </h1>
            <Navbar />
        </header>
        <Outlet/>
        <footer className="bg-p-beige3 bottom-0 w-screen h-[50px]">footer</footer>
  </div>
  )
}

export default WikiBodyLayout