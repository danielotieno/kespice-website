import React from "react";
import Title from "../Title";
import styles from "../../css/about.module.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const queryAboutImg = graphql`
  {
    aboutImg: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImg } = useStaticQuery(queryAboutImg);
  return (
    <section className={styles.about}>
      <Title title='About' subtitle='Us' />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImg.childImageSharp.fluid} alt='Awesome About' />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Story About KeSpice</h4>
          <p>
            The idea to create KeSpice came about after experiencing numerous
            inconveniences where we visited self-service restaurants and had to
            place orders at the restaurant, search for tables and wait for long
            periods of time before the order could be fulfilled.
          </p>
          <p>
            We came up with this amazing product to help people save time at
            restaurants. You can now enter a restaurant, sit comfortably and
            then begin checking the menu right off your phone and place the
            order. You will be notified when your food is ready.
          </p>
          <button type='button' className='btn-primary'>
            Download App
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
