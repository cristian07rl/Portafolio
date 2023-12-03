import { Aboutme } from './sobremi'
import { Habilidades } from './habilidades'
import { Proyectos } from './proyectos'
import { Boxanimated } from './boxanimated'
import Initial from '../components/initialview'

export const Caja = ({ index }) => {
  if (index === 0) {
    return (
      <Boxanimated content={<Initial />} />
    )
  }

  if (index === 1) {
    return (
      <Boxanimated content={<Aboutme />} />
    )
  }
  if (index === 2) {
    return (
      <Boxanimated content={<Habilidades />} />

    )
  }
  if (index === 3) {
    return (
      <Boxanimated content={<Proyectos />} />

    )
  }
}
