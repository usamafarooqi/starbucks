import React from 'react'
import LeftSide from './components/leftSide/page'
import RightSide from './components/rightSide/page'

const Home = () => {
  return (
    <div className='flex justify-between h-[calc(100vh-25vh)] mt-[10vh] relative'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Home