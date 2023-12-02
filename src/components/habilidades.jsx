import { motion } from 'framer-motion'
export const Habilidades = () => {
  const img = [<img src='src\assets\html.svg' key={0} alt='html logo' width={60} />,
    <img src='src\assets\css.svg' key={1} alt='js logo' width={60} />,
    <img src='src\assets\jsSvg.svg' key={1} alt='js logo' width={60} />,
    <img src='src\assets\react.svg' key={1} alt='js logo' width={60} />,
    <img src='src\assets\mongoDB.svg' key={1} alt='js logo' width={60} />,
    <img src='src\assets\nodejs.svg' key={1} alt='js logo' width={60} />]
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <>

      <h1>Habilidades clave</h1>
      <p>
        Tengo compentecias en tecnologías clave que me permiten desarrollar aplicaciones web robustas y escalables tales como React,
        Node.js, MongoDB.
      </p>
      <motion.ul
        className='skill'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {img.map((element, index) => (
          <motion.li key={index} className='skill-item' variants={item}>
            {element}
          </motion.li>
        ))}
      </motion.ul>

    </>
  )
}
