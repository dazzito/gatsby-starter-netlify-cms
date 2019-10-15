import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Fade from "react-reveal/Fade";
import styled from 'styled-components'
import ReactMarkdown from "react-markdown"

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;




  const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    padding: 2.5em;
  `;

  const Header = styled.div`
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
    background: url("/img/bg2.png");
     padding:0 10px; 
  }
  `;








  return (
 
        <Container>
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
              <Header>
                <span>
                  {title}
                </span>
                
              </Header>
              <PageContent className="content" content={content} />
              <Header></Header>
              </Fade> 
              
   
            </div>
          </div>
        </Container>

  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      
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
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
