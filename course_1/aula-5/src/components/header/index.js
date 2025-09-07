import { useState, useEffect } from 'react';
import { LogoHeader, MobileMenu, HeaderInputSearchMobile, HamburgerButton, HeaderRightBlock, HeaderWrapper, HeaderLeftBlock, HeaderSearch, HeaderInputSearch, HeaderText } from './style'
import logoDio from "../../assets/logo-dio.png"
import HeaderButton from '../button'
import { Link } from "react-router";

export default function Header({ButtonLogin}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Control body overflow when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isMenuOpen]);


  return (
    <HeaderWrapper>
      <HeaderLeftBlock>
        <Link to="/"><LogoHeader src={logoDio} alt='Logo Dio' title='Logo Dio' /></Link>
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
          <Link to="/login"><HeaderButton text={ButtonLogin}/></Link>
      </HeaderRightBlock>
      <HamburgerButton onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </HamburgerButton>

      <MobileMenu $isMenuOpen={isMenuOpen}>
          <Link to="/login"><HeaderButton text={'Login'}/></Link>
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
