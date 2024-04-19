import React from 'react'
import './sub.css'
function Subscribe() {
    return (
        <div className='subscribe-bg'>
            <h2 className='font-bold text-5xl uppercase'>If you have any question,
                feel free to call 844 - 1800 3355</h2>
            <p className='font-medium'>or leave us a message contact@example.com</p>
            <div className="subscribe-container flex justify-center items-center">
                <h2 className='sub-heading text-3xl'>Subscribe for the latest updates</h2>
                <div className="flex  input-box">
                    <input type="text" name="" id="" className='w-96 md:w-full bg-pink-100 py-3 px-4' />
                    <button className='bg-black py-3 px-4 uppercase font-medium sub-btn'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
