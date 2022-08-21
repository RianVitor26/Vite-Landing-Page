import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;    

    @media only screen and (max-width: 769px){
        flex-direction: column-reverse;
    }

    img{
        width: 30%;
        min-width: 200px;
        filter: drop-shadow(20px 5px 15px var(--Contrast-color));
        margin-bottom: 5vh;
    }
`
export const TextContainer = styled.div`
    width: 50%;
    height: 50%;
    display: flex;  
    flex-direction: column;

    @media only screen and (max-width: 769px){
        justify-content: center;
        align-items: center;
        width: 80%;
    }
`
export const ToolName = styled.h1`
    color: var(--Contrast-color);
    font-size: clamp(28px, 4vw, 100px);
`
export const TextInnovation = styled.h2`
    font-size: clamp(28px, 4vw, 100px);
`
export const TextInvite = styled.p`
    color: var(--CLear-text);
    font-size: clamp(15px, 2.5vw, 80px);
`