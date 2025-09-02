import styled, { keyframes } from 'styled-components';

const HomeTechnologiesTagsLIMotion = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;


export const BannerHome = styled.div`
    background: linear-gradient(
15deg, rgb(0, 0, 0) 55.8%, rgba(0, 0, 0, 0) 90.54%) center center / cover no-repeat, url(https://assets.dio.me/hIcFo_nvb9KczxKQRbZ8-CunoAnkyRHBCN0WfDTJ0M8/f:webp/q:80/L3B1YmxpYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaGVhZGVyL2Jhbm5lci1wbGF5LnBuZw);
    background-position: center center;
    padding: 6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    user-select: none;

    @media (max-width: 680px){
        padding: 5rem 2rem;
    }
`;

export const BannerHomeTextWrapper = styled.div`
    max-width: 52rem;
    line-height: 1.6rem;

    @media (max-width: 680px){
        width: 100%
    }
`;

export const BannerHomeTitle = styled.h3`
    font-size: 2.8rem;
    padding-bottom: 2rem;
    line-height: 3rem;
`;

export const BannerHomeDescription = styled.p`
    font-size: 1.125rem;
    padding-bottom: 2.5rem;
    line-height: 1.8rem;
`;

export const BannerHomeButton = styled.button`
    border-radius: 8px;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid rgb(127, 40, 181);
    background: rgb(127, 40, 181);
    color: rgb(255, 255, 255);
    text-decoration: none;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 5px 6px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background: rgba(142, 61, 193, 1);
        scale: 1.05;
    }
`;

export const HomeTechnologiesSection = styled.div`
    width: 100%;
    background-color: #ffffff;
    min-height: 300px;
    padding: 6rem;
    box-sizing: border-box;
    user-select: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 680px){
        padding: 5rem 2rem;
    }
`;

export const HomeTechnologiesTitle = styled.h4`
    font-size: 2.3rem;
    padding-bottom: 2rem;
    line-height: 3rem;
    user-select: none;
    color: #000000;
`;

export const HomeTechnologiesText = styled.p`
    font-size: 1.125rem;
    padding-bottom: 2.5rem;
    line-height: 1.8rem;
    user-select: none;
    color: #000000;
`;

export const HomeTechnologiesTagsUL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: stretch;
    gap: 0.9rem;
    max-width: 76rem;
`;

export const HomeTechnologiesTagsLI = styled.li`
    color: #000000;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 1.25rem;
    padding: 0.5rem 0.8rem;
    cursor: pointer;

    &:hover{
        scale: 1.03;
        animation: ${HomeTechnologiesTagsLIMotion} 2s linear infinite;
    }
`;

export const HomeTechnologiesTagsLIImg = styled.img`
    width: 1.3rem;
`;


export const HomeTechnologiesTags = styled.p`
    font-size: 1.125rem;
    padding-bottom: 2.5rem;
    line-height: 1.8rem;
    user-select: none;
    color: #000000;
`;

