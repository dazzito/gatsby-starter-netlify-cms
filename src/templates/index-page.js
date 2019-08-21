import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ContactForm from "../components/ContactForm";
import Fade from 'react-reveal/Fade';
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>

    
{/* 
<Sticky topOffset={86} disableCompensation> 
  {({
            style,
 
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop=150,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <div className="tile"  style={{ ...style, zIndex: '998',backgroundColor:'white', color:'white', paddingTop: isSticky ? '62px' : '0px'}}>
               <h1 className="title">{mainpitch.title}</h1>

          </div>
            
          )}
  </Sticky>  */}

  <Fade>

    <section className="section section--gradient" style={{background:'white', height:'calc(100vh - 52px'}}>
      <div className="container">
        <div className="section">
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
                  {/* <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3> */}

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
      </div>
    </section>

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
    <section style={{background:'white'}}>
      <div className="container">
        <div className="section">
        <div className="column is-12">
            <h3 className="has-text-weight-semibold is-size-2">
              Latest stories
            </h3>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fade>
  </div>
);

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
