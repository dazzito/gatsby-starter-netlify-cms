import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Masonry from 'react-masonry-css'
export default class GalleryIndexPage extends React.Component {
  render() {
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
              
              backgroundColor: '#212121',
              color: 'white',
              padding: '1rem',
            }}
          >
            All Posts
          </h1>
        </div> */}


<h1
            className="has-text-weight-bold is-size-3"
            style={{
              
              backgroundColor: 'rgb(133, 182, 255)',
              color: 'whitesmoke',
              padding: '1rem',
              textAlign:'center' 
            }}
          >
           Gallery
          </h1>

        <section className="section section--gradient" style={{background:'white'}}>
          <div className="container">
            <div className="content">
              

            <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  <div>My Element</div>
  <div>My Element</div>
  <div>My Element</div>
  <div>My Element</div>
</Masonry>




            </div>
          </div>
        </section>


     
      </Layout>
    )
  }
}
