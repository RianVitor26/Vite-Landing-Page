import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: clamp(12px, 1.5vw, 45px);
    background-color: var(--Navbar-background);
   
    span{
        color: var(--Clear-text);
        margin-left: 2vw;
    }

    ul{
        display: flex;
        align-items: center;

        li{
            color: #e6e6e6;
            list-style-type: none;
            margin-right: 2vw;

            a{
                text-decoration: none;

                :hover{
                    color: white;
                }
            }
        }
    }
`