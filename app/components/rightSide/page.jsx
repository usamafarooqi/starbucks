import Image from 'next/image'
import React from 'react'
import img1 from '../../images/img1.png'
import facebook from '../../images/facebook.png'
import insta from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
const RightSide = () => {
    return (
        <div className='flex-1 bg-[#357a4f] rounded-tl-full  flex items-center relative'>

            <div className='absolute -top-24 left-20'>
                <Image src={img1} alt='img1' /> {/* Added alt attribute */}
            </div>

            <div className='absolute right-12 flex gap-8 flex-col'>
                <Image className='invert scale-100 ease-in duration-200 hover:scale-125 hover:cursor-pointer' src={facebook} alt='facebook' />
                <Image className='invert scale-100 ease-in duration-200 hover:scale-125 hover:cursor-pointer' src={twitter} alt='twitter' />
                <Image className='invert scale-100 ease-in duration-200 hover:scale-125 hover:cursor-pointer' src={insta} alt='insta' />
            </div>
        </div>
    );
}

export default RightSide;