"use client"

import Link from "next/link";
import './Navbar.css'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const toggleclass = () => {
        const navlink = document.querySelector(".nav-links");
        const bar = document.querySelector("#bar");
        const fax = document.querySelector(".fax");

        if (!navlink.classList.contains("active")) {
            bar.classList.add("hide");
            navlink.classList.add("active");
            console.log(bar)
            //   bar.style.display = "none";
            fax.style.display = "block";
        } else {
            navlink.classList.remove("active");
            bar.style.display = "block";
            fax.style.display = "none";
        }
    };


    return (


        <>
            <div>

                <FontAwesomeIcon icon={faBars} className='bars' id="bar" onClick={toggleclass} />
            </div>
            <div className="row p-5 container-fluid d-flex">
                <div className="col-md-3 d-flex logoimg">
                    <div style={{ position: "relative", width: "200px", height: "200px" }}>
                        <Image
                            src="../../assests/logo.jpg" // Use /assets, not ../../
                            alt="logo"
                            fill
                            style={{ objectFit: "contain" }} // or "cover"
                            unoptimized
                        />
                    </div>

                </div>
                <div className="col-md-8 d-flex justify-content-around nav-links align-items-center " style={{ height: "200px" }}>
                    <Link href="/Home" >Home</Link>
                    <Link href="/Working">Working</Link>
                    <Link href="/Upload">Upload</Link>
                    <Link href="/Contact_Us">Contact Us</Link>
                    <FontAwesomeIcon icon={faX} className="fax p-3 " onClick={toggleclass} />
                </div>
            </div>
        </>
    )
}

export default Navbar;