import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getMetaSiteData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const {site: {siteMetadata}} = useStaticQuery(getMetaSiteData)

  const {siteTitle, siteDesc, author, siteUrl} = siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name='description' content={description || siteDesc} />
      <meta name='siteLink' content={siteUrl} />
    </Helmet>
  );
};

export default SEO;
