import styled, { keyframes } from 'styled-components';

const showTextSearchButton = keyframes`
    to{
        color: rgba(153, 153, 153, 1);
    }
`


export const SearchButton = styled.div`
    background-color: rgba(45, 51, 59, 1);
    border: 2px solid rgba(153, 153, 153, 1);
    width: 100%;
    max-width: 13rem;
    padding: 0.8rem 0.2rem;
    border-radius: 6rem;
    color: rgba(153, 153, 153, 1);
    font-size: 1.2rem;
    cursor: pointer;
    text-align: -webkit-center;
    text-align: center;
    position: relative;
    transition: 0.3s ease-in-out;
    z-index: 1;

    &:hover {
        scale: 1.03;
        color: transparent;
    }

    &:hover::before {
        content: "";
        color: transparent;
    }

    &::after {
        content: "Go GitFinder";
        color: transparent;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: rgba(29, 33, 40, 1);
        transition: width 0.3s ease-in-out;
        z-index: -1;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
    }

    &:hover::after {
        width: 100%;
        animation: fill 0.3s ease-in-out forwards;
        animation: ${showTextSearchButton} 0.6s ease-in-out forwards;
        z-index: -1;
    }
`