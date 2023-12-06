export const Barra = ({ setIndex }) => {
  const handleclick = (arg) => {
    setIndex(arg)
  }
  return (
    <div className='barra'>
      <a onClick={() => handleclick(0)}>Home</a>
      <a onClick={() => handleclick(1)}>Habilidades</a>
      <a onClick={() => handleclick(2)}>Proyectos</a>
    </div>
  )
}
