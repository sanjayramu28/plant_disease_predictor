"use client";
import React, { useState } from 'react';
import './Upload.css';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import '../Feedback/Feedback.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const Upload = () => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [diseaseInfo, SetdiseaseInfo] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loader, setloader] = useState(false);
  const [infoloader, setinfoloader] = useState(false);

  const fileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPrediction(null);
    SetdiseaseInfo(null);
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const notify = () => {
    toast("Email Sent Successfully");
  }

  const predict = async () => {
    if (!file) {
      window.alert("Please select an image file.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      setloader(true);
      // const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
      const BASE_URL =  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      setPrediction(data);
      searchdisease(data.disease);
    } catch (e) {
      console.log("Error:", e);
      setloader(false);
    }
    setloader(false);
  };

  
  const searchdisease = async (disease) => {
    try {
      const predicturl = process.env.NEXT_PUBLIC_PREDICT_URL || "http://localhost:5000"
      setinfoloader(true);
      const response = await fetch(`${predicturl}/api/get-disease-info`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disease: disease })
      });
      const data = await response.json();
      let aiResponse = data.candidates[0].content.parts[0].text;
      SetdiseaseInfo(aiResponse);
      // console.log(data.candidates[0].content.parts[0].text);
    } catch (error) {
      // window.alert("Error: ", error);
      setinfoloader(false);
      console.error("Error:", error);
    }
    setinfoloader(false);
  };


  const drag = () => {

    const dropContainer = document.getElementById("dropcontainer")
    const fileInput = document.getElementById("images")

    dropContainer.addEventListener("dragover", (e) => {
      // prevent default to allow drop
      e.preventDefault()
    }, false)

    dropContainer.addEventListener("dragenter", () => {
      dropContainer.classList.add("drag-active")
    })

    dropContainer.addEventListener("dragleave", () => {
      dropContainer.classList.remove("drag-active")
    })

    dropContainer.addEventListener("drop", (e) => {
      e.preventDefault()
      dropContainer.classList.remove("drag-active")
      setFile(e.dataTransfer.files[0])
      fileInput.files = e.dataTransfer.files
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
    })
  }


  const handeltextareachange = (e) => {
    setFeedback(e.target.value);
    // console.log(e.target.value)
  }

  const form = useRef();
  const sendEmail = (e) => {
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    e.preventDefault();
    emailjs
      .sendForm(`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`, form.current, {
        publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
      })
      .then(
        () => {
          notify();
          // window.alert('Email sent!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container-fluid" style={{ position: "relative", fontFamily: " Roboto Flex" }}>

      <ToastContainer />

      <div className="d-flex justify-content-center ">
        <form onSubmit={(e) => {
          e.preventDefault();
          predict();
        }} className='text-white w-100'>
          <div className='d-flex justify-content-center'>
            <label className="drop-container" id="dropcontainer" onClick={drag}>
              <span className="drop-title text-white">DROP IMAGE HERE</span>
              or
              <div className='d-flex justify-content-center ms-5'>
                <input type="file" id="images" className='ms-5' accept="image/*" onChange={fileChange} required />
              </div>
            </label>
          </div>
          <div className="d-flex justify-content-center p-4 mt-5">
            <button className="button-50  fs-3" type="submit">Predict</button>
          </div>
        </form>
      </div>
      {
        imagePreview && (
          <div  className="d-flex justify-content-center">
          <div style={{ position: "relative", width: "400px", height: "400px", border: "2px solid black", borderRadius: "25px" }}>
            <Image src={imagePreview} alt="Uploaded Preview" fill />
          </div>
          </div>
        )
      }
      {
        loader ? (
          <div className="loader"></div>)
          :
          (
            <>
            </>
          )
      }

      {
        prediction && (
          <div className="text-center mt-3 text-white fs-1">
            <h3>Prediction Result:</h3>
            <p><strong>Disease:</strong> {prediction.disease}</p>
            <p><strong>Confidence:</strong> {prediction.confidence.toFixed(2) * 100}%</p>
          </div>
        )}
      {
        infoloader ? (
          <div className="loader2"></div>)
          :
          (
            <>
            </>
          )
      }
      {
        diseaseInfo && (
          <>
            <div className='d-flex justify-content-center'>
              <div className='w-75' style={{ color: "white" }}>

                <ReactMarkdown>{diseaseInfo}</ReactMarkdown>

                {/* <p className='fs-3'>{diseaseInfo}</p> */}
              </div>
            </div>
            <div className='feedback-container mt-5'>
              <h2 className='ms-5'>Your Feedback means a lot to Us!!🙂</h2>
              <div class="container mt-5">
                <form className='w-100' onSubmit={(e) => sendEmail(e)} ref={form}>
                  <div class="container__items">
                    <input type="radio" name="stars" id="st5" value={"Excellent"} />
                    <label for="st5">
                      <div class="star-stroke">
                        <div class="star-fill"></div>
                      </div>
                      <div class="label-description" data-content="Excellent"></div>
                    </label>
                    <input type="radio" name="stars" id="st4" value={"Good"} />
                    <label for="st4">
                      <div class="star-stroke">
                        <div class="star-fill"></div>
                      </div>
                      <div class="label-description" data-content="Good"></div>
                    </label>
                    <input type="radio" name="stars" id="st3" value={"OK"} />
                    <label for="st3">
                      <div class="star-stroke">
                        <div class="star-fill"></div>
                      </div>
                      <div class="label-description" data-content="OK"></div>
                    </label>
                    <input type="radio" name="stars" id="st2" value={"Bad"} />
                    <label for="st2">
                      <div class="star-stroke">
                        <div class="star-fill"></div>
                      </div>
                      <div class="label-description" data-content="Bad"></div>
                    </label>
                    <input type="radio" name="stars" id="st1" value={"Terrible"} />
                    <label for="st1">
                      <div class="star-stroke">
                        <div class="star-fill"></div>
                      </div>
                      <div class="label-description" data-content="Terrible"></div>
                    </label>
                  </div>
                  <div className='text-area w-100 mt-5' style={{ transform: "rotateY(0deg)" }}>
                    <textarea placeholder="Write your feedback here" className='mt-5' rows={8} style={{ width: "100%" }} name='feedback' value={feedback} onChange={(e) => handeltextareachange(e)}></textarea>
                    <div className='d-flex justify-content-center mt-5'>
                      <button type='submit' className='btn btn-warning w-25 mb-5 feedback' >Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Upload;
