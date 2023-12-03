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
            <a href='public/cristian rodriguez.pdf' download='CristianRodriguezCV'><i className='fa-solid fa-download' /> Descargar cv</a>
          </div>

        </div>
        <img src='src\assets\foto.jpg' alt='soy yo' width={220} height={240} />
      </div>
      <h2>Contacto</h2>
      <p>¡Estoy emocionado de escucharte! Puedes contactarme a través de los siguientes medios:</p>
      <p><strong>Email:</strong> cristian07rl@hotmail.com</p>
      <p><strong>Telefono:</strong> +57 3126384666</p>

    </>
  )
}

export default Initial
