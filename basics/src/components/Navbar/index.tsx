import * as C from './style' 
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <C.Nav>
        <a href="https://vitejs.dev/" target='blank'> <img src="vite.svg" alt="Logo do Vitejs.dev" /></a>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/whatis">What is</Link></li>
            <li><Link to="/create">Create Vite</Link></li>
         </ul> 
    </C.Nav>
  )
}
