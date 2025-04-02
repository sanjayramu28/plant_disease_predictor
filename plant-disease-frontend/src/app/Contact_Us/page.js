import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// import {faEnvelope}
// import './About.css'

const Contact = () => {
    return (
        <>
            {/* <h3 className='p-3'>
                Great achievements are never done alone. This project is the result of
                teamwork, dedication, and the guidance of our mentor. A heartfelt thank you to each contributor
                who played a crucial role in bringing this idea to life!
            </h3> */}

            <h2 style={{ color: "gold" }} className='p-3'>Meet the Team:</h2>
            <div className="row container-fluid p-3">
                <div className="col-md-3">
                    <div className="card">
                        <img src="../../../assests/mentor.png" className="about-img" />
                        <p className='d-flex justify-content-center fw-bold'>Mentor : Mr. Kaviarasu K</p>
                        {/* <img src="https://media.licdn.com/dms/image/v2/D5635AQFYgfYvvWcI4A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738849230541?e=1744124400&v=beta&t=QO1v9u5DwWdSFWy0NzWv77jpu43c0Jx7vkxw1opFwto" className="about-img" /> */}
                        <div className='d-flex justify-content-center'>
                            <div className='aboutus-svg' style={{ overflow: "visible" }}>
                                <a  href="#"target='blank'>
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target='blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>                                
                                <a href="https://mail.google.com/mail/?view=cm&to=kaviarasuk@ksrct.ac.in" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ color: "#333333" }}>
                        <img src="../../../assests/link.png" className="about-img" />
                        <p className='d-flex justify-content-center fw-bold'>Member 1 : Sanjay R</p>
                        {/* <img src="https://media.licdn.com/dms/image/v2/D5635AQFYgfYvvWcI4A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738849230541?e=1744124400&v=beta&t=QO1v9u5DwWdSFWy0NzWv77jpu43c0Jx7vkxw1opFwto" className="about-img" /> */}

                        <div className='d-flex justify-content-center'>
                            <div className='aboutus-svg'>
                                <a href='https://github.com/sanjayramu28' target='blank'>
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a  href='https://www.linkedin.com/in/sanjay-ram-28dec2003/' target='blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&to=sanjayrajamani2003@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="../../../assests/paulimmanuvel.png" className="about-img" />
                        <p className='d-flex justify-content-center fw-bold'>Member 2 : Paul Immanuvel J</p>
                        {/* <img src="https://media.licdn.com/dms/image/v2/D5635AQFYgfYvvWcI4A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738849230541?e=1744124400&v=beta&t=QO1v9u5DwWdSFWy0NzWv77jpu43c0Jx7vkxw1opFwto" className="about-img" /> */}
                        <div className='d-flex justify-content-center' target='blank'>
                            <div className='aboutus-svg'>
                                <a href='http://github.com/paulimmanuvel' target='blank'>
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href='https://www.linkedin.com/in/paul091103/' target='blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&to=paulimmanuel93@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="../../../assests/mohan.png" className="about-img" />
                        <p className='d-flex justify-content-center fw-bold'>Member 3 : Mohan  R</p>
                        {/* <img src="https://media.licdn.com/dms/image/v2/D5635AQFYgfYvvWcI4A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738849230541?e=1744124400&v=beta&t=QO1v9u5DwWdSFWy0NzWv77jpu43c0Jx7vkxw1opFwto" className="about-img" /> */}
                        <div className='d-flex justify-content-center'>
                            <div className='aboutus-svg'>
                                <FontAwesomeIcon icon={faGithub} />
                                <a href='https://www.linkedin.com/in/paul091103/' target='blank'>
                                </a>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                <a href="https://mail.google.com/mail/?view=cm&to=paulimmanuel93@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;