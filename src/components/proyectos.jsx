export const Proyectos = () => {
  return (
    <>
      <div className='project'>
        <div className='project-description'>
          <h3>PROYECTOS</h3>
        </div>
        <div>
          <h3>tecnologias usadas</h3>
        </div>

        <div className='project-description'>
          <h5>Edusaludapp</h5>
          <p>
            Edusaludapp es una página web diseñada para que los padres de familia puedan acceder a los informes proporcionados
            profesionales de la salud y la educación en relación a sus casos particulares.
            La plataforma está desarrollada utilizando HTML, PHP y JavaScript.
          </p>
        </div>

        <div className='project-technologies'>
          <img src='src/assets/php.svg' alt='php Logo' />
          <img src='src/assets/mysql.svg' alt='mysql Logo' />
        </div>

        <div className='project-description'>
          <h5>DashboardSolar</h5>
          <p>Es un poryecto personal para monitorizar los datos de produccion los datos de produccion y consumo
            de una instalacion solar. los datos se recopilan usando un esp8266 y enviados a la una base de datos PostgreSQL.
          </p>
          <a href='https://github.com/cristian07rl/DashboarSolar/' target='__blank'><i className='fa-brands fa-github' /> DashboarSolar</a>
        </div>

        <div className='project-technologies'>
          <img src='src/assets/nodejs.svg' alt='node.js' />
          <img src='src/assets/postqresql.svg' alt='postgresql' />
        </div>

        <div className='project-description'>
          <h5>Coopworker</h5>
          <p>Aplicacion web echa con Next.js para gestion interna de una cooperativa de trabajo asociado. Enfocada principalmente a menejar la informacion
            de los asociados (registro, actualizacion, busqueda, etc) usando mongoDB como base de datos.
          </p>
        </div>

        <div className='project-technologies'>
          <img src='src/assets/nextjs.svg' alt='next.js Logo' />
          <img src='src/assets/react.svg' alt='react Logo' />
          <img src='src/assets/mongoDB.svg' alt='mongodb Logo' />
          <img src='src/assets/nodejs.svg' alt='node.js Logo' />
        </div>
      </div>
    </>
  )
}
