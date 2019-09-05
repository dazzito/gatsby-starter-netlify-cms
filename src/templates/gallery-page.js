import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ContactForm from "../components/ContactForm";
import Fade from 'react-reveal/Fade';

import Avatar from '../img/avatar-placeholder.png'


export const GalleryPageTemplate = ({
  images
}) => (
  <div>

    
<h1
            className="has-text-weight-bold is-size-3"
            style={{
              
              backgroundColor: '#ffca64',
              color: 'white',
              padding: '1rem',
              textAlign:'center' 
            }}
          >
           Our Team
          </h1>

          <section className="section section--gradient is-10" style={{background:'#4a4a4a', padding:0, height:'calc(100vh - 52px'}}>
       
      
        <Masonry
  breakpointCols={6}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">

{/* 

{images.map(i =>  <Fade> <Img fluid={i.image.childImageSharp.fluid}  /></Fade> )}


 */}



 <Fade>
    <Link  to="/profile">
    <div className="team-item">
    <img className="team-img" src={Avatar} /> 
    </div>
    </Link>
 </Fade>

 <Fade>
    <Link  to="/profile">
    <div className="team-item">
    <img className="team-img" src={Avatar} /> 
    </div>
    </Link>
 </Fade>
 <Fade>
    <Link  to="/profile">
    <div className="team-item">
    <img className="team-img" src={Avatar} /> 
    </div>
    </Link>
 </Fade>
 <Fade>
    <Link  to="/profile">
    <div className="team-item">
    <img className="team-img" src={Avatar} /> 
    </div>
    </Link>
 </Fade>
 <Fade>
    <Link  to="/profile">
    <div className="team-item">
    <img className="team-img" src={Avatar} /> 
    </div>
    </Link>
 </Fade>
 <Fade>
    <Link  to="/profile">
    <div className="team-item">
    <img className="team-img" src={Avatar} /> 
    </div>
    </Link>
 </Fade>
 




    
</Masonry>



 
        </section>



  </div>
);

GalleryPageTemplate.propTypes = {
  images: PropTypes.array
};

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GalleryPageTemplate
        images={frontmatter.images}
      />
    </Layout>
  ); 
};

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};


export default GalleryPage;

export const GalleryPageQuery = graphql`
query GalleryPage {
  markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
    frontmatter { 
      images {
        text
        image {
          childImageSharp {
            fluid(maxWidth: 480, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`;