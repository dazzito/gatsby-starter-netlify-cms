// import React from 'react'
// import PropTypes from 'prop-types'
//   import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'
// import PlaceholderImg from "src/img/avatar-placeholder.png"
// import styled from 'styled-components'

// import {Row, Col} from "shared/styled"
// import Img from "gatsby-image/withIEPolyfill"



// const Member = styled.div`
//   overflow: hidden;
//   border-radius: 50%;
//   background: #fefefe; 
//   height: 220px;
//   width: 220px;
//   margin-left: auto;
//     margin-right: auto;
 
// `;

// const MemberText = styled.h3`
//   text-align: center;
//   /* background: white;
//   transition: transform .5s, filter 1.5s ease-in-out; */
// `;




// class TeamMembers extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: posts } = data.allMarkdownRemark

//     return (
//      <div></div>

//     );



// export default () => (
//   <StaticQuery
//     query={graphql`
//       query NewsRollQuery {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           filter: { frontmatter: { templateKey: { eq: "news-post" } } }
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 200)
//               id
//               fields {
//                 slug 
//               }
//               frontmatter {
//                 title
//                 templateKey
//                 date(formatString: "MMMM DD, YYYY")
//                 featuredpost
               
                
            
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data, count) => <NewsRoll data={data} count={count} />} 
//   />
// )


// // fluid(maxWidth: 200,quality: 100) {
// //   ...GatsbyImageSharpFluid 
// // }

// // fixed(width: 400, height:240) {
// //   ...GatsbyImageSharpFixed
// // }