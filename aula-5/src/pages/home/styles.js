import styled from "styled-components";

export const BannerHome = styled.div`
    background: linear-gradient(99.06deg, rgb(0, 0, 0) 55.8%, rgba(0, 0, 0, 0) 90.54%) center center / cover no-repeat, url(https://assets.dio.me/hIcFo_nvb9KczxKQRbZ8-CunoAnkyRHBCN0WfDTJ0M8/f:webp/q:80/L3B1YmxpYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaGVhZGVyL2Jhbm5lci1wbGF5LnBuZw);
    background-position: center center;
    padding: 6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 680px){
        padding: 5rem 2rem;
    }
`;

export const BannerHomeTextWrapper = styled.div`
    max-width: 52rem;

    @media (max-width: 680px){
        width: 100%
    }
`;

export const BannerHomeTitle = styled.h3`
    font-size: 2.8rem;
    padding-bottom: 2rem;
`;

export const BannerHomeDescription = styled.p`
    font-size: 1.125rem;
    padding-bottom: 2.5rem;
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