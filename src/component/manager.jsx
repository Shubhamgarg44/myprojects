import React, { useState } from 'react'; // Import useState from React
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'; // Import eye icons for showing/hiding password

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className="mycontainer text-center">
        <h1 className='text-4xl font-bold text-center'>
          <span className='text-green-400 text-2xl'>&lt;</span>
          <span className='text-2xl'>Pass</span>
          <span className='text-green-600 text-2xl'>OP/&gt;</span>
          <span className='text-green-400 text-bold text-2xl'>&gt;</span>
        </h1>

        <span className='text-green-400 text-2xl'>&lt;</span>

        <p className='text-zinc-800 text-lg inline-block text-center'>
          Your Own <span className='text-green-600 text-xl'>Password</span> Manager
        </p>

        <span className='text-green-400 text-bold text-2xl'>/&gt;</span>

        <div className="flex gap-8 flex-col p-4 text-black items-center">
          <input placeholder='Enter Website URL ' className='rounded-full border border-green-300 w-full py-1 p-4' type="text" />
          
          <div className="flex gap-4 w-full justify-between relative">
            <input className='rounded-full border border-green-300 w-full py-1 p-4' type="text" placeholder='Enter User Name ' />
            <input 
              className='rounded-full border border-green-300 w-full py-1 p-4' 
              type={showPassword ? 'text' : 'password'} 
              placeholder='Enter Password' 
            />
            <span className='absolute w-14 right-[1%] top-[22%]'>
              {showPassword ? (
                <IoMdEyeOff onClick={togglePasswordVisibility} className='w-[20px] h-5 relative hover:cursor-pointer' />
              ) : (
                <IoMdEye onClick={togglePasswordVisibility} className='w-[20px] h-5 relative hover:cursor-pointer' />
              )}
            </span>
          </div>

          <button className='flex justify-center items-center bg-green-500 rounded-full px-4 py-2 gap-2 w-fit hover:bg-green-600'>
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Manager;
