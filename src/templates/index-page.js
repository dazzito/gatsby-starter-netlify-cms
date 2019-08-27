import React , { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ContactForm from "../components/ContactForm";
import Fade from "react-reveal/Fade";

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
    




   
    <section
      className="section section--gradient hero"
      style={{paddingTop:0, height:'100vh'}}
    >
    <div className="container">
    <Fade delay={150}>
            <div className="column is-10">
            <h2 style={{color:'#ffffffd9', fontSize:90} }>“ THE PEOPLE’S GOOD IS THE HIGHEST LAW ”
            {/* <i style={{fontSize:40}}> — CICERO </i> */}
            </h2>
            </div>
            
     </Fade>

     <Fade delay={400}>
     <div className="column is-10">
              <Link className="btn" to="/about">
                Learn about us.
              </Link>
            </div>

     
            {/* <div className="column is-10">
            <h3 style={{color:'#ffffffd9', fontSize:45, fontStyle: 'italic',} }></h3>
            </div> */}
            
     </Fade>
    </div>
  
    
    </section>
   

    {/* <Fade delay={300}>
    <section
      className="section section--gradient hero"
    ></section>
    </Fade> */}
    
    
    
    
    
    <Fade>
{/*      
    height: "calc(100vh - 52px" }} */}
     
     
     
     
     
{/*      
      <section
        className="section section--gradient"
        style={{ background: "white" }}
      >
        <div className="container">
          
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>

                  <div className="columns is-multiline">
            

                    <div className="column is-6">
                      <ContactForm />
                    </div>

                    <div className="column is-6" style={{ padding: 30 }}>
                      <div
                        style={{
                          border: "solid black 1px",
                          borderRadius: 4,
                          height: "100%"
                        }}
                      ></div>
                    </div>

                    <p>{description}</p>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
         
        </div>
      </section> */}

 

    </Fade>
    {/* <section style={{ background: "#212121", color: "white" }}>
      <div className="container">
        <div className="section">
          <Features gridItems={intro.blurbs} />
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/products">
                See all products
              </Link>
            </div>
          </div>
        
        </div>
      </div>
    </section> */}

    <Fade>
      <section style={{ background: "white" }}>
        <div className="container">
          <div className="section">
            <div className="column is-10">
              <h3 className="has-text-weight-semibold is-size-2">
                Latest news
              </h3>
              <div className="section-break"></div>
              <BlogRoll />
              {/* <div className="column is-10 has-text-centered">
                <Link className="btn" to="/blog">
                  Read more
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Fade>
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
