import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export const Boxanimated = ({ content }) => {
  const [key, setKey] = useState(0)

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      width: ['100%', '10%', '100%', '100%'],
      color: ['#ffffff', '#ffffff', '#ffffff', '#000'],
      transition: {
        duration: 0.5,
        delayChildren: 0.3
      }
    },
    salida: { opacity: 0 }
  }

  const item = {
    hidden: { opacity: 0, display: 'none' },
    visible: { opacity: 1, display: 'flex' },
    salida: { opacity: 0, display: 'none' }
  }

  useEffect(() => {
    // Cambiar la key para forzar la renderización
    setKey((prevKey) => prevKey + 1)
  }, [content])

  return (
    <motion.div
      key={key}
      variants={container}
      initial='hidden'
      animate='visible'
      exit='salida'
      className='caja'
    >
      <motion.div className='contenido' variants={item}>
        {content}
      </motion.div>
    </motion.div>
  )
}
