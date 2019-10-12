import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Fade from 'react-reveal/Fade';

export default class BlogIndexPage extends React.Component {
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

        


{/* <h1
            className="has-text-weight-bold is-size-3"
            style={{
              
              backgroundColor: '#c9b96e ',
              color: 'white',
              padding: '1rem',
              textAlign:'center'
            }}
          >
            News
          </h1> */}

         
     
     <section className="section section--gradient bg3">
       <div className="container">
         <div className="columns">
           <div className="column is-10 is-offset-1">
           <Fade>
             <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
               News
             </h2>

             <BlogRoll />
            
             </Fade> 
  
           </div>
         </div>
       </div>
     </section>
  
   



        {/* <section className="section section--gradient" style={{background:'white'}}>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}

{/* 
        <h1
            className="has-text-weight-bold is-size-3"
            style={{
              
              backgroundColor: 'rgb(133, 182, 255)',
              color: 'white',
              padding: '1rem',
              textAlign:'center'
            }}
          >
            Other Posts
          </h1>

          <section className="section section--gradient" style={{background:'white'}}>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}
      </Layout>
    )
  }
}
