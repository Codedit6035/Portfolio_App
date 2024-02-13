import React, { useState } from 'react';
import {  motion } from "framer-motion";
import ToggleButton from './ToggleButton';
import Links from './Links';



const OverlayMenu = ({toggleMenu}) => {

  const menuVars = {
    initial: {
      scaleY: 0
    },
    animate: {
      scaleY: 1,
      transition:{
        duration:0.5,
        ease:[0.12, 0, 0.39, 0]
      }
    },
    exit: {
      scaleY: 0,
      transition:{
        delay:0.5,
        duration:0.5,
        ease:[0.12, 1, 0.36, 1]
      }
    },
  }


  return (
    <motion.div   
      className='overlaymenu'>
      <motion.div 
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'    
            className='bg'>
      <Links  toggleMenu={toggleMenu}/>
      </motion.div>
      
      <ToggleButton  toggleMenu={toggleMenu}/>

    </motion.div>
  )
}

export default OverlayMenu



