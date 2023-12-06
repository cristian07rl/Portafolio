export const Proyectos = () => {
  return (
    <>
      <div className='project'>

        <div className='project-description'>
          <h4>Coopworker</h4>
          <p>Desarrollé una aplicación web utilizando Next.js para impulsar la eficiencia interna de una cooperativa de trabajo asociado.
            Me centré en la gestión integral de la información de los asociados, implementando funcionalidades clave como el registro, actualización y búsqueda de datos.
            Este proyecto no solo mejoró la operatividad interna, sino que también demostró mis habilidades en el desarrollo web y la gestión de bases de datos
          </p>
          <a href='https://github.com/cristian07rl/coopworker' target='_blank' rel='noreferrer'><i className='fa-brands fa-github' /> Coopworker</a>
        </div>

        <div className='project-technologies'>
          <img src='/assets/nextjs.svg' alt='next.js Logo' />
          <img src='/assets/react.svg' alt='react Logo' />
          <img src='/assets/mongoDB.svg' alt='mongodb Logo' />
          <img src='/assets/nodejs.svg' alt='node.js Logo' />
        </div>

        <div className='project-description'>
          <h4>DashboardSolar</h4>
          <p>Desarrollé un proyecto personal destinado a la monitorización de los datos de producción y consumo de una pequeña instalación solar.
            Utilizando un ESP8266 para recolectar los datos y enviarlos al servidor por medio de sockets. La información recopilada se almacena en una base de datos PostgreSQL.
          </p>
          <a href='https://github.com/cristian07rl/DashboarSolar' target='_blank' rel='noreferrer'><i className='fa-brands fa-github' /> DashboarSolar</a>
        </div>

        <div className='project-technologies'>
          <img src='/assets/nodejs.svg' alt='node.js' />
          <img src='/assets/postqresql.svg' alt='postgresql' />
        </div>
        <div className='project-description'>
          <h4>Edusaludapp</h4>
          <p>
            Durante mis practicas profesionales desarrollé Edusaludapp, una página web dedicada a proporcionar a los padres de familia acceso conveniente a informes personalizados de profesionales de la salud y la educación para casos específicos.
            Desarrollé la plataforma utilizando HTML, PHP y JavaScript, asegurándome de que fuera intuitiva y eficaz en la entrega de información crucial.
          </p>
        </div>

        <div className='project-technologies'>
          <img src='/assets/php.svg' alt='php Logo' />
          <img src='/assets/mysql.svg' alt='mysql Logo' />
        </div>

      </div>
    </>
  )
}
