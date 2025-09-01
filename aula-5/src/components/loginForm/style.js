import styled, { keyframes } from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    padding: 1.5rem;
    padding-top: 3.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: space-evenly;

    @media (max-width: 799px) {
        flex-direction: column-reverse;
        align-content: center;
        align-items: center;
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 25rem;
    height: auto;
    background-color: white;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media (max-width: 480px) {
        max-width: 19rem;
    }

    @media (max-width: 375px) {
        max-width: 15rem;
    }

    @media (max-width: 320px) {
        max-width: 11rem;
    }
`;

export const FormTitle = styled.h5`
    font-size: 1.5rem;
    font-weight: bold;
    color: #7f28b5;
    margin: 0;
    margin-bottom: 1rem;
`;

export const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #7f28b5;
    width: 100%;
    max-width: 20rem;
    margin-bottom: 0.6rem;

    svg{
        margin-right: 0.5rem;
        color: rgb(134, 71, 173);
    }
`;

export const FormInput = styled.input`
    font-size: 1rem;
    padding: 0.6rem 0.5rem;
    border: none;
    outline: none;
    width: 100%;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    background-color: transparent !important;
    transition: background-color 50000s ease-in-out 0s;
    -webkit-text-fill-color: #7f28b5;!important;
    font-size: 1.5rem !important;
    }
`;


export const FormButton = styled.button`
    width: 100%;
    max-width: 20rem;
    background-color: #7f28b5;
    padding: 0.75rem 0;
    border: none;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.825rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        scale: 1.02;
    }
`;

export const FormtextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media (max-width: 320px) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        gap: 1.2rem;
    }
`;


export const Formtext = styled.p`
    color: #000000;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.825rem;

    &:hover{
        text-decoration: underline;
    }
`;

export const LoginDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: flex-start;
    max-width: 36rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media (max-width: 1056px) {
        max-width: 25rem;
    }
    @media (max-width: 1024px) {
        max-width: 20rem;
    }

    @media (max-width: 799px) {
        padding-top: 1.5rem;
        max-width: 100%;
    }
`;

export const LoginDescriptionTitle = styled.h4`
    font-size: 2rem;
    padding-bottom: 2.2rem;
`;

export const LoginDescriptionUlImage = styled.img`
    width: 1rem;
    margin-right: 0.5rem;
`;

export const LoginDescriptionUl = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
    line-height: 1.6rem;
`;

export const LoginDescriptionLi = styled.li`
`;

export const ImageCompaniesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding: 1.5rem;
    max-width: 90%
`;

export const ImageCompanies = styled.img`
    width: 5.9rem;
`;

