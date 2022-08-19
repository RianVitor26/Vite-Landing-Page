import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--Clear-text)
}

:root{
    --Body-background: 	#252526;
    --Navbar-background: #1e1e1e;
    --Clear-text: #D3D3D3;
    --Contrast-color: #007acc;
}

body{
    background-color: var(--Body-background)
}
   
`
