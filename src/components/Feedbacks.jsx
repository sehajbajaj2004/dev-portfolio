import React from 'react'
import { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { motion } from 'framer-motion'
import { styles } from '../style'
import SectionWrapper from '../hoc/SectionWrapper';
import { textVariant } from '../utils/motion';


import { resumeimg, pdf_file } from '../assets';

const Feedbacks = () => {

  const downloadFileAtUrl = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Sehaj Bajaj CV"); // Replace with the actual file name
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  const [imgState, setImgState] = useState(false)

  return (
    <>
      <motion.div variants={textVariant} initial="hidden" animate="visible">
        <p className={styles.sectionSubText}>Download my Resume</p>
        <h2 className={styles.sectionHeadText}>My Resume</h2>
      </motion.div>

      {/* <div className='mt-5 flex flex-col w-full justify-center items-center'>
        <div
          className={`${imgState ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 overflow-auto" : "flex flex-row w-full h-full items-center justify-center"}`}
          onClick={() => setImgState(false)}
        >
          <img
            src={resumeimg}
            alt="resume"
            className={`${imgState ? "m-auto w-[800px] h-auto" : "z-10 w-[300px]"} cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from bubbling up to the container
              setImgState(!imgState);
            }}
          />
        </div>
        <button
          className='bg-secondary text-tertiary font-semibold text-[17px] p-3 rounded-2xl mb-6 mt-6 hidden sm:block'
          onClick={() => { downloadFileAtUrl(pdf_file) }}
        >
          Download CV
        </button>
      </div> */}

      <div className='bg-tertiary p-5 rounded-2xl mt-5 z-100'>
        <div className='mt-5 flex flex-col w-full justify-start items-start'>
          <div className='flex flex-row w-full h-full items-start justify-start'>
            <div
              className={`${imgState ? "fixed inset-0 flex items-start justify-start bg-black bg-opacity-75 z-50 overflow-auto" : ""}`}
              onClick={() => setImgState(false)}
            >
              <img
                src={resumeimg}
                alt="resume"
                className={`${imgState ? "m-auto mt-10 w-[800px] h-auto object-contain" : "z-10 w-[400px] ml-5"} cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from bubbling up to the container
                  setImgState(!imgState);
                }}
              />
            </div>
          </div>
          <button
            className='bg-secondary text-tertiary font-semibold text-[17px] p-3 rounded-2xl mb-6 mt-6 ml-5'
            onClick={() => { downloadFileAtUrl(pdf_file) }}
          >
            Download CV
          </button>
        </div>
      </div>


    </>
  );
}

export default SectionWrapper(Feedbacks, "");