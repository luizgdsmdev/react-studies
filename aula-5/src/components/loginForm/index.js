import React from 'react'
import { Form, FormTitle, LoginDescriptionUl, ImageCompaniesWrapper, ImageCompanies, LoginDescriptionUlImage, LoginDescriptionLi, LoginDescriptionWrapper, LoginDescriptionTitle, FormWrapper, FormtextWrapper, FormInputWrapper, FormInput, FormButton, Formtext } from './style'
import imgCheckList from "../../assets/check.png"

export default function LoginForm() {
  return (
    <>
    <FormWrapper>
        <LoginDescriptionWrapper>
            <LoginDescriptionTitle>Master the technologies used by the most innovative companies</LoginDescriptionTitle>
            <LoginDescriptionUl>
                <LoginDescriptionLi><LoginDescriptionUlImage src={imgCheckList} /> +1,750 courses, bootcamps, projects and training in back-end, front-end, mobile, games, data, artificial intelligence & cloud careers;</LoginDescriptionLi>
                <LoginDescriptionLi><LoginDescriptionUlImage src={imgCheckList} /> Earn certificates recognized by major technology companies in Java, Python, .NET, C#, JavaScript, Node.js, React, Angular, SQL, AWS, Azure, GCP, MongoDB, Kotlin, Swift, and more than 500 technologies;</LoginDescriptionLi>
                <LoginDescriptionLi><LoginDescriptionUlImage src={imgCheckList} /> +10,000 people hired by large companies in Brazil and abroad.</LoginDescriptionLi>
            </LoginDescriptionUl>
            
        </LoginDescriptionWrapper>
        <Form>
            <FormTitle>Already registered?</FormTitle>
            <FormInputWrapper>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
                <FormInput type='email' placeholder='E-mail' name='email'/>
            </FormInputWrapper>
            <FormInputWrapper>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"></path>
                    </g>
                </svg>
                <FormInput type='password' placeholder='Password' name='password'/>
            </FormInputWrapper>
            <FormButton onClick={(e) => e.preventDefault()}>Login</FormButton>

            <FormtextWrapper>
                <Formtext>Forgot my password</Formtext>
                <Formtext>Create account</Formtext>
            </FormtextWrapper>
        </Form>
    </FormWrapper>
        <ImageCompaniesWrapper>
        <ImageCompanies src="https://hermes.dio.me/companies/85e2dba0-4153-4a62-8dc5-69da53a547c1.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/46a193aa-2c75-40a3-bf53-988fd1598190.png" />
        <ImageCompanies src="https://hermes.dio.me/files/assets/86bd44aa-892b-4fea-a893-13b8018606ce.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/375e9418-3ac2-4959-8e82-74c80941d0b8.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/79e25d56-1bc9-49bc-b0ec-f5b68f84cccc.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/cf7896e2-36d9-4a2a-bc7b-82c99eb329a0.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/157e6725-2ae4-498d-bd75-2d380e5bf180.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/d93fab6f-17b5-49f4-8521-b390afbf74c3.png" />
        <ImageCompanies src="https://hermes.dio.me/files/assets/92a1e107-8566-4e2a-9624-7d1573bd5c17.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/4183deb5-3ba4-45ef-a7d2-3a05ace67795.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/449dbdbc-542e-4205-802d-3bab397d1c1c.png" />
        <ImageCompanies src="https://hermes.dio.me/companies/b75131f7-af8a-4657-88c4-232566d1afeb.png" />
    </ImageCompaniesWrapper>
    </>
  )
}
