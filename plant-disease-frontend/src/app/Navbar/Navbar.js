import Link from "next/link";
import './Navbar.css'

const Navbar=()=>{
    return(
        
        <>
        <div className="row p-5 container-fluid ">
            <div className="col-md-4">
                <img src="../../assests/logo.jpg" alt="logo" style={{width:"200px",height:"200px"}}/>
            </div>
            <div className="col-md-8 d-flex justify-content-around nav-links align-items-center " style={{height:"200px"}}>
            <Link href="/Home" >Home</Link>
            {/* <label>About </label> */}
            <Link href="/Working">Working</Link>
            {/* <Link href="/About">About</Link> */}
            <Link href="/Upload">Upload</Link>
            <Link href="/Contact_Us">Contact Us</Link>
            
            </div>
        </div>
        </>
    )
}

export default Navbar;