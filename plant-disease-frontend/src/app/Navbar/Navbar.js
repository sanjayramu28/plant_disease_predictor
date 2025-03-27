import Link from "next/link";
import './Navbar.css'

const Navbar=()=>{
    return(
        
        <>
        <div className="row p-5 container-fluid ">
            <div className="col-md-4">
                <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="logo" style={{width:"50px",height:"50px"}}/>
            </div>
            <div className="col-md-8 d-flex justify-content-around nav-links">
            <Link href="/Home" >Home</Link>
            {/* <label>About </label> */}
            <Link href="/About">About</Link>
            <Link href="/Upload">Upload</Link>
            <Link href="/Working">Working</Link>
            <Link href="/Contact_Us">Contact Us</Link>
            
            </div>
        </div>
        </>
    )
}

export default Navbar;