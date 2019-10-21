import React from 'react'

import Layout from '../../layouts'
import NewsRoll from '../../components/NewsRoll'
import Fade from 'react-reveal/Fade';


import styled from "styled-components"


const Container = styled.div`
margin-left: auto;
margin-right: auto;
/* margin-top: 5em; */
margin-bottom: 5em;
padding: 2.5em;
`;

const Section = styled.section`
  border-top: solid 2px #b7b28a;
  background:#272727;
  min-height: 400px;
  padding: 2.5em;
`;

const SectionHeader = styled.div`
font-family: 'Playfair Display', serif;
width: 100%; 
text-align: center; 
border-bottom: 2px solid #d0cba4; 
line-height: 0.1em;
margin: 10px 0 20px; 
color: #d0cba4;
line-height: 0;
font-size: 2.5rem;
word-break: break-word;
margin-top: 0.5em;
margin-bottom: 1.25em;

span { 
  background: #272727;
    /* border: solid; */
 padding:0 10px; 
 margin-left:30px;
}
`;

const Header = styled.div`
font-family: 'Playfair Display', serif;
  width: 100%; 
text-align: center; 
border-bottom: 2px solid #d0cba4; 
line-height: 0.1em;
margin: 10px 0 20px; 
color: #d0cba4;
line-height: 0;
font-size: 2.5rem;
word-break: break-word;
margin-top: 0.5em;
margin-bottom: 1.25em

span { 
  background: #3f3f3f;
  border: solid;
  padding:0 10px; 
}
`;

// const Container = styled.container`
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 5em;
//     margin-bottom: 5em;
//     padding: 2.5em;
//   `;



export default class NewsIndexPage extends React.Component {
  render() {

     // console.log(this.props)

    return (
      <Layout location={this.props.location}>

         


<Container>
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
              <Header>
                <span>
                  FEATURED NEWS
                </span>
                
              </Header>
              <NewsRoll />
           
              </Fade> 
              
   
            </div>
          </div>

       



        </Container>


        <Section> <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
            <SectionHeader>
              <span>NEWS</span>
                 
                </SectionHeader>
              <NewsRoll />
             
              </Fade> 
              
   
            </div>
          </div></Section>
     
{/*      
       <div className="container is-fluid">

            <Fade>
             <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
               News
             </h2>

             <NewsRoll />
            
             </Fade> 
   

      
           
  
     
       </div>
  */}
  
   



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
