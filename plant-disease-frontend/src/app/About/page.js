
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './About.css'

const About = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 text-white'>

                <h1>AI-Powered Disease Detection:</h1>
                <p>Uses CNN to analyze crop images and identify diseases with high accuracy.</p>
                </div>
                <div className='col-md-6  d-flex justify-content-center'>
                    {/* <img src='../../assests/extraction.png' className='imgabout'/> */}
                </div>
            </div>
            {/* <p>About Our Project </p> */}

        </div>

    )
}


export default About;