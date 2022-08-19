import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../public/Wall-E.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h1{
        color: var(--Contrast-color);
        font-weight: bold;
        font-size: clamp(18px, 4vw, 70px);
    }

    p{
        color: var(--Clear-text);
        font-size: clamp(14px, 2vw, 40px);
    }

`