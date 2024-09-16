import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-purple-200 flex justify-between items-center gap-10 px-4 h-14'>
    <div className='logo font-bold '>hello</div>
    <ul>
        <li className='flex gap-6'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="">About</a>
            <a className='hover:font-bold' href="">Contact</a>
            <a href=""></a>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
