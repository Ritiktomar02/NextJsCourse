import React from 'react'
import Link from 'next/link';
const NavbarPage = () => {
  return (
    <div className='flex justify-between w-full h-[50px] bg-amber-500 font-bold items-center'>
       <Link href="/" className=' mx-5' >Home</Link>
       <div className=' flex mx-5 justify-between w-1/6'>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
       </div>
    </div>
  )
}

export default NavbarPage;