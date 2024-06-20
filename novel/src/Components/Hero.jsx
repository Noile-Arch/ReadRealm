import React from 'react'

const Hero = () => {
  return (
    <main className="flex h-screenw-full flex-col bg-[red] z-10">
      <img
        src="/f1.jpg"
        alt=""
        className="h-screen bg-[green] bg-center bg-cover w-full bg-clip-text"
      />
      <div className="absolute h-full w-full flex flex-col justify-center font-mono items-center bg-gradient-to-b from-[#066366] from-5% via-[transparent] via-20% to-[#1c0530] to-100%">
        <div className='h-full gap-[20px] md:mx-0 px-[40px] w-full flex flex-col justify-center font-mono items-center bg-gradient-radial from-[transparent] from-30% to-black/60'>
        <h1 className='md:text-[40px] text-[30px] text-center font-bold opacity-80'>Immerse in stories with</h1>
        <h2 className='md:text-[40px] text-[30px] font-bold'>ReadRealm</h2>
        <p className='md:text-[18px] font-semibold'>A companion helping you navigate the world of fantasy & fiction stories</p>
      
        </div>
        </div>
    </main>
  )
}

export default Hero