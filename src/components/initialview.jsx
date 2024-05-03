function Initial () {
  return (
    <>
      <div className='introduccion'>
        <div>
          <h1>Cristian Rodriguez Leguia</h1>
          <p className='st'>Ingeniero mecatronico dedicado al desarrollo de software y desarrollo web.</p>

          <p>
            Complementé mis estudios de ingeniería con un fuerte interés en sistemas de adquisición de datos.
            Me he dedicado a aprender y aplicar tecnologías como React, JavaScript, Node.js, Postgres y MongoDB,
            habilidades que he reforzado a través de proyectos personales y autoaprendizaje activo.
          </p>

          <p>
            Estoy especialmente interesado en roles que me permitan contribuir con mis habilidades de programación,
            al tiempo que me brindan la oportunidad de seguir creciendo y aprendiendo en este dinámico campo.
          </p>
        </div>
        <div className='col2'>
          <img src='\assets\foto.jpg' alt='soy yo' width={220} height={240} />
          <a href='/cristian rodriguez.pdf' download='CristianRodriguezCV'><i className='fa-solid fa-download' /> Descargar cv</a>

        </div>
      </div>
      <h2>Contacto</h2>
      <div className='contacto'>

        <div className='info'>
          <i className='fas fa-envelope' /> <span> cristian07rl@hotmail.com</span>
        </div>
        <div className='info'>
          <i className='fas fa-phone' /> <span>+57 3126384666</span>
        </div>
        <div className='info'>
          <a href='https://www.linkedin.com/in/cristianrodriguezleguia/' target='_blanck'><i className='fa-brands fa-linkedin' /> /cristianrodriguezleguia</a>
        </div>
        <div className='info'>
          <a href='https://github.com/cristian07rl' target='_blanck'><i className='fa-brands fa-github' /> /cristian07rl</a>
        </div>
      </div>
    </>
  )
}

export default Initial
