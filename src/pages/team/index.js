import React from 'react'

import Layout from '../../layouts'
import { graphql, StaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade';
import Masonry from 'react-masonry-css'

import Avatar from '../../img/avatar-placeholder.png'
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { ModalRoutingContext, Link } from 'gatsby-plugin-modal-routing'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Member = styled.div`
  overflow: hidden;
  border-radius: 50%;
  background: #fefefe; 
  height: 220px;
  width: 220px;
  margin-left: auto;
    margin-right: auto;
 
`;

const MemberText = styled.h3`
  text-align: center;
  /* background: white;
  transition: transform .5s, filter 1.5s ease-in-out; */
`;





const breakpointColumnsObj = {
  default: 4,
  1100: 3, 
  700: 2,
  500: 1
};





// const TeamPage = ( {data} , asModal, closeTo) => {
//   const { frontmatter } = data.markdownRemark;
//   console.log(asModal);
//   console.log(data)

//   return (
// <Layout>





//   </Layout>


 
//   ); 
// };




const ModalExamplePage = ({
  image,
  firstname,
  lastname,
  content,
  expertise,
  nickname,
  position,
  email
}) => (
  <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <>
          <Link to={closeTo}> 
            Close
          </Link>
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
                          <PreviewCompatibleImage
                               imageInfo={{
                                 image: image,
                                 alt: "title"
                               }}
                             />
                            {/* <PreviewCompatibleImage imageInfo={image} /> */}
                            {/* <img src={image}/> */} 
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
                          Expertise and Experiencewwv
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
        </>
       
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>Modal Page</h2>

        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext>
)


 class TeamPage extends React.Component {


  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    //const { data } = this.props
    const { edges: posts } = this.props.data.allMarkdownRemark
    const location = this.props.location
    console.log(posts);
    return (
      <Layout location={location}> 



<section className="section section--gradient bg3">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
                Our Team
              </h2>
         
              </Fade> 
   
            </div>
          </div>
        </div>
      </section>

        <section className="section">
          <div className="container">
            <div className="content">
            <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
 
            {posts &&
          posts.map(({ node: post }) => (


            <Fade>
            <Link asModal  to={"/team/"+post.frontmatter.lastname.toLowerCase()}> 
            <Member>
            <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
                          alt: "title"
                        }}
                      />
            {/* <img className="team-img" src={post.frontmatter.image} />  */}
            {/* <Img fluid={post.frontmatter.image.src} alt="image" /> */}
            
            
            </Member>
            <MemberText>{post.frontmatter.firstname} {post.frontmatter.lastname}</MemberText>
            </Link> 
         </Fade>
        
       
          
          ))}

          
    </Masonry>
            </div>
          </div>
        </section>
      </Layout> 
    ) 
  } 
}
 

export default (props) => (
  <StaticQuery
    query={graphql`
      query MemberQuery($locale: String){  
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {  templateKey: { eq: "team-page" }, locale: { eq: $locale } } }
        ) { 
          edges {
            node {
              frontmatter {
                firstname
                lastname
                nickname
                content
                position
                expertise
               
             
              }
            }
          }
        }
      }
    `}
    render={() => <TeamPage {...props} />}
  />
)

// image {
//   childImageSharp {
//     fluid(maxWidth: 220, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }



// export const query = graphql`
// query TeamMemberByID($id: String!) {
//   markdownRemark(id: { eq: $id }) {
//     id 
//     html
//     frontmatter {
//       firstname
//       lastname
//       nickname
//       content
//       position
//       expertise
//       image {
//         childImageSharp {
//           fluid(maxWidth: 1048, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }


  
// }`;