"use client"
import howitworksintro from "../../../public/assests/howitworksintro.jpg"
import howitwor from "../../../public/assests/howitworks2.jpg"
import howitworksscan from "../../../public/assests/howitworksscan.jpg"
import Image from 'next/image'
import { useEffect } from "react"
import './Working.css'

const Working = () => {


    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // ✅ Add fade-in/fade-out when the element enters viewport
                    if (entry.target.classList.contains("step1")) {
                        entry.target.classList.add("fade-in");
                        console.log("step1");
                    } else if (entry.target.classList.contains("step2")) {
                        entry.target.classList.add("fade-out");
                        console.log("step2");
                    } else if (entry.target.classList.contains("step3")) {
                        entry.target.classList.add("fade-in");
                        console.log("step3");
                    } else if (entry.target.classList.contains("step4")) {
                        entry.target.classList.add("fade-out");
                        console.log("step4");
                    }
                } else {
                    entry.target.classList.remove("fade-in", "fade-out");
                }
            });
        };

        const intersectionObserver = new IntersectionObserver(observerCallback, { threshold: 0.1 });

        const elements = document.querySelectorAll(".step1, .step2, .step3, .step4");
        elements.forEach((el) => intersectionObserver.observe(el));

        return () => {
            elements.forEach((el) => intersectionObserver.unobserve(el));
            intersectionObserver.disconnect();
        };
    }, []);


    return (
        // <p>Working </p>
        <div className="container-fluid work" style={{ overflow: "hidden" }}>
            <h1 style={{ color: "gold" }} className="fw-bold">HOW IT WORKS !</h1>

            <div className="step1 mt-5">
                <h3>
                    <span className="fw-bold">
                        Step 1 :
                    </span>
                    Upload a Leaf Image</h3>
                <div className="row mt-5 mb-5">
                    <div className="col-md-6 d-flex justify-content-center">
                        <Image src={howitworksintro} style={{ width: "300px", height: "300px", borderRadius: "100px" }} className="img-notanimated" alt="how" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center " style={{ height: "300px" }}>
                        <ul className="ms-5 fs-3">
                            <li>Take a clear image of the affected leaf using your smartphone or camera.</li>
                            <li>Click the &quot;Upload&quot; button to select the image from your device.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="step2">
                <h3>
                    <span className="fw-bold ">
                        Step 2 :
                    </span> Analysis & Disease Detection</h3>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center" style={{ height: "300px" }}>
                        <ul className="fs-3">
                            <li>Our advanced deep-learning model processes the image.</li>
                            <li>It detects patterns, spots, and other symptoms to identify the disease accurately.</li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center mb-5">
                        <Image src={howitwor} style={{ width: "300px", height: "300px", borderRadius: "100px" }} className="img-notanimated2" alt="step 2" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="step3">
                <h3>
                    <span className="fw-bold">
                        Step 3 :
                    </span> Get Results & Disease Information</h3>
                <div className="row mt-5 mb-5">
                    <div className="col-md-6 d-flex justify-content-center">
                        <Image src={howitworksscan} style={{ width: "300px", height: "300px", borderRadius: "100px" }} className="img-notanimated" alt="step 3 "/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center " style={{ height: "300px" }}>
                        <ul className="ms-5 fs-3">
                            <li>View the predicted disease and its confidence level.</li>
                            <li>Get detailed information about the disease, its causes, and preventive measures.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="step4">
                <h3>
                    <span className="fw-bold">
                        Step 4 :
                    </span> Prevention & Treatment Suggestions</h3>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center" style={{ height: "300px" }}>
                        <ul className="fs-3">
                            <li>Get recommended solutions to treat the disease.</li>
                            <li>Learn about organic and chemical treatments to protect your crops.</li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <Image
                            src="https://media.istockphoto.com/id/1303877287/vector/paper-checklist-and-pencil-flat-pictogram.jpg?s=612x612&w=0&k=20&c=NoqPzn94VH2Pm7epxF8P5rCcScMEAiGQ8Hv_b2ZwRjY="
                            width={300}
                            height={300}
                            alt="Checklist and pencil icon"
                            style={{ borderRadius: "50%" }}
                            className="img-notanimated2"
                            unoptimized={true} // ✅ Bypasses Next.js optimization
                        />
                    </div>
                </div>
            </div>
            <hr />
            {/* </li> */}
            {/* </ol> */}
        </div >
    )
}

export default Working;