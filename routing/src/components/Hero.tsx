import React from 'react'
import portfolio from  "public/portfolio.png"
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative h-screen'>
       <div className=' absolute inset-0 -z-10'>
       <Image
        src={portfolio}
        fill
        alt='not found'
        style={{objectFit:'cover'}}
        />
       </div>
       <div>
        <h1 className='text-white'> gasfasfas</h1>
       </div>
    </div>
  )
}

export default Hero;