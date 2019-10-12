import React from "react";
import PropTypes from "prop-types";
import {Link, graphql } from "gatsby";
import Img from 'gatsby-image'

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ContactForm from "../components/ContactForm";
import Fade from 'react-reveal/Fade';
import Masonry from 'react-masonry-css'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Avatar from '../img/avatar-placeholder.png'
import linkedin from "../img/social/linkedin.svg"; 
// import PreviewCompatibleImage from "src/components/PreviewCompatibleImage"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

// import Avatar from '../img/avatar-placeholder.png'



export const TeamPageTemplate = ({
  image,
  firstname,
  lastname,
  content,
  expertise,
  nickname,
  position,
  email
}) => (
<div className="content">
   
   <section className="section section--gradient">
     <div className="container">
       <div className="section">
         <div className="columns">

         <div className="column is-5">
                   
         <div className="tile is-ancestor">
               <div className="tile is-vertical">
 
                 <div className="tile is-parent" >
                   <article className="tile is-child" >
                     {/* <PreviewCompatibleImage imageInfo={image} /> */}
                     <img src={image}/>
                   </article>
                 </div>
               </div>
             </div>
            
           </div>



           <div className="column is-7">
             {/* <h3 className="has-text-weight-semibold is-size-3">{heading}</h3> */}
             <h5 className="has-text-weight-semibold is-size-3 text-tone-primary">{firstname} {lastname} {nickname =! "" ? "(" + nickname +")" : ""}</h5>
             <h4 className="has-text-weight-semibold is-size-4">{position}</h4> 
             <p>{content}</p>

             <h3 className="has-text-weight-semibold is-size-3">
                   Expertise and Experience
                 </h3>
                 <p>{expertise}</p>


                 <h5 className="has-text-weight-semibold is-size-4 text-tone-primary">
                 <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color:'#ffffff'}}/> <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:'#ffffff'}}/> {email}
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
);

// TeamPageTemplate.propTypes = {
//   images: PropTypes.array
// };

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TeamPageTemplate
        image={frontmatter.image}
        firstname={frontmatter.firstname}
        lastname={frontmatter.lastname}
        nickname={frontmatter.nickname}
        content={frontmatter.content}
        expertise={frontmatter.expertise}
        position={frontmatter.position}
    
      />
    </Layout>
  ); 
};

// GalleryPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   })
// };


export const query = graphql`
query TeamMemberByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id 
    html
    frontmatter {
      firstname
      lastname
      nickname
      content
      position
      expertise
      image {
        childImageSharp {
          fluid(maxWidth: 1048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }


  
}`;


// markdownRemark(frontmatter: { templateKey: { eq: "profile-page" } }) {
//   frontmatter { 
//     firstname
//     lastname
//     nickname
//     content
//     position
//     expertise
//     image {
//       childImageSharp {
//         fluid(maxWidth: 1048, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// }