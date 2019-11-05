import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";

import Content, { HTMLContent } from "../components/Content";
import Fade from "react-reveal/Fade";

import * as Styled from "src/components/pages/generic/content";

export const ServicePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>

      <Styled.Wrapper>
        <Styled.Section>
          <Fade>
            <h2>{title.toUpperCase()}</h2>
            <PageContent content={content} />
          </Fade>
        </Styled.Section>
      </Styled.Wrapper>
    </> 
  );
};

const ServicePage = props => {
  const { frontmatter, html } = props.data.markdownRemark;
  const location = props.location;

  return (
    <Layout location={location}>
      <ServicePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        content={html}
      />
    </Layout>
  );
};


export default ServicePage;

export const servicePageQuery = graphql`
  query ServicePage($locale: String) {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "service-page" }
        locale: { eq: $locale }
      }
    ) {
      html
      frontmatter {
        content
        title
      }
    }
  }
`;
