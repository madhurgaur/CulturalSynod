import React from 'react'
import Header from '../Header/Header'

const Home = () => {
    return (
        <div className='homeWrapper'>
            <Header/>
            <div className='w-[100vw] h-[100vh] flex justify-center content-center flex-wrap'>
                <h1 className=' text-9xl'>Home Page</h1>
            </div>
        </div>
    )
}

export default Home