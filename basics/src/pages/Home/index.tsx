import * as C from './style'
import { Navbar } from '../../components/Navbar'
import { Header } from '../../components/Header'

export const Home = () => {
  return (
    <C.Container>
      <Navbar />
      <Header />
    </C.Container>
  )
}
