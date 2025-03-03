import Image from 'next/image'
import React from 'react'
import Ramadan from '../../../public/ramadan.jpg'

const Lazypage = () => {
  return (
    <Image className='w-[400px] mx-auto' src={Ramadan}   loading="lazy"
      priority={false} alt='lazy'  placeholder='blur'  />
  )
}

export default Lazypage