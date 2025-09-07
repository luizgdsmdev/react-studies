import {styled} from 'styled-components';

export const MainContentWrapper = styled.section`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    overflow-y: auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    background: transparent;
`

export const MainContentSearchHeader = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background: transparent;
`

export const SearchProfile = styled.section`
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
    background: transparent;
    padding-bottom: 9rem
`

export const SearchProfileText = styled.section`
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
    background: transparent;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(45, 51, 59, 1) transparent;

    ::-webkit-scrollbar-track {
      background: transparent;
    }
`