import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layouts";
import Content, { HTMLContent } from "../components/Content";
import Fade from "react-reveal/Fade";
import styled from 'styled-components'
import ReactMarkdown from "react-markdown"

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;


  


  const Content = styled(PageContent)`
    max-width:1366px;
    padding:1.5em;
  `;

    
const ParallaxContainer  = styled.div`
display: initial;

/* position: relative; */
width: 100%;
min-height: 100vh;
transform-style: preserve-3d;

*{
  position:absolute;

}

&::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: block;
  background: url("/img/marble-white.jpg") top center;
  background-size: cover;
  transform: translateZ(-1px) scale(2.1);
  min-height: 100%;
  z-index: -2;
}
`



const ContentContainer = styled.div`

/* margin-top: 50px; */
margin-bottom: 0;
padding: 0;
padding-top: 3em;


background: #000000bd;
/* padding-top: 2em; */
/* padding: 2.5em; */


padding-bottom: 0px;
color: white;

/* border: solid 2px #cfcaa3; */
`;

  const Container = styled.div`


     perspective: 1px;
  transform-style: preserve-3d;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
    /* border: solid 2px #cfcaa3; */
  `;

  const Header = styled.div`
 
 font-family: 'Playfair Display',serif;
    width: 100%;
    text-align: center;
    border-bottom: 2px solid #d0cba4;
    line-height: 0.1em;
    margin: 10px 0 20px;
    color: #d0cba4;
    line-height: 0;
    font-size: 2em;
    word-break: break-word;
    margin-top: 0.5em;
 

  span { 
    /* background: url("/img/bg2.png"); */
    /* background: #3f3f3f;
    border: solid;
    padding:0 10px;  */
    /* background: url('/img/waranont-joe-EZwBNdnIlpo-unsplash.jpg');
    background-size: auto; */
    


     background: #232323;
    border: solid;
    /* padding-top: 30px; */
    padding: 5px 10px;
    margin: 10p;
    border-radius: 4px;
  }


  `;








  return (
 
        
    
        <ContentContainer>

<ParallaxContainer>

</ParallaxContainer>
    
            <Fade >
              <Header >
                <span>
                  {title}
                </span>
                
              </Header>
              <Content className="content" content={content} />
              <Header></Header>
              </Fade> 


          
        </ContentContainer>


  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = (props) => {
  const { markdownRemark: post } = props.data;
  const location = props.location;
  //console.log(props)

  return ( 
    <Layout location={location}>
      
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!, $langKey: String!) {
    markdownRemark(id: { eq: $id }, fields: { langKey: { eq: $langKey } } ) {
      html
      fields {
        langKey
      }
      frontmatter { 
        title
      }
    }
  }
`;
