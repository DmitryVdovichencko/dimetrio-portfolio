import React from "react"
import { Link } from "gatsby"
import Logo from "../light_logo.svg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
const HeaderStyle = styled.header`
  display:flex;
  flex-flow:row nowrap;
  justify-content:flex-start;
  align-items:center;
  padding:10px 0px;
  h4 {
    margin-left:10px;
    letter-spacing:0.15em;
  }

`;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderStyle>
    <img src={Logo} width='32px' height='32px'></img>
    <h4>Dmitry Vdovichenko</h4>
    </HeaderStyle>
    
    <h1>Full-stack
Node JS | React JS
developer</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
