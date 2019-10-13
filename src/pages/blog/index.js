import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Fade from 'react-reveal/Fade';


import styled from "styled-components"



const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    padding: 2.5em;
  `;



export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>

         
     
     
       <Container>

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

      
          
  
     
       </Container>
 
  
   



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
