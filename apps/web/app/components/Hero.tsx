import React from 'react'

const Hero = () => {
  return (
    <div className='my-40 w-full flex flex-col items-center'>
        <h1 className='text-7xl font-bold max-w-2xl text-center tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-primary'>Store Secrets , <br/> Stay In Control.</h1>
        <p className='text-neutral-200 max-w-3xl text-center text-xl mt-10 mx-auto selection:bg-white selection:text-black'>
        Vaultify is a <span className='text-primary'>secure</span>, encrypted platform to store your passwords and personal notes. Protect your digital life with zero-knowledge architecture, <span className='text-primary'>seamless</span> access, and complete <span className='text-primary'>privacy</span>—only you control your data.
        </p>
        <div className='mt-8 w-full flex justify-center max-w-2xl'>
            <input type="text" placeholder='Email' className='border border-neutral-600 rounded-xl mr-4 bg-transparent placeholder:text-neutral-500 text-white px-4 flex-1 focus:outline-none' />
            <button className="relative py-2 px-4 border border-neutral-700 rounded-xl cursor-pointer text-white overflow-hidden">
  <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent blur-md opacity-100" />
  Sign Up
</button>
        </div>
    </div>
  )
}

export default Hero
