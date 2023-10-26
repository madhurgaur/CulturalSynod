import React from 'react'
import './ClubLoader.css'
const ClubLoader = () => {
    return (
        <div className='loader'>
            <div style={{'--i':0}} className='banner'>
                <img src='/FineArts.jpeg' alt='banner1' />
            </div>
            <div style={{'--i':1}} className='banner'>
                <img src='/FineArts.jpeg' alt='banner2' />
            </div>
            <div style={{'--i':2}} className='banner'>
                <img src='/FineArts.jpeg' alt='banner3' />
            </div>
            <div style={{'--i':3}} className='banner'>
                <img src='/FineArts.jpeg' alt='banner4' />
            </div>
            <div style={{'--i':4}} className='banner'>
                <img src='/FineArts.jpeg' alt='banner5' />
            </div>
        </div>
    )
}

export default ClubLoader