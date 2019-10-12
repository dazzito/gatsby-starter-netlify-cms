import React from 'react'

import Layout from '../../components/Layout'
import { Link, graphql, StaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade';
import Masonry from 'react-masonry-css'

import Avatar from '../../img/avatar-placeholder.png'

const breakpointColumnsObj = {
  default: 4,
  1100: 3, 
  700: 2,
  500: 1
};


 class TeamPage extends React.Component {


  render() {
    console.log(this.props);
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts);
    return (
      <Layout> 


        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Our Team
          </h1>
        </div> */}

<section className="section section--gradient bg3">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
                Our Team
              </h2>
         
              </Fade> 
   
            </div>
          </div>
        </div>
      </section>

        <section className="section">
          <div className="container">
            <div className="content">
            <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">

            {posts &&
          posts.map(({ node: post }) => (


            <Fade>
            <Link to={"/team/"+post.frontmatter.lastname.toLowerCase()}> 
            <div className="team-item">
            <img className="team-img" src={post.frontmatter.image} /> 
            
            </div>
            <h3>{post.frontmatter.firstname} {post.frontmatter.lastname}</h3>
            </Link> 
         </Fade>
        
       
          
          ))}

          
    </Masonry>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
      query MemberQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "team-page" } } }
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
                image {
                  childImageSharp {
                    fluid(maxWidth: 1048, quality: 100) {
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
    render={(data, count) => <TeamPage data={data} count={count} />}
  />
)