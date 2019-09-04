import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
           
           

         
           <div className="is-parent column is-3" key={post.id}>
              <article
                className={`blog-list-item tile is-child box newsbox ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >

<PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}
                      />
                <header style={{padding: 20}}>
                  {/* {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                    
                    </div>
                  ) : null} */}
                  <p className="post-meta">
                   
                   <div>
                   <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                   </div>
                   
                   
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
               
                </header> 
                {/* <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Read
                  </Link>
                </p> */}
              </article>
            </div>
         
           ))}
      </div>
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
                    fluid(maxWidth: 480, quality: 100) {
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
