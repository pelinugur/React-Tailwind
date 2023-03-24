import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = (e) => {
        e.preventDefault()
        setNav(!nav)
        console.log(nav)
    }
    return (
        <div className='text-white flex justify-between items-center px-4 h-24 mx-auto max-w-[1240px]'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer'>Home</li>
                <li className='p-4 cursor-pointer'>Company</li>
                <li className='p-4 cursor-pointer'>Resources</li>
                <li className='p-4 cursor-pointer'>About</li>
                <li className='p-4 cursor-pointer'>Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden" >
                 {!nav ?  <AiOutlineClose size={20} className="cursor-pointer"/> : <AiOutlineMenu size={20} className="cursor-pointer"/>  } 
            </div>
            <div className= {!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 ' : "fixed left-[-100%]  ease-in-out duration-500 " } >
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8'>REACT.</h1>
                <ul className=' uppercase p-4'>
                    <li className='p-4 cursor-pointer border-b border-gray-600'>Home</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600'>Company</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600'>Resources</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600'>About</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar