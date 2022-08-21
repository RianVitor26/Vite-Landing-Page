import * as C from './style' 

export const Navbar = () => {
  return (
    <C.Nav>
        <a href="https://vitejs.dev/" target='blank'> <img src="../../../public/vite.svg" alt="Logo do Vitejs.dev" /></a>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/whatis">What is</a></li>
            <li><a href="/create">Create Vite</a></li>
         </ul> 
    </C.Nav>
  )
}
