import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Masonry from 'react-masonry-css'

import Fade from 'react-reveal/Fade';
export default class GalleryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              
              backgroundColor: '#212121',
              color: 'white',
              padding: '1rem',
            }}
          >
            All Posts
          </h1>
        </div> */}


<h1
            className="has-text-weight-bold is-size-3"
            style={{
              
              backgroundColor: 'rgb(133, 182, 255)',
              color: 'whitesmoke',
              padding: '1rem',
              textAlign:'center' 
            }}
          >
           Gallery
          </h1>

        <section className="section section--gradient" style={{background:'#212121', paddingTop:20}}>
       
       <Fade>
        <Masonry
  breakpointCols={6}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">

   <img src="/img/jumbotron.jpg" style={{height:285}}/> 
    <img src="/img/jumbotron.jpg" style={{height:350}}/> 
    <img src="/img/jumbotron.jpg" style={{height:200}}/> 
    <img src="/img/jumbotron.jpg" style={{height:450}}/> 
    <img src="/img/jumbotron.jpg" style={{height:350}}/> 
    <img src="/img/jumbotron.jpg" style={{height:200}}/> 
    <img src="/img/jumbotron.jpg" style={{height:285}}/> 
    <img src="/img/jumbotron.jpg" style={{height:350}}/> 
    <img src="/img/jumbotron.jpg" style={{height:200}}/> 
     <img src="/img/jumbotron.jpg" style={{height:450}}/> 
   <img src="/img/jumbotron.jpg" style={{height:350}}/> 
   <img src="/img/jumbotron.jpg" style={{height:200}}/>
   <img src="/img/jumbotron.jpg" style={{height:450}}/>
    <img src="/img/jumbotron.jpg" style={{height:350}}/> 
    <img src="/img/jumbotron.jpg" style={{height:350}}/> 
    
</Masonry>

</Fade>

 
        </section>


     
      </Layout>
    )
  }
}

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `;

