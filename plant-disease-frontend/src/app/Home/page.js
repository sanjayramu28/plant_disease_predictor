import React from 'react'
import './Home.css'
import introduction from "../../../public/assests/introduction.png"
import about from "../../../public/assests/about.jpg"
import howitworks from "../../../public/assests/how it works.png"
import Image from 'next/image'

const Home = () => {
    return (
        <div className='container-fluid' style={{ fontFamily: "Asap" }}>
            <div className='d-flex justify-content-center'>
                <div>
                    <h1 className='header d-flex justify-content-center fw-bold'>Detect Plant Diseases Instantly with AI!</h1>
                    <p className='d-flex justify-content-center'>Upload a leaf image and get instant disease predictions with solutions.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 p-5'>

                    <h1 className='header fw-bold'>INTRODUCTION :</h1>
                    <br />
                    {/* <p className='fs-1 ms-4'>Plant diseases significantly threaten crop production, reducing yields, quality, and farmer profits. These diseases stem from bacteria, fungi, viruses, and environmental factors. Early detection is crucial for minimizing damage and ensuring healthy growth.</p> */}
                    <p className=' ms-4'> &nbsp; &nbsp; &nbsp;Plant diseases harm crop production, reducing yields and quality. Early detection is key to preventing losses. Our AI-powered system quickly analyzes leaf images to provide instant disease diagnosis, helping users take timely action.</p>
                </div>
                <div className='col-md-6 d-flex justify-content-center p-5'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Image src={introduction} style={{ height: "300px", width: "300px" }} className='roundimg' />
                    </div>
                </div>
            </div>
            <hr />
            <div className='row '>
                <div className='col-md-6 p-5'>
                    <h1 className='header fw-bold'>ABOUT THIS PROJECT :</h1>
                    <br />
                    <p className=' ms-4'>&nbsp;&nbsp; &nbsp; Our AI-powered Plant Disease Prediction system helps farmers and researchers identify diseases from leaf images in seconds. By simply uploading a leaf image, the system analyzes it using a trained deep-learning model and provides a diagnosis along with suggested treatments.</p>
                </div>
                <div className='col-md-6 d-flex justify-content-center p-5'>
                    <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                        <Image src={about} style={{ height: "400px", width: "400px", borderRadius: "300px" }} />
                    </div>
                </div>
            </div>
            <hr />
            <div className='how-it-works row'>
                <div className='col-md-6 p-5'>
                    <h1 className='header fw-bold'>HOW THIS WORKS :</h1>
                    <br />
                    <ul className=' ms-4'>
                        <li>Upload a clear image of the affected plant leaf.</li>
                        <li>AI processes the image and detects possible diseases.</li>
                        <li> Get instant results with disease information and prevention tips.</li>
                    </ul>
                </div>
                <div className='col-md-6 d-flex justify-content-center p-5'>
                    <Image src={howitworks} />
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Home
