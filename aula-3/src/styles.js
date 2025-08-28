import styled, { keyframes }  from 'styled-components';
const smothAppear = keyframes`
    to {
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    border: 1px solid #605220;
    height: 100%;
    max-height: 800px;
    border-radius: 1rem;
    overflow: hidden;
`

export const Visor = styled.div`
    width: 100%;
    height: 100%;
    max-height: 140px;
    border-bottom: 1px solid #605220;
    overflow: hidden;
    justify-items: right;
    bottom: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: flex-start;
    flex-wrap: nowrap;
    user-select: none;
`

export const VisorContent = styled.div`
    font-size: 5.4rem;
    width: 100%;
    height: 100%;
    max-height: 113px;
    justify-items: right;
    padding: 0rem 1.5rem;
    overflow-x: overlay;
    transition: 0.3s easy-in-out;
    opacity: 0;
    color: #ffffff;
    user-select: none;
    animation: ${smothAppear} 1.6s linear forwards;
`

export const ButtonWrapper = styled.div`
    display: flex; 
    flex-direction: row; 
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
` 

export const NumbersButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    max-width: 25rem;
`

export const OptionsButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    max-width: 8.1rem;
`
