import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import PlaceholderImg from "src/img/avatar-placeholder.png";
import styled from "styled-components";

import { Row, Col } from "shared/styled";
import Img from "gatsby-image/withIEPolyfill";

const NewsHeader = styled.header`
  padding: 12px;

  bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  /* height: 100px; */
  background: #1b1b1b;

  bottom: 0;
  transition: background-color 0.2s ease;
  min-height: 80px;

  h2 {
    color: #b7b28a;
    font-size: 1rem;
  }
`;

const NewsBox = styled.article`
  width: 400px;

  /* height:350px; */
  margin: 1.25em;
  background: #1b1b1b;

  position: relative;
  /* box-shadow: 0px 0px 0px 1px #9f9f9f; */

  transition: transform 0.2s; /* Animation */

  div.gatsby-image-wrapper img:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  /* @media (max-width: 468px) {
    
    } */

  /* header img:hover{
    background: white;
    color: #b7b28a;
     
  } */
`;

const NewsRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
`;

class NewsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <NewsRow>
        {posts &&
          posts.map(({ node: post }) => (
            <NewsBox
              key={post.id}
              className={` ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <Link to={post.fields.slug}>
                {post.frontmatter.featuredimage == null ? (
                  <img
                    style={{ width: 400 }}
                    src="https://via.placeholder.com/400x267"
                  />
                ) : (
                  <Img
                    fixed={post.frontmatter.featuredimage.childImageSharp.fixed}
                   
                    imgStyle={{ transition: "all 0.2s ease 0s" }}
                  
                    alt="https://via.placeholder.com/400x267"
                  />
                )

                // <PreviewCompatibleImage
                //         imageInfo={{
                //           image: post.frontmatter.featuredimage,
                //           alt: `featured image thumbnail for post ${
                //             post.title
                //           }`,
                //         }}

                //         imageStyle={{width:200, height: 157}}   />
                }

                <NewsHeader>
                  <h2>{post.frontmatter.title}</h2>

                  {/* {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                    
                    </div>
                  ) : null} */}
                  <p className="post-meta">
                    {/* <div>
                   <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                    
                    </Link>
                   </div>
                    */}

                    <div className="subtitle" style={{ display: "inline" }}>
                      {post.frontmatter.date}
                    </div>

                    <div
                      style={{
                        display: "inline",
                        float: "right",
                        color: "#4a4a4a"
                      }}
                    >
                      Read more
                    </div>
                    {/* <Link className="button is-inline-block is-right" to={post.fields.slug}>
                    Read
                  </Link> */}
                  </p>
                </NewsHeader>
                {/* <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Read
                  </Link>
                </p> */}
              </Link>
            </NewsBox>
          ))}
      </NewsRow>
    );
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query NewsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fixed(width: 400, height: 285, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <NewsRoll data={data} count={count} />}
  />
);

// fluid(maxWidth: 200,quality: 100) {
//   ...GatsbyImageSharpFluid
// }

// fixed(width: 400, height:285) {
//   ...GatsbyImageSharpFixed
// }

// fluid(maxWidth: 400, maxHeight:285,quality: 100) {
//   ...GatsbyImageSharpFluid
// }
