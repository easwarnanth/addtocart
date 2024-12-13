import React from 'react'
import { IoMdCart } from "react-icons/io";
import { PropTypes } from 'prop-types'

const Navbar = ({ cartCount, openCart}) => {
  return (
    <nav className='bg-gray-800 p-4 flex justify-around items-center text-white font-semibold'>
        <h1>ZUDIO</h1>
        <div className='relative'>
            <button onClick={openCart} className=' text-xl rounder bg-gray-600 p-1 rounded-2xl'>
            <IoMdCart />({cartCount})
            </button>
        </div>
    </nav>
  )
}

Navbar.PropTypes = {
    cartCount: PropTypes.number.isRequired,
    openCart: PropTypes.func.isRequired,
}


export default Navbar