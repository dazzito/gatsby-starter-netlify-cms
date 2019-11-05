import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layouts";
import Content, { HTMLContent } from "../components/Content";
import Fade from "react-reveal/Fade";


import * as Styled from "src/components/pages/generic/content";

import styled from 'styled-components'


const ImageFill = styled.div`
  flex:1;
  background: pink;
`;

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Styled.Wrapper>
      <Styled.Section>
        <Fade>
          <h2>{title}</h2>
          <PageContent className="content" content={content} />
        </Fade>
      </Styled.Section>
    </Styled.Wrapper>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = props => {
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
      <ImageFill></ImageFill>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!, $langKey: String!) {
    markdownRemark(id: { eq: $id }, fields: { langKey: { eq: $langKey } }) {
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
