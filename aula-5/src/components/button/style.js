import styled from "styled-components";


export const AuthButton = styled.button`
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 0.8rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 1s easy-in-out;
    font-size: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    max-width: 10rem;

    &:hover{
        background-color: rgba(48, 33, 61, 1);
        border: 1px solid rgba(48, 33, 61, 1);
        transition: background-color 1s easy-in-out;
    }
`;