import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Images/logo2.png'
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion"
import { FaLinkedinIn,  FaInstagram , FaFacebookF  } from "react-icons/fa";
import OverlayMenu from './OverlayMenu';
import { SiGamedeveloper } from "react-icons/si";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    < >
  <div className='wrappernavbar'>
  <div className='navbarleftpart'><a href="#home"><motion.div
  initial={{opacity:0 , scale:0.5}}   animate={{opacity:1 , scale:1}} transition={{duration:0.5}}
> <SiGamedeveloper  style={{"fontSize":50}} /></motion.div></a></div>
  <div className='navbarrightpart' style={{color:'white'}}>
      <div className='sociallinks'>
      <a href="https://www.linkedin.com/in/ouafa-benamor/?originalSubdomain=de" target='blank'><FaLinkedinIn /></a>
      <a href="https://www.instagram.com/ouafa_benamor/?hl=en" target='blank'><FaInstagram/></a>
      <a href="https://www.facebook.com" target='blank'><FaFacebookF/></a>
      </div>
      <div className='menu'
      onClick={toggleMenu}>
      <IoMenu style={{fontSize:70}}/>
      </div>
      </div>
  </div>
  <AnimatePresence>
  {open &&(
    <OverlayMenu  toggleMenu={toggleMenu}/>
  )}
  </AnimatePresence>
  </>
  )
}
export default Navbar



