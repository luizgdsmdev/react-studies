import React from 'react'
import { LogoHeader, HeaderRightBlock, HeaderWrapper, HeaderLeftBlock, HeaderSearch, HeaderInputSearch, HeaderText } from './style'
import logoDio from "../../assets/logo-dio.png"

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeftBlock>
        <LogoHeader src={logoDio} alt='Logo Dio' title='Logo Dio'  />
        <HeaderSearch>
          <HeaderInputSearch type='text' maxLength={50} placeholder='Search our courses'/>
        </HeaderSearch>
        <HeaderText>Live Coding</HeaderText>
        <HeaderText>Global</HeaderText>
      </HeaderLeftBlock>

      <HeaderRightBlock>
          <HeaderText>Careers</HeaderText>
          <HeaderText>Bootcamps</HeaderText>
          <HeaderText>Projects</HeaderText>
          <HeaderText>Community</HeaderText>
          <HeaderText>Plans</HeaderText>
          <HeaderText>Enterprises</HeaderText>
      </HeaderRightBlock>

    </HeaderWrapper>
  )
}
