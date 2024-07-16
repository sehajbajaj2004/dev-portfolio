import React from 'react'
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

  return (
    <>
      <motion.div variants={textVariant} initial="hidden" animate="visible">
        <p className={styles.sectionSubText}>Download my Resume</p>
        <h2 className={styles.sectionHeadText}>My Resume</h2>
      </motion.div>

      <div className='mt-5 flex flex-col w-full justify-center items-center'>
        <button
          className='bg-secondary text-tertiary font-semibold text-[17px] p-3 rounded-2xl mb-6 mt-6'
          onClick={() => { downloadFileAtUrl(pdf_file) }}
        >
          Download CV
        </button>
        <img src={resumeimg} alt="resume" className='w-full object-contain hidden sm:block' />
        <button
          className='bg-secondary text-tertiary font-semibold text-[17px] p-3 rounded-2xl mb-6 mt-6 hidden sm:block'
          onClick={() => { downloadFileAtUrl(pdf_file) }}
        >
          Download CV
        </button>
      </div>
    </>
  );
}

export default SectionWrapper(Feedbacks, "");