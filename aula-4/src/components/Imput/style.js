import {styled} from 'styled-components';

export const SearchInput = styled.input`
    width: 100%;
    max-width: 26rem;
    height: 100%;
    max-height: 1rem;
    border-radius: 6rem;
    border: 2px solid rgba(153, 153, 153, 1);
    padding: 1rem;
    font-size: 1.5rem;
    color: rgba(153, 153, 153, 1);
    background-color: transparent;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    background-color: transparent !important;
    transition: background-color 50000s ease-in-out 0s;
    -webkit-text-fill-color: rgba(153, 153, 153, 1) !important;
    font-size: 1.5rem !important;
    }
`