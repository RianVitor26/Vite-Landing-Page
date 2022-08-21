import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: clamp(12px, 1.6vw, 45px);
    background-color: var(--Navbar-background);

    ul{
        display: flex;
        align-items: center;
    }

    li{
        list-style-type: none;
        margin-right: 3vw;
    }

    a{
        text-decoration: none;
        margin-left: 2vw;
        color: var(--Clear-text);
        :hover{
                color: var(--Contrast-color);
            }

        img{
            width: 3vw;
            min-width: 30px;
        }

            
    }
`