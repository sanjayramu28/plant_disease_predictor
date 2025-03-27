import howitworksintro from "../../../public/assests/howitworksintro.jpg"
import howitwor from "../../../public/assests/howitworks2.jpg"
import howitworksscan from "../../../public/assests/howitworksscan.jpg"
import Image from 'next/image'

const Working = () => {
    return (
        // <p>Working </p>
        <div className="container-fluid">
            <h1>How It Works</h1>
            <br />
            <h2>Introduction</h2>
            <br />
            <p>Understanding plant diseases early can help farmers and researchers take quick action. Our AI-powered Plant Disease Prediction system makes this process simple and efficient. Here’s how it works:</p>
            {/* <ol> */}
            {/* <li> */}
            <h3>Step 1: Upload a Leaf Image</h3>
            <div className="row mt-5 mb-5">
                <div className="col-md-6 d-flex justify-content-center">
                    <Image src={howitworksintro} style={{ width: "300px", height: "300px", borderRadius: "100px" }} />
                </div>
                <div className="col-md-6 d-flex align-items-center " style={{ height: "300px" }}>
                    <ul className="ms-5">
                        <li>Take a clear image of the affected leaf using your smartphone or camera.</li>
                        <li>Click the "Upload" button to select the image from your device.</li>
                    </ul>
                </div>
            </div>
            <h3>Step 2: AI Analysis & Disease Detection</h3>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center" style={{ height: "300px" }}>
                    <ul>
                        <li>Our advanced deep-learning model processes the image.</li>
                        <li>It detects patterns, spots, and other symptoms to identify the disease accurately.</li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <Image src={howitwor} style={{ width: "300px", height: "300px", borderRadius: "100px" }} />
                </div>
            </div>
            <h3>Step 3: Get Results & Disease Information</h3>
            <div className="row mt-5 mb-5">
                <div className="col-md-6 d-flex justify-content-center">
                    <Image src={howitworksscan} style={{ width: "300px", height: "300px", borderRadius: "100px" }} />
                </div>
                <div className="col-md-6 d-flex align-items-center " style={{ height: "300px" }}>
                    <ul className="ms-5">
                        <li>View the predicted disease and its confidence level.</li>
                        <li>Get detailed information about the disease, its causes, and preventive measures.</li>
                    </ul>
                </div>
            </div>
            <h3>Step 4: Prevention & Treatment Suggestions</h3>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="https://media.istockphoto.com/id/1303877287/vector/paper-checklist-and-pencil-flat-pictogram.jpg?s=612x612&w=0&k=20&c=NoqPzn94VH2Pm7epxF8P5rCcScMEAiGQ8Hv_b2ZwRjY=" width={"300px"}  style={{borderRadius:"200px"}} />
                </div>
                <div className="col-md-6 d-flex align-items-center" style={{ height: "300px" }}>
                    <ul>
                        <li>Get recommended solutions to treat the disease.</li>
                        <li>Learn about organic and chemical treatments to protect your crops.</li>
                    </ul>
                    </div>
            </div>

            {/* </li> */}
            {/* </ol> */}
        </div >
    )
}

export default Working;