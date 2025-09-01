import { useState } from 'react';
import { LogoHeader, MobileMenu, HeaderInputSearchMobile, HamburgerButton, HeaderRightBlock, HeaderWrapper, HeaderLeftBlock, HeaderSearch, HeaderInputSearch, HeaderText } from './style'
import logoDio from "../../assets/logo-dio.png"
import HeaderButton from '../button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if(!isMenuOpen){document.getElementById("root").style.overflow = "hidden"}else{document.getElementById("root").style.overflow = "auto"}
  };


  return (
    <HeaderWrapper>
      <HeaderLeftBlock>
        <LogoHeader src={logoDio} alt='Logo Dio' title='Logo Dio'  />
        <HeaderSearch>
          <HeaderInputSearch type='text' maxLength={50} placeholder='Search our courses'/>
        </HeaderSearch>
      </HeaderLeftBlock>

      <HeaderRightBlock>
          <HeaderText>Careers</HeaderText>
          <HeaderText>Bootcamps</HeaderText>
          <HeaderText>Community</HeaderText>
          <HeaderText>Plans</HeaderText>
          <HeaderText>Enterprises</HeaderText>
          <HeaderButton text={'Login'}/>
      </HeaderRightBlock>
      <HamburgerButton onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </HamburgerButton>

      <MobileMenu isMenuOpen={isMenuOpen}>
          <HeaderButton text={'Login'}/>
          <HeaderInputSearchMobile type='text' maxLength={50} placeholder='Search our courses'/>
          <HeaderText>Careers</HeaderText>
          <HeaderText>Bootcamps</HeaderText>
          <HeaderText>Community</HeaderText>
          <HeaderText>Plans</HeaderText>
          <HeaderText>Enterprises</HeaderText>
      </MobileMenu>

    </HeaderWrapper>
  )
}
