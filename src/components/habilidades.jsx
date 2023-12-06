import { motion } from 'framer-motion'
export const Habilidades = () => {
  const img = [<img src='\assets\html.svg' key={0} alt='html logo' width={60} />,
    <img src='\assets\css.svg' key={1} alt='js logo' width={60} />,
    <img src='\assets\jsSvg.svg' key={1} alt='js logo' width={60} />,
    <img src='\assets\react.svg' key={1} alt='js logo' width={60} />,
    <img src='\assets\mongoDB.svg' key={1} alt='js logo' width={60} />,
    <img src='\assets\nodejs.svg' key={1} alt='js logo' width={60} />,
    <img src='\assets\php.svg' key={1} alt='js logo' width={60} />,
    <img src='\assets\postqresql.svg' key={1} alt='js logo' width={60} />,
    <img src='\assets\nextjs.svg' key={1} alt='js logo' width={60} />]
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
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
        Tecnologías como React, JavaScript, Node.js, Postgres y MongoDB son habilidades que he reforzado a través de proyectos personales y autoaprendizaje activo.
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
