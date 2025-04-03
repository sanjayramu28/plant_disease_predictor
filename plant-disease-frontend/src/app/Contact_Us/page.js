import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,   faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'



const Contact = () => {
    return (
        <>
            <h2 style={{ color: "gold" }} className='p-3'>Meet the Team:</h2>
            <div className="row container-fluid p-3">
                <div className="col-md-3">
                    <div className="card">
                        <Image src="/assests/mentor.png" className="about-img" width={300} height={300} alt='mentor' />
                        <p className='d-flex justify-content-center fw-bold'>Mentor : Mr. Kaviarasu K</p>
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
                        <Image src="/assests/link.png" className="about-img"  alt='memebr1' width={300} height={300} />
                        <p className='d-flex justify-content-center fw-bold'>Member 1 : Sanjay R</p>
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
                        <Image src="/assests/paulimmanuvel.png" className="about-img"  width={300} height={300} alt='member 2'/>
                        <p className='d-flex justify-content-center fw-bold'>Member 2:Paul Immanuvel J</p>
                        
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
                        <Image src="/assests/mohan.png" className="about-img" alt='member 3' width={300} height={300}/>
                        <p className='d-flex justify-content-center fw-bold'>Member 3 : Mohan  R</p>
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