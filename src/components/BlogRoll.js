import React from 'react'
import PropTypes from 'prop-types'
  import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import PlaceholderImg from "src/img/avatar-placeholder.png"
import styled from 'styled-components'

import {Row, Col} from "shared/styled"



const NewsHeader = styled.header`

    padding: 12px;
    position: absolute;
    bottom: 0;
    /* height: 100px; */
    background: #212121;
    width: 350px;
    bottom: 0;
   

    h2{
    
      font-size: 1.25rem;
   
    }
`;


 

const NewsBox = styled.article`
  width:350px; 
  margin: 1em;
  position: relative;
`


const NewsRow = styled(Row)`
  flex-wrap: wrap;
`;


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <NewsRow>
        {posts &&
          posts.map(({ node: post }) => (
           
           
        
              <NewsBox
              key={post.id}
                className={` ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >

                  {post.frontmatter.featuredimage == null ? <img style={{width:350, height:350}} src={PlaceholderImg}/> : <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}

                        imageStyle={{width:350, height: 350}}


                      />}

                <NewsHeader>

                <h2>
                  {post.frontmatter.title}
                </h2>
                
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
                   
                    <div className="subtitle is-size-5" style={{display:'inline'}}>
                      {post.frontmatter.date}
                    </div>

                    <div style={{display:'inline', float:'right'}}>  
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
              </NewsBox>
            
         
           ))}
      </NewsRow>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                    fluid(maxWidth: 350, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
