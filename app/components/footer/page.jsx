import Image from 'next/image'
import React from 'react'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

const Footer = () => {
    return (
        <div className='absolute bottom-10 flex justify-center items-center gap-10 w-full'>

            <Image className='w-[5vw] hover:cursor-pointer hover:-translate-y-5 hover:scale-110 transition ease-in-out duration-300' src={img1} alt='img1' />
            <Image className='w-[5vw] hover:cursor-pointer hover:-translate-y-5 hover:scale-110 transition ease-in-out duration-300' src={img2} alt='img2' />
            <Image className='w-[5vw] hover:cursor-pointer hover:-translate-y-5 hover:scale-110 transition ease-in-out duration-300' src={img3} alt='img3' />
        </div>
    )
}

export default Footer