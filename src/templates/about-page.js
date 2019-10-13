import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Fade from "react-reveal/Fade";
import styled from 'styled-components'


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;




  const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    padding: 2.5em;
  `;



  return (
    <>
     
 
        <Container>
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              </Fade> 
   
            </div>
          </div>
        </Container>
    
     
    </>
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
