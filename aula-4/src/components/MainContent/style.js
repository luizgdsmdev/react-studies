import {styled} from 'styled-components';

export const MainContentWrapper = styled.section`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    overflow-y: auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`

export const MainContentSearchHeader = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
`