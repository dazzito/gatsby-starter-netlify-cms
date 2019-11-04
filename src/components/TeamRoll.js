import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types'
  import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import PlaceholderImg from "src/img/avatar-placeholder.png"
import styled from 'styled-components'

import {Row, Col} from "shared/styled"
import Img from "gatsby-image/withIEPolyfill"

import {Fade} from "react-reveal"


const Member = styled.div`
  overflow: hidden;
  border-radius: 50%;
  background: #fefefe; 

  margin: 0.75em;
  border: solid;
  cursor: pointer;

  transition: all 0.2s ease 0.1s;
  &:hover{
    border: solid 6px #d0cba4;
  }


  @media (min-width: 768px){
    min-height:220px;
    min-width: 220px;
  }


  @media (max-width: 768px){
    min-height: 110px;
    min-width: 110px;
  }
 
 
`;

const MemberText = styled.h5`
  text-align: center;
  overflow-wrap: break-word;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px){

    min-width: 220px;
  }


  @media (max-width: 768px){

    min-width: 110px;
  }

  /* background: white;
  transition: transform .5s, filter 1.5s ease-in-out; */
`;



class TeamRoll extends PureComponent {


  constructor(props){
    super(props)
    this.state = {

      data: this.props.data
    }
  }





  render() {
    
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark
    console.log(this.props)

    return (
      <>
      
      {this.state.data &&
        this.state.data.map(({ node: post }, index) => (


     
     

        <Fade>
         
            <div onClick={() => {this.props.handleCallback(index)}}>
            


       
         
          <Member>
          {/* <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.image,
                        alt: "title"
                      }}
                    /> */}

            <Img fluid={post.frontmatter.profileImage1.childImageSharp.fluid}/>


          {/* <img className="team-img" src={post.frontmatter.image} />  */}
          {/* <Img fluid={post.frontmatter.image.src} alt="image" /> */}
          
        
          </Member>
          <MemberText>{post.frontmatter.firstname} {post.frontmatter.lastname}</MemberText>
        
          </div>
    
          </Fade>
        
        
        ))}
  
        </>
   
    )
  }
}



export default TeamRoll



// fluid(maxWidth: 200,quality: 100) {
//   ...GatsbyImageSharpFluid 
// }

// fixed(width: 400, height:240) {
//   ...GatsbyImageSharpFixed
// }