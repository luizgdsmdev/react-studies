  import styled, { keyframes } from 'styled-components';

const menuMobileShowEffect = keyframes`
    to {
        transform: translateY(0rem);
        backdrop-filter: blur(10px);
    }
`;

export const HeaderWrapper = styled.header`
    width: 100dvw;
    height: 6rem;
    background-color: rgba(14, 14, 14, 1);
    padding: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
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

    @media (max-width: 1024px) {
        display: none; /* Hide on desktop */
    }

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

    @media (max-width: 480px) {
        display: none;
    }
`;

export const HeaderInputSearchMobile = styled.input`
    height: 1.6rem;
    font-size: 1.06rem;
    text-align: -webkit-center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.7rem;
    border: none;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(50, 43, 75, 1) ;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    background-color: transparent !important;
    transition: background-color 50000s ease-in-out 0s;
    -webkit-text-fill-color: rgba(21, 37, 16, 1) !important;
    font-size: 1.5rem !important;
    }
    display: none;

    @media (max-width: 480px) {
        display: block;
        padding-top: 0.5rem;
        margin-top: 1rem;
    }
`;

export const HeaderText = styled.p`
    padding: 0.8rem 0.9rem;
    border-radius: 0.5rem;
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: width 2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

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

    @media (max-width: 1025px) {
        text-align: -webkit-center;
        text-align: center;
    }
`;

export const MobileMenu = styled.nav`
  display: ${props => (props.$isMenuOpen ? 'flex' : 'none')};
  overflow: ${props => (props.$isMenuOpen ? 'auto' : 'hidden')};
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 60px; /* Adjust based on header height */
  left: 0;
  right: 0;
  background-color: #000000cd;
  padding: 1.5rem;
  padding-top: 3rem;
  transition: height 2s ease-in-out;
  backdrop-filter: blur(0px);
  z-index: 99;
  transform: ${props => (props.$isMenuOpen ? 'translateY(150rem)' : '')};
  animation: ${menuMobileShowEffect} 0.6s ease-out forwards;
  gap: 2.3rem;

  @media (max-width: 1025px) {
    margin-top: 2rem;
    height: 100%;
    place-items: center;
    isplay: ${props => (props.$isMenuOpen ? 'flex' : 'none')};
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: 2s ease-in-out;

  @media (max-width: 1024px) {
    display: block;
    font-size: 2.3rem;
    color: #b4a1fb;
  }
`;
