import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-purple-200'>
    <div className="mycontainer flex justify-between items-center gap-10 px-4 h-14 py-5">

    <div className='logo font-bold '>
     <span className='text-green-400 text-xl'>&lt;</span> 
         <span className='text-xl'>Pass</span>
     <span className='text-green-600 text-xl'>OP/&gt;</span>
      <span className='text-green-400 text-bold text-xl'>&gt;</span>
    </div>
    <ul>
        <li className='flex gap-6'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="">About</a>
            <a className='hover:font-bold' href="">Contact</a>
            <a href=""></a>
        </li>
    </ul>
    </div>
   </nav>
  )
}

export default Navbar
