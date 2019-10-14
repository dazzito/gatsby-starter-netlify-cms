import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ServicePageTemplate = ({
 
  title,
  body,
}) => (
  <div className="content">
   








    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{title}</h3>
              <p>{body}</p>
            </div>
          </div>
       </div>
      </div>
    </section>
  </div>
)

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


const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
        title={frontmatter.title}
        body={frontmatter.body}
      
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
  query ServicePage($id: String!) {
      markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        
      }
    }
  }
`
