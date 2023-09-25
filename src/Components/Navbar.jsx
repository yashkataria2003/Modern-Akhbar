import React, { useState } from 'react'
import logoImg from '../assets/Modern_akhbar.png'
import hamburger_white from '../assets/hamburger_white.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
    setRotate(!rotate)
    setVisible(!visible)
  }

  return (
    <>
      <header className='flex justify-between items-center sticky top-0 z-50'>
        <nav className='flex justify-between items-center bg-[#275784] w-full h-[4rem] px-[0.9rem] rounded-b-[1.5rem] max-md:rounded-none'>
          <div className="flex justify-normal items-center">
            <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/"><img src={logoImg} alt="logo" className='h-[3.3rem] hover:scale-105' /></Link>
          </div>
          <div className="pr-5">
            <ul className='flex justify-center items-center flex-row gap-5 list-none max-md:hidden'>
              <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/general">Home</Link>
              </li>
              {/* <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/buisness">Buisness</Link>
              </li> */}
              <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/health">Health</Link>
              </li>
              <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/science">Science</Link>
              </li>
              <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/sports">Sports</Link>
              </li>
              <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/technology">Technology</Link>
              </li>
            </ul>
            <img src={hamburger_white} className={`hidden max-md:block ${rotate ? 'rotate-90' : ''}`} onClick={handleClick} alt="logo" />
          </div>
        </nav>
      </header>
      {toggle && (
        <header className={`hidden max-md:justify-center max-md:items-center max-md:gap-5 max-md:list-none max-md:flex animate-fade-down animate-once ${visible ? 'visible-down' : ''}`}>
          <nav className='flex justify-between items-center bg-[#1f4365] w-[100%] h-[19rem] px-[0.9rem] rounded-b-[1.5rem]'>
            <div className="max-md:w-[100%]">
              <ul className='hidden max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-5 max-md:list-none max-md:text-center'>
                <li>
                  <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer w-[100%]' aria-current="page" to="/general">Home</Link>
                </li>
                {/* <li>
                <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/buisness">Buisness</Link>
              </li> */}
                <li>
                  <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                <li>
                  <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/health">Health</Link>
                </li>
                <li>
                  <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/science">Science</Link>
                </li>
                <li>
                  <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/sports">Sports</Link>
                </li>
                <li>
                  <Link className='text-[#ffffffa4] hover:text-white hover:cursor-pointer' aria-current="page" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>)}
    </>
  )
}

export default Navbar
