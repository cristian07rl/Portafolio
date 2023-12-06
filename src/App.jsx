import 'bootstrap/dist/css/bootstrap.min.css'
import { Barra } from './components/barra'
import { useState } from 'react'
import { Habilidades } from './components/habilidades'
import { Proyectos } from './components/proyectos'
import { Boxanimated } from './components/boxanimated'
import Initial from './components/initialview'
function App () {
  const [index, setIndex] = useState(0)
  const pages = [<Boxanimated key={0} content={<Initial />} />,
    <Boxanimated key={1} content={<Habilidades />} />,
    <Boxanimated key={2} content={<Proyectos />} />]
  return (
    <>

      <header className='App-header'><Barra setIndex={setIndex} /></header>
      <main>
        {pages[index]}
      </main>

    </>
  )
}

export default App
