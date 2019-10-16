import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ReactMarkdown from "react-markdown"
import Content, { HTMLContent } from "../components/Content";
import Fade from "react-reveal/Fade";

import styled from "styled-components"


const Container = styled.div`
margin-left: auto;
margin-right: auto;
/* margin-top: 5em; */
/* margin-bottom: 5em; */
padding: 2.5em;
/* background: #151515b5;
    color: lightgrey; */
    
ul {
    margin: 0.75em 0;
    padding: 0 1em;
    list-style: none;
  }
li:before {
    content: "";
    border-color: transparent #111;
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    display: block;
    height: 0;
    width: 0;
    left: -1em;
    top: 0.9em;
    position: relative;
}
`;


const Section = styled.section`
  border-top: solid 2px #b7b28a;
  background:#272727;
  min-height: 400px;
  padding: 2.5em;
  color: lightgrey;
`;

const SectionHeader = styled.div`
font-family: 'Source Serif Pro', serif;
width: 100%; 
text-align: center; 
border-bottom: 2px solid #d0cba4; 
line-height: 0.1em;
margin: 10px 0 20px; 
color: #d0cba4;
line-height: 0;
font-size: 2.5rem;
word-break: break-word;
margin-top: 0.5em;
margin-bottom: 1.25em

span { 
  background: #272727;
    /* border: solid; */
 padding:0 10px; 
 margin-left:30px;
}
`;

const Header = styled.div`
font-family: 'Source Serif Pro', serif;
  width: 100%; 
text-align: center; 
border-bottom: 2px solid #d0cba4; 
line-height: 0.1em;
margin: 10px 0 20px; 
color: #d0cba4;
line-height: 0;
font-size: 2.5rem;
word-break: break-word;
margin-top: 0.5em;

span { 
  background: #3f3f3f;
    border: solid;
 padding:0 10px; 
}
`;

export const ServicePageTemplate = ({
  title,
  content,
  contentComponent
  
}) => {
  
  const PageContent = contentComponent || Content;

  
  
  return(

    <>
   
    <Container>
    <div className="columns">
      <div className="column is-10 is-offset-1">
      <Fade>
        <Header>
          <span>
            {title.toUpperCase()}
          </span>
          
        </Header>
       
   
        </Fade> 
        

      </div>
    </div>
  </Container>

  <Section> <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
            {/* <SectionHeader>
              <span>SERVICES</span>
                 
                </SectionHeader> */}
                <PageContent className="content" content={content} />
             
              </Fade> 
              
   
            </div>
          </div></Section>

  </>
)}



// ServicePageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string
// };
// ServicePageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
//   main: PropTypes.shape({
//     heading: PropTypes.string,
//     description: PropTypes.string,
//     image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   }),
//   testimonials: PropTypes.array,
//   fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   pricing: PropTypes.shape({
//     heading: PropTypes.string,
//     description: PropTypes.string,
//     plans: PropTypes.array,
//   }),
// }






// <div className="columns">
// <div className="column is-10 is-offset-1">
//   {/* <Features gridItems={intro.blurbs} />
//   */}
 
 
//   <div className="columns">
//     <div className="column is-7">
//       <h3 className="has-text-weight-semibold is-size-3">
   
//       </h3>
//       <p></p>
//     </div>
//   </div>
 
 
  
 
 
//   <div className="tile is-ancestor">
//     <div className="tile is-vertical">
//       <div className="tile">
//         <div className="tile is-parent is-vertical">
//           <article className="tile is-child">
//           <img src={"https://dummyimage.com/526x350/ffca64/aaa"}/>
//             {/* <PreviewCompatibleImage imageInfo={main.image1} /> */}
//           </article>
//         </div>
//         <div className="tile is-parent">
//           <article className="tile is-child">
//           <img src={"https://dummyimage.com/526x350/ffca64/aaa"}/>
//             {/* <PreviewCompatibleImage imageInfo={main.image2} /> */}
//           </article>
//         </div>
//       </div>
//       <div className="tile is-parent">
//         <article className="tile is-child">
//         <img src={"https://dummyimage.com/1075x820/ffca64/aaa"}/>
//           {/* <PreviewCompatibleImage imageInfo={main.image3} /> */}
//         </article>
//       </div>
//     </div>
//   </div>

 

// </div>
// </div>


const ServicePage = ({data}) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
      contentComponent={HTMLContent}
        title={frontmatter.title}
        content={html}

      
      />
    </Layout>
  )
}

// ServicePage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

export default ServicePage

export const servicePageQuery = graphql`
  query ServicePage($locale: String) {
    markdownRemark( frontmatter: { templateKey: { eq: "service-page" }, locale: { eq: $locale } })   {
      html
      frontmatter {
        content
        title
        
      }
    }
  } 
`
