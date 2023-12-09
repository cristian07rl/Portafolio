export const Proyectos = () => {
  return (
    <>
      <div className='project'>
        <div className='project-description'>
          <h4>Edusaludapp</h4>
          <p>
            Durante mis practicas profesionales desarrollé Edusaludapp, una página web dedicada a proporcionar a los padres de familia acceso conveniente a informes personalizados de profesionales de la salud y la educación para casos específicos.
            Desarrollé la plataforma utilizando <strong>HTML, PHP y JavaScript</strong>, asegurándome de que fuera intuitiva y eficaz en la entrega de información crucial.
          </p>
        </div>

        <div className='project-technologies'>
          <img src='/assets/php.svg' alt='php Logo' />
          <img src='/assets/mysql.svg' alt='mysql Logo' />
        </div>
        <div className='project-description'>
          <h4>Coopworker</h4>
          <p>Desarrollé una aplicación web utilizando <strong>Next.js</strong> para impulsar la eficiencia interna de una cooperativa de trabajo asociado.
            Me centré en la gestión integral de la información de los asociados, implementando funcionalidades clave como el registro, actualización y búsqueda de datos.
            Este proyecto, en su etapa inicial, demostró potencial para mejorar la operatividad interna y afianzó mis habilidades en el desarrollo web y el manejo de bases de datos.
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
            Utilizando sensores para recolectar los datos y enviarlos al servidor por medio de sockets hechos con <strong>Node.js</strong> y utilizando <strong>PostgreSQL</strong> como base de datos.
          </p>
          <a href='https://github.com/cristian07rl/DashboarSolar' target='_blank' rel='noreferrer'><i className='fa-brands fa-github' /> DashboarSolar</a>
        </div>

        <div className='project-technologies'>
          <img src='/assets/nodejs.svg' alt='node.js' />
          <img src='/assets/postqresql.svg' alt='postgresql' />
        </div>

      </div>
    </>
  )
}
