import React from 'react'
import Header from '../../components/header'
import { BannerHome, BannerHomeButton, BannerHomeTitle, BannerHomeTextWrapper, BannerHomeDescription } from './styles'

export default function Home() {
  return (
      <>
      <Header/>
      <BannerHome>
        <BannerHomeTextWrapper>
          <BannerHomeTitle>Master the technologies used by the world's most innovative companies</BannerHomeTitle>
          <BannerHomeDescription>+1,750 courses, bootcamps, projects and training in back-end, front-end, mobile, gaming, data, artificial intelligence and cloud careers to elevate your professional level and gain opportunities at the most sought-after companies in the world</BannerHomeDescription>
          <BannerHomeButton>Start Now</BannerHomeButton>
        </BannerHomeTextWrapper>
      </BannerHome>
      </>
  )
}
