import React, { useState } from 'react';
import {  motion } from "framer-motion";
import Overlaylink from './OverlayLink';

const navLinks = [
  {title: "About Me" , href:"#aboutme"},
  {title: "services" , href:"#services"},
  {title: "My Work" , href:"#mywork"},
  {title: "Contact Me" , href:"#contactme"},
]



const Overlaylinks = ({toggleMenu}) => {

  const containerVars = {
    initial: {
      transition:{
        staggerChildren:0.01,
        staggerDirection:-1,
      }
    },
    open: {
      transition:{
        delayChildren:0.3,
        staggerChildren:0.01  ,
        staggerDirection:1,
      }
    }
  }



  return (

      <motion.div variants={containerVars} 
      initial="initial"
      animate="open"
      exit="initial"
      className='links'>
        {navLinks.map((link, index)=>{
          return(
            <div className='linkscontainer'>
              <Overlaylink key={index} title={link.title} href={link.href} toggleMenu={toggleMenu}></Overlaylink>
            </div> 
          )
            })}
      </motion.div>
  )
}

export default Overlaylinks



