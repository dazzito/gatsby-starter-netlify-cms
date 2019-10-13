import React , { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import NewsRoll from "../components/NewsRoll";
import ContactForm from "../components/ContactForm";
import Fade from "react-reveal/Fade";

import Landing from "../components/Landing";

import { useInView } from 'react-intersection-observer'






export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => {
  
  
  


  return(
  <div>
  
  <Landing/> 

{/*       
  
    <section
        className="section section--gradient hero"
        style={{height:700}}
      >
        <div className="container">
          
            <div className="columns">
            <Fade right delay={350}>
            <div className="column is-10 hero-content" >
        
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
          Our Mission
        </h1>
        <div className="has-text-white is-size-4">
        <p style={{color:'#b9b9b9'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 
        </div>

        

        </div>
        </Fade>


            </div>
         
        </div>
    </section>

 

      <section 
        className="section section--gradient hero"
        style={{height:600}}
       
      >
        <div className="container">
          
            <div className="columns">
           

           <Fade left delay={750}>
            <div className="column is-10 hero-content">
        
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
          Our Vision
        </h1> 
        </div>
        </div>
        </Fade>


            </div>
         
        </div>
      </section>
     
   
   
 */}

   
  
      <section style={{background: '#232323'}}>
        <div className="container" style={{zIndex: 999, background: '#232323'}}>
          <div className="section" >
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2" style={{color:'white'}}>
                Latest news
              </h3>
              <div className="section-break"></div>
              <NewsRoll />
            </div>
          </div>
        </div>
      </section>
   
    
  </div>
)};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
