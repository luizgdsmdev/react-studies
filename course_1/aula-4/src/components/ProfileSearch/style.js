import styled, { keyframes }  from 'styled-components';

const showImageProfile = keyframes`
    to{
        opacity: 1;
        height: 100%;
    }
`

export const ProfileSearchComponentHolder = styled.div`
    width: 100%;
    background-color: transparent;
`

export const ImageProfile = styled.img`
    width: 100%;
    max-width: 9rem;
    height: 0px;
    border-radius: 100%;
    background-color: transparent;
    background: transparent;
    opacity: 0;
    transition: height 3s ease-in-out forwards;
    animation: ${showImageProfile} 3s ease-in-out forwards;
`

export const ProfileInfoTitle = styled.h3`
    font-size: 2.5rem;
    color: rgba(153, 153, 153, 1);
    background: transparent;
`
export const ProfileInfoID = styled.h5`
    font-size: 2.5rem;
    color: rgba(153, 153, 153, 1);
    margin-bottom: 1.6rem;
    background: transparent;
`
export const ProfileInfotext = styled.p`
    font-size: 1.2rem;
    color: rgba(153, 153, 153, 1);
    background: transparent;
`

export const ProfileInfoHolder = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: transparent;
    padding: 0 1rem;
    padding-bottom: 2rem;
`

export const ProfileInfoTextHolder = styled.div`
    width: auto;
    height: auto;
    width: 100%;
    height: auto;
    background: transparent;
`

export const RepositoryHolder = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: transparent;
`

export const RepositoriesTitle = styled.h3`
    color: #ffffff;
    background: transparent;
    font-size: 1.9rem;
    padding-top: 1rem;
`
export const RepositoriesInfoHolderWrapper = styled.div`
    width: 100%;
    background: transparent;
`

export const RepositoriesInfoHolder = styled.div`
    width: auto;
    height: auto;
    padding: 1.2rem;
    border-bottom: 1px solid hsl(0deg 0% 30%);
    background: transparent;
`

export const RepositorieTitle = styled.h6`
    color: rgba(83, 155, 245, 1);
    background: transparent;
    font-size: 1.3rem;
    padding-bottom: 0.2rem
`

export const RepositorieContext = styled.p`
    color: rgba(153, 153, 153, 1);
    background: transparent;
    font-size: 1rem;
    line-height: 1.6rem;
    padding-bottom: 0.2rem;
    white-space: pre-wrap;
    word-break: break-all;
`