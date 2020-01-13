import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import StyledHero from "../components/StyledHero";
import SEO from "../components/SEO"
import { graphql } from "gatsby";

export default ({ data: { homeBg } }) => (
  <Layout>
  <SEO title="Home"/>
    <StyledHero home='true' img={homeBg.childImageSharp.fluid}>
      <Banner
        title='KeSpice App'
        info='KeSpice is an amazing product design to help people save time at restaurants.'>
        <AniLink to='#' className='btn-white'>
          Download App
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
);

export const queryHomeBg = graphql`
  {
    homeBg: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
