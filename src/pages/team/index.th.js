import React from 'react'

import Layout from 'src/layouts'
import { graphql, StaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade';
import Masonry from 'react-masonry-css'
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { ModalRoutingContext, Link } from 'gatsby-plugin-modal-routing'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faTimes, faFileExcel } from '@fortawesome/free-solid-svg-icons'


import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { constants } from 'os';
import {getLocalizedConstant} from 'shared/constant'

import ReactMarkdown from 'react-markdown';

import ReactModal from 'react-modal'

import { Portal } from 'react-portal';
import TeamRoll from 'src/components/TeamRoll';

const Header = styled.div`
 
font-family: 'Playfair Display',serif;
   width: 100%;
   text-align: center;

   line-height: 0.1em;
   margin: 10px 0 20px;
   color: #d0cba4;
   line-height: 0;
   font-size: 2.5em;
   word-break: break-word;
   margin-top: 0.5em;
 `;

 const TeamPageWrapper = styled.div`
 

    margin-top: 126px;
    min-height: 400px;
    padding: 2.5em;
    color: lightgrey;
 
  
 `;






const breakpointColumnsObj = {
  default: 4,
  1100: 3, 
  700: 2,
  500: 1
};



const CloseButton = styled.div`
  position: absolute;
    top: 156px;
    right: 5vw;
    z-index: 2;

`


const MemberPortal = styled.div`
 position: absolute;
    top: 156px;
    left: 0px;
    right: 0px;
    padding: 2em;
    margin-left: auto;
    margin-right: auto;
    max-width: 966px;
    background: transparent;
    z-index: 2;
    color: lightgrey;
    display: flex;
    flex-wrap: wrap;
`;


const PortalTextContainer = styled.div`
  background: #000000ba;
  margin-left: 1em;
  padding: 2em;
  flex: 1;
  min-width: 400px;

`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 2s ease 0s;
  background: ${props => props.portalIsOpen ? '#000000a4' : 'transparent'};
  z-index: ${props => props.portalIsOpen ? 2 : 0};
  padding: 5vh;

  

`


// class MemberPortal extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false
//     };
//   }

  



// }


const ImageWrapper = styled.div`
  flex:1;
  min-width: 400px;
`;

const MemberContainer = styled.div`
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1450px;
    margin-left: auto;
    margin-right: auto;
    min-width: 220px;
    
    

`;


const Member = styled.div`
  overflow: hidden;
  border-radius: 50%;
  background: #fefefe; 
  height: 220px;
  width: 220px;
  margin: 1.5em;
  border: solid;
  cursor: pointer;

  transition: all 0.2s ease 0.1s;
  &:hover{
    border: solid 6px #d0cba4;
  }
 
 
`;

const MemberText = styled.h5`
  text-align: center;

  /* background: white;
  transition: transform .5s, filter 1.5s ease-in-out; */
`;



const Container = styled.div`

position: relative;
`;



 class TeamPage extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      modalIndex:0
    }

    this.toggleModal = this.toggleModal.bind(this);
    
  }



  toggleModal(index){
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen, modalIndex:index
    }))
  }


  render() {
    //console.log(this.props);
    //const { data } = this.props
    const { edges: posts } = this.props.data.allMarkdownRemark
    const location = this.props.location
    console.log(posts);
    return (




<TeamPageWrapper>


<Fade>
<h2 style={{textAlign: 'center'}}>OUR TEAM</h2>
</Fade>

  





<MemberContainer>




<TeamRoll data={posts} handleCallback={this.toggleModal}/>
</MemberContainer>





{this.state.isModalOpen && (<Portal>
      
      
      <Overlay portalIsOpen={this.state.isModalOpen} onClick={() => this.setState({isModalOpen:false})}>



    
    

</Overlay>



    
<CloseButton onClick={() => this.setState({isModalOpen:false})}>
         <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          style={{ color: "#ffffff" }}
        />
         </CloseButton>
        

       <MemberPortal>
   

     

          <ImageWrapper>

          <Img fluid={posts[this.state.modalIndex].node.frontmatter.profileImage1.childImageSharp.fluid}/>
          </ImageWrapper>
          

         <PortalTextContainer>

     

         <h3>
         {posts[this.state.modalIndex].node.frontmatter.firstname} {posts[this.state.modalIndex].node.frontmatter.lastname}{" "}
<span>( {posts[this.state.modalIndex].node.frontmatter.nickname} )</span>
       </h3>
       <h4>{posts[this.state.modalIndex].node.frontmatter.position}</h4>
       <ReactMarkdown source={posts[this.state.modalIndex].node.frontmatter.content}/>

       <h4>
         Expertise and Experience
       </h4>
       <ReactMarkdown source={posts[this.state.modalIndex].node.frontmatter.expertise}/>

       <h4>
         <FontAwesomeIcon
           icon={faLinkedin}
           size="lg"
           style={{ color: "#ffffff" }}
         />{" "}
         <FontAwesomeIcon
           icon={faEnvelope}
           size="lg"
           style={{ color: "#ffffff" }}
         />{" "}
         {posts[this.state.modalIndex].node.frontmatter.email}
       </h4>


         </PortalTextContainer> 
   



       {/* <PreviewCompatibleImage
                 imageInfo={{
                   image: posts[this.state.modalIndex].node.frontmatter.image,
                   alt: "title"
                   
                 }}
               /> */}


     </MemberPortal>
  

   
</Portal>)}


</TeamPageWrapper>
      

    ) 
  } 
}
 

export default (props) => (
  <StaticQuery
    query={graphql`
      query MemberQuery($langKey: String){  
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {  templateKey: { eq: "team-page" }, locale: { eq: $langKey } } }
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
                profileImage1 {
                  childImageSharp {
                    fluid(maxWidth: 1366, maxHeight: 1366, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }

              }
            }
          }
        }
      }
    `}
    render={() =><Layout location={props.location}><TeamPage {...props} /></Layout> }
  />
)

// image {
//   childImageSharp {
//     fluid(maxWidth: 220, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }


// fixed(width: 220, height: 220, quality: 100) {
//   ...GatsbyImageSharpFixed
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