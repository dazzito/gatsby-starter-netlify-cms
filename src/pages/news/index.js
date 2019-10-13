import React from 'react'

import Layout from '../../components/Layout'
import NewsRoll from '../../components/NewsRoll'
import Fade from 'react-reveal/Fade';


import styled from "styled-components"



// const Container = styled.container`
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 5em;
//     margin-bottom: 5em;
//     padding: 2.5em;
//   `;



export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>

         
     
     
       <div className="container is-fluid">

            <Fade>
             <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
               News
             </h2>

             <NewsRoll />
            
             </Fade> 
   

      
          
  
     
       </div>
 
  
   



        {/* <section className="section section--gradient" style={{background:'white'}}>
          <div className="container">
            <div className="content">
              <NewsRoll />
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
              <NewsRoll />
            </div>
          </div>
        </section> */}
      </Layout>
    )
  }
}
