import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import { BannerHome, HomeTechnologiesTitle, HomeTechnologiesTagsLIImg, HomeTechnologiesTagsLI, HomeTechnologiesTagsUL, HomeTechnologiesText, HomeTechnologiesSection, BannerHomeButton, BannerHomeTitle, BannerHomeTextWrapper, BannerHomeDescription } from '../home/styles'



export default function ProfilePage() {
  const location = useLocation();
  const user = location.state?.user;

  return (

    <>
    <Header ButtonLogin='Leave'/>
    <BannerHome>
      <BannerHomeTextWrapper>
        <BannerHomeTitle>This simulation ends here!</BannerHomeTitle>
        <BannerHomeDescription>+1,750 courses, bootcamps, projects and training in back-end, front-end, mobile, gaming, data, artificial intelligence and cloud careers to elevate your professional level and gain opportunities at the most sought-after companies in the world</BannerHomeDescription>
      </BannerHomeTextWrapper>
    </BannerHome>
    
    </>
  );
}