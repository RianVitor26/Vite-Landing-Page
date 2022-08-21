import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--Clear-text)
}

:root{
    --Body-background: 	#fafafa;
    --Navbar-background: #eceff1;
    --Clear-text: #213547;
    --Contrast-color: #646CFF;
}

body{
    background-color: var(--Body-background);
    font-family: 'Poppins', Verdana, sans-serif;
}

img{
    user-select: none;
}
   
`
