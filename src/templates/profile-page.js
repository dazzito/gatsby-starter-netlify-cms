import React from 'react'
import PropTypes from 'prop-types'
import { Link,graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import linkedin from "../img/social/linkedin.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

import Avatar from '../img/avatar-placeholder.png'


import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

export const ProfilePageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
   
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">

          <div className="column is-5">
                    
          <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  {/* <div className="tile">
                    <div className="tile is-parent is-vertical" >
                      <article className="tile is-child" >
                  
                        <img src={Avatar} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                       
                        <img src={Avatar}/>
                      </article>
                    </div>
                  </div> */}
                  <div className="tile is-parent" >
                    <article className="tile is-child" >
                      {/* <PreviewCompatibleImage imageInfo={main.image3} /> */}
                      <img src={Avatar}/>
                    </article>
                  </div>
                </div>
              </div>
             
            </div>

 

            <div className="column is-7">
              {/* <h3 className="has-text-weight-semibold is-size-3">{heading}</h3> */}
              <h5 className="has-text-weight-semibold is-size-3 text-tone-primary">[Profile Name]</h5>
              <h4 className="has-text-weight-semibold is-size-4">[Position]</h4> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <h3 className="has-text-weight-semibold is-size-3">
                    [Expertise and Experience]
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                  <h5 className="has-text-weight-semibold is-size-4 text-tone-primary">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color:'#212121'}}/> <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:'#212121'}}/> placeholder@dz.com 
                  </h5>

                 
                  
            </div>


          </div>
      
        </div>
      </div>
    </section>

    <section
        className="section section--gradient hero"
        style={{ height: 150 }}
      >
        {" "}
      </section>
  </div>
)

ProfilePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}





const ProfilePage = ({ data}) => {
  const { frontmatter } = data.markdownRemark

  return (


    <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <>
        {true ? (
          <>
         
          <Link to={closeTo}>
            Close
          </Link>

          <ProfilePageTemplate
            image={frontmatter.image}
            title={frontmatter.title}
            heading={frontmatter.heading}
            description={frontmatter.description}
            intro={frontmatter.intro}
            main={frontmatter.main}
            testimonials={frontmatter.testimonials}
            fullImage={frontmatter.full_image}
            pricing={frontmatter.pricing}
          />
          
         </>
        ) : (
          <Layout>
          <ProfilePageTemplate
            image={frontmatter.image}
            title={frontmatter.title}
            heading={frontmatter.heading}
            description={frontmatter.description}
            intro={frontmatter.intro}
            main={frontmatter.main}
            testimonials={frontmatter.testimonials}
            fullImage={frontmatter.full_image}
            pricing={frontmatter.pricing}
          />
        </Layout>
        )}

      </>
    )}
  </ModalRoutingContext>



   
  )
}

ProfilePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProfilePage

export const profilePageQuery = graphql`
  query TeamProfilePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
