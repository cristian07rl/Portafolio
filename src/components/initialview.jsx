function Initial () {
  return (
    <>
      <div className='introduccion'>
        <div>
          <h1>Cristian Rodriguez Leguia</h1>
          <p>Ingeniero mecatronico apasionado por la programacion y el desarrollo web</p>
          <div className='d-flex flex-wrap gap-3'>
            <a href='https://github.com/cristian07rl'><i className='fa-brands fa-github' /> Github</a>
            <a href='https://www.linkedin.com/in/cristianrodriguezleguia/'><i className='fa-brands fa-linkedin' /> Linkedin</a>
            <a href='public/cristian rodriguez.pdf' download='CristianRodriguezCV'><i class='fa-solid fa-download' /> Descargar cv</a>
          </div>

        </div>
        <img src='src\assets\foto.jpg' alt='soy yo' width={220} height={240} />
      </div>
    </>
  )
}

export default Initial
