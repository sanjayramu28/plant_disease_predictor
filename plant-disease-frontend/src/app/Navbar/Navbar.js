import Link from "next/link";
import './Navbar.css'
import Image from "next/image";

const Navbar=()=>{
    return(
        
        <>
        <div className="row p-5 container-fluid ">
            <div className="col-md-4">
                <Image src="../../assests/logo.jpg" alt="logo"  style={{width:"200px",height:"200px"}} unoptimized />
            </div>
            <div className="col-md-8 d-flex justify-content-around nav-links align-items-center " style={{height:"200px"}}>
            <Link href="/Home" >Home</Link>
            <Link href="/Working">Working</Link>
            <Link href="/Upload">Upload</Link>
            <Link href="/Contact_Us">Contact Us</Link>            
            </div>
        </div>
        </>
    )
}

export default Navbar;