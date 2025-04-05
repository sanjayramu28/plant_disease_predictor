import React from 'react'
import './Home.css'
import Link from 'next/link'

const Home = () => {
    return (
        <div className='container-fluid' style={{ fontFamily: "Asap" }}>
            <div className='d-flex justify-content-center'>
                <div className='home-header' >
                    <h1 className='header w-100 fw-bold  '>DETECT PLANT DISEASE INSTANTLY USING AI !</h1>
                    {/* <p className='d-flex justify-content-center'>Upload a leaf image and get instant disease predictions with solutions.</p> */}
                </div>
            </div>
            <div className='link'>
                <button className='button-50 '> 
                    <Link href='/Upload' className='fs-4'>START DETECTING ! ➡️</Link>
                </button>
            </div>
           
            {/* <hr /> */}
        </div>

    )
}

export default Home
