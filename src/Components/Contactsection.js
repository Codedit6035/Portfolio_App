
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Page.css';
import reile from '../Components/Images/contact.png';
import { Link } from "react-router-dom";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.1],
        translateX: '-7%',
        translateY: '7%',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Fully reveal the image
      });
    } else {
      controls.start({
        scale: 1,
        translateX: 0,
        translateY: 0,
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', // Hide the image
      });
    }
  }, [controls, inView]);

  return (
    <div className='page' id='services'>
      <motion.div
        className='leftpart'
        initial={{x:'-38vw'}}
        whileInView={{ x:0 }}
        transition={{duration:0.7,delay:0.2, ease: 'easeInOut' }}>
        <div className='name'>Contact Me</div>
        <div className='horizontal-line'></div>
        <div className='horizontal-line'></div>
        <div className='introduction'>Codedit@gmail.com </div>
        <button class="button-23" role="button"><Link to={"/Services" }>Send Email</Link></button>
      </motion.div>
      <motion.div
        className='rightpart'
        ref={ref}
        animate={controls}
        initial={{
          scale: 1,
          translateX: 0,
          translateY: 0,
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', // Initial hidden state
        }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <img src={reile} alt='Project Image' className='scaling-image' />
      </motion.div>
    </div>
  );
}

export default Contact;