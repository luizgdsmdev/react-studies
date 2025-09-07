import React from 'react'
import Header from '../../components/header'
import { BannerHome, HomeTechnologiesTitle, HomeTechnologiesTagsLIImg, HomeTechnologiesTagsLI, HomeTechnologiesTagsUL, HomeTechnologiesText, HomeTechnologiesSection, BannerHomeButton, BannerHomeTitle, BannerHomeTextWrapper, BannerHomeDescription } from './styles'
import { Link } from "react-router";

export default function Home() {
  return (
      <>
      <Header ButtonLogin="login"/>
      <BannerHome>
        <BannerHomeTextWrapper>
          <BannerHomeTitle>Master the technologies used by the world's most innovative companies</BannerHomeTitle>
          <BannerHomeDescription>+1,750 courses, bootcamps, projects and training in back-end, front-end, mobile, gaming, data, artificial intelligence and cloud careers to elevate your professional level and gain opportunities at the most sought-after companies in the world</BannerHomeDescription>
          <Link to="/login"><BannerHomeButton>Start Now</BannerHomeButton></Link>
        </BannerHomeTextWrapper>
      </BannerHome>

      <HomeTechnologiesSection>
        <HomeTechnologiesTitle>Explore by technologies</HomeTechnologiesTitle>
        <HomeTechnologiesText>Learn the technologies most in-demand by recruiters around the world.</HomeTechnologiesText>
        <HomeTechnologiesTagsUL>
          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/ed165615-733b-44fa-b2ca-948e66c5cfca.svg' />
            Flutter
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/d7fe9c88-01ed-4fb5-a4f1-1646b18c5c34.svg' />
            Android
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src=' https://hermes.dio.me/files/assets/14a43a7c-a92e-4dbf-9abe-bc4a60b39cc5.svg' />
            Metaverso
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/18923203-fa40-46e3-abea-a4bb24278cf7.svg' />
            .NET
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/741004b0-afc0-44ee-9e65-45995e849a03.svg' />
            Angular
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/b420c1c4-edcc-456b-97ae-36762d03b39e.svg' />
            Golang
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/a934cf9a-68bb-41e4-8793-8f27162fe274.svg' />
            Python
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/68731b31-4fe3-4ab6-b16c-69be9fdab7a2.svg' />
            Kotlin
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/0fe04423-02af-4b7f-97d2-ccb25130d824.svg' />
            Artificial intelligence
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/3b480c00-0a80-4362-bc3c-4b411fcd6ffc.svg' />
            C & C++
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/db657d03-8e13-491e-8b2b-141ae5c567b0.svg' />
            Chat GPT
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/959cc5eb-c9f5-40f1-aa19-a81f94f3bd25.svg' />
            AWS Cloud
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/919c938e-2f0e-4ef1-87e3-37ef87a7d4c9.svg' />
            CRM Dynamics
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/94199d6a-adb7-40fc-af67-1e536519da69.svg' />
            CSS
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/c0df1790-de82-4920-bc3a-2465536a5c03.svg' />
            Microsoft Azure
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/e0ef5b9c-f7a7-48d1-a91f-a1fbbfa0bed5.svg' />
            Blockchain
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/aa7fd4ea-3b6d-441e-895d-49566a16f24b.svg' />
            Unity 3D
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/9cdfa2e3-60ea-4457-82de-06e0dc72ee90.svg' />
            Docker
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/a8e2a2df-ea81-4c21-b1ca-ce823d0fed0c.svg' />
            Google Cloud Platform (GCP)
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/ba09e3ad-4e95-481a-a0b4-b384ba8c1819.svg' />
            Swift
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/f0024eea-a0b6-49a4-a21d-eb2ac366f30f.svg' />
            SQL
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/18923203-fa40-46e3-abea-a4bb24278cf7.svg' />
            GIT CI/CD
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/37e86fad-b562-4653-beed-84f52bcee90d.svg' />
            Spring
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/8d1571c5-514c-44b5-8d4d-c186655a2b63.svg' />
            Java
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/6bd4e028-7695-487d-ac25-e973be1c9f9d.svg' />
            HTML
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/b7ffa0e5-341e-4c7d-9d23-8b44b83a6314.svg' />
            Ruby
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/e4f4dfaf-3701-4cb5-b33e-bcd5e9936d44.svg' />
            Javascript
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/917f2a53-c932-45d4-b51c-8cad47c4dd01.svg' />
            IoT
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/92821f90-d308-45fc-89df-ff6621432b1d.svg' />
            Kubernetes
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/2c4262f6-d0ea-4587-992a-c4a716be429f.svg' />
            Roblox Programming
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/8ecb236c-2293-49f7-82cf-ae02e1afcbbf.svg' />
            Linux
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/b1352caf-ec3d-421d-ba81-a7f87f96ab11.svg' />
            LUA
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/43e349e3-445b-458c-9bf4-275f5dc3d673.svg' />
            Machine Learning
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/db3421f2-a10d-4002-9624-6d5a3eadd2f6.svg' />
            PHP
          </HomeTechnologiesTagsLI>

          <HomeTechnologiesTagsLI>
            <HomeTechnologiesTagsLIImg src='https://hermes.dio.me/files/assets/8d8c1877-47ed-47e4-b519-8406507151e6.svg' />
            React
          </HomeTechnologiesTagsLI>
        </HomeTechnologiesTagsUL>
      </HomeTechnologiesSection>
      </>
  )
}
