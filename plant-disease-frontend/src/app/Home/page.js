import React from 'react'
import './Home.css'
import introduction from "../../../public/assests/introduction.png"
import about from "../../../public/assests/about.jpg"
import howitworks from "../../../public/assests/how it works.png"
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
    return (
        <div className='container-fluid' style={{ fontFamily: "Asap" }}>
            <div className='d-flex justify-content-center'>
                <div style={{height:"300px",display:"flex",alignItems:"center"}}>
                    <h1 className='header d-flex justify-content-center fw-bold ' style={{fontSize:"70px"}}>DETECT PLANT DISEASE INSTANTLY USING AI !</h1>
                    {/* <p className='d-flex justify-content-center'>Upload a leaf image and get instant disease predictions with solutions.</p> */}
                </div>
            </div>
            <div className='link'>
                <button className='button-50 w-25'> 
                    <Link href='/Upload' className='fs-4'>START DETECTING ! ➡️</Link>
                </button>
            </div>
           
            {/* <hr /> */}
        </div>

    )
}

export default Home
