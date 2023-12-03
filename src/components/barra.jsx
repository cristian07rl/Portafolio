export const Barra = ({ setIndex }) => {
  const handleclick = (arg) => {
    setIndex(arg)
  }
  return (
    <div className='barra'>
      <a onClick={() => handleclick(0)}>home</a>
      <a onClick={() => handleclick(1)}>sobre mi</a>
      <a onClick={() => handleclick(2)}>habilidades</a>
      <a onClick={() => handleclick(3)}>proyectos</a>
    </div>
  )
}
