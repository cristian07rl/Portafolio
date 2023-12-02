import 'bootstrap/dist/css/bootstrap.min.css'
import { Barra } from './components/barra'
import { useState } from 'react'
import { Caja } from './components/Caja'
function App () {
  const [index, setIndex] = useState(0)

  return (
    <>

      <header className='App-header'><Barra setIndex={setIndex} /></header>
      <main className='container d-flex justify-content-center text-start mt-5'>
        <Caja index={index} />
      </main>
      <footer />
    </>
  )
}

export default App
