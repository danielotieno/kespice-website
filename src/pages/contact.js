import React from "react";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";
import Contact from "../components/Contact/Contact";

const contact = ({ data: { contactBg } }) => {
  return (
    <Layout>
      <StyledHero img={contactBg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
};

export const queryContactBg = graphql`
  {
    contactBg: file(relativePath: { eq: "connect.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default contact;
