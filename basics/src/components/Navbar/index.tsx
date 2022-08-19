import * as C from './style' 

export const Navbar = () => {
  return (
    <C.Nav>
        <span>Logo</span>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cadastro">Cadastro</a></li>
            <li><a href="/produtos">Produtos</a></li>
         </ul> 
    </C.Nav>
  )
}
