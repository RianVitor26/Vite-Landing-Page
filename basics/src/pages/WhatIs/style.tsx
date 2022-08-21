import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media only screen and (max-width: 769px){
        flex-direction: column;
    }
`
export const ContainerImage = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 80%;
        height: 80%;
        @media only screen and (max-width: 321px){
        display: none;
    }
    }
`
export const ContainerTexts = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, h2{
        color: var(--Clear-text);
        font-size: clamp(16px, 3vw, 100px);

        span{
            color: #ffc517
        }
    }
    p{
        color: var(--Clear-text);
        font-size: clamp(14px, 1.5vw, 50px);
        line-height: 4vh;
    }
`