export const Proyectos = () => {
  return (
    <>
      <div className='project'>
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

        <div className='project-description'>
          <h4>Asomucoco</h4>
          <p>
            SPA pequeña para una asociacion de mujeres rurales sin animo de lucro, creado con el fin de cumplir con las normativas de la Dian.
            la pagina esta echa usando <strong>React</strong>.
          </p>
          <div>
            <a href='https://asomucoco.org/' target='_blank' rel='noreferrer'><i className='fa-solid fa-link' /> Asomucoco.org</a>
            <a href='https://github.com/cristian07rl/Webasosiacion' target='_blank' rel='noreferrer'><i className='fa-brands fa-github' /> Asomucoco</a>
          </div>
        </div>

        <div className='project-technologies'>
          <img src='/assets/react.svg' alt='react Logo' />
          <img src='/assets/jsSvg.svg' alt='js Logo' />
        </div>
      </div>
    </>
  )
}
