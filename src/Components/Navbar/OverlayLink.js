import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

const Overlaylink = ({title, href,toggleMenu}) => {
    const linkVars = {
        initial: {
          y: "60vh",
          transition:{
            duration:0.5,

          }
        },
        open: {
          y: 0,
          transition:{
            duration:0.7,

          }
        },
      }
  return (
    <motion.div variants={linkVars}
    initial="initial"
    animate="open">
        <a href={href}  onClick={toggleMenu}>{title} </a>
    </motion.div>
  )
}

export default Overlaylink