import React from 'react'

const LeftSide = () => {
    return (
        <div className='pl-20 flex-1 '>

            <div className='text-[3.5vw] leading-tight '>
                <p className='text-gray-700 font-[500]'>It's not just Coffee </p>
                <p className='text-gray-700 font-[500]'>It's <span className='text-[#357a4f] font-sans font-black text-[6vw]'>Starbucks</span></p>
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste sit incidunt rem rerum voluptate provident natus vel aspernatur iusto expedita. Dolores asperiores nesciunt facere. Voluptatibus in harum eveniet possimus porro.
            </div>
            <button className='bg-[#357a4f] w-fit rounded-full text-white px-[1.5vw] py-[1vw] mt-[1vw]'>LEARN MORE</button>
        </div>
    )
}

export default LeftSide