import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100dvw;
    height: 4rem;
    background-color: rgba(14, 14, 14, 1);
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const LogoHeader = styled.img`
`;

export const HeaderLeftBlock = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const HeaderRightBlock = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const HeaderSearch = styled.div`

`;

export const HeaderInputSearch = styled.input`
    height: 1.6rem;
    font-size: 1.06rem;
    text-align: -webkit-center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.7rem;
    border: none;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(30, 26, 45, 1);
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    background-color: transparent !important;
    transition: background-color 50000s ease-in-out 0s;
    -webkit-text-fill-color: rgba(30, 26, 45, 1) !important;
    font-size: 1.5rem !important;
    }
`;

export const HeaderText = styled.p`
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: width 2s easy-in-out;

    &::after{
        content:"";
        border-radius: 0.5rem;
        position: absolute;
        z-index: -1;
        width: 0%;
        height: 0%;
        bottom: 0;
        left: 0;
    }

    &:hover::after{
        background-color: rgba(43, 38, 63, 1);
        transition: width 0.3s ease-in-out;
        width: 100%;
        height: 100%;
    }
`;
