import React , { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../layouts";
import Features from "../components/Features";
import NewsRoll from "../components/NewsRoll";
import ContactForm from "../components/ContactForm";
import Fade from "react-reveal/Fade";

import Landing from "../components/Landing";

import { useInView } from 'react-intersection-observer'

import Content, { HTMLContent } from "../components/Content";

import ReactMarkdown from "react-markdown"

import styled from "styled-components"

import { StickyContainer, Sticky } from 'react-sticky';




import { InView } from 'react-intersection-observer'

const Container =  styled(StickyContainer)`
margin-left: auto;
margin-right: auto;
margin-bottom: 5em;
padding: 2.5em;
`;


const Story = styled.div`
  margin-Bottom: 100vh;

`;

const Item = styled.li`
  user-select: none;
  /* color: ${props => (props.selected ? "#c9b96e " : "beige")}; */
  display: inline-block;
  padding-right: 17.5px;

`;



const Section = styled.section`
    
  padding: 2rem 1.5rem;
    padding-left: 15em;
    padding-right: 15em;
    background: #000000bf;  
    box-shadow: 1px 1px 9px 0px #a0a0a0;
    /* border: solid #c7c7c7 2px; */
    /* margin-top: 50px; */
    text-align: center;

`;
  


export const IndexPageTemplate = class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: 0,
      slides: [0, 1],
      showButton: ["Learn about us", "Learn about us"],
      sectionId: -1,
      prevSection: -1
    };
  
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      show:
        this.state.show == this.state.slides.length - 1
          ? 0
          : this.state.show + 1
    });
  }


  changeSection = (inView, sectionId, entry) => {
  

    if(inView && sectionId !== this.state.sectionId ){
      this.setState({sectionId})
    } 
    
  }

  render(){

  return(
  <>


<Container>





          <div className="columns">
            <div className="column is-10 is-offset-1">

            <div style={{ color: "#868686;", fontSize: 90, marginTop: 20}}>
                  {this.props.motto}
                </div>

           
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
                {this.props.heading}
              </h2>
              {this.props.subheadding}

                  {this.props.stories &&
          this.props.stories.map((item, index) => (

            <Fade>
<InView onChange={(inView, entry) =>  {this.changeSection(inView, index, entry)}} > 
    {({ inView, ref, entry }) => (
         
          <Story ref={ref}>

      <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
        {item.heading}
      </h2>

      <ReactMarkdown source={item.content}/>
      </Story>
   
 
    )}
  </InView>

  </Fade> 

     
 

        
       
          
          ))}
             

             <Sticky topOffset={566}  >{({ style, isSticky }) => 
        <div style={{...style,
         marginBottom: isSticky ? '0px' : '0px',
         position: isSticky ? 'fixed' : 'relative',
         top: isSticky ? 0 : 0, 
        //  top: isSticky ? 126 : 0, 
         zIndex: 999
         }}>    <div
         style={{height:35, background:'#232323', textAlign: 'end',
         paddingTop: 5}}
       >  <div className="container"> 
              
              
              
              
               <Item  className="scthead">
                [ LOGO ] 
               </Item>
      
         
     
               <Item  className="scthead" style={{ color: this.state.sectionId == 0 ? '#d0cba4 ' : '#dfdfdf'}}>
               OUR MISSION, VISION & VALUES
               </Item>
 
    
           <Item className="scthead" style={{ color: this.state.sectionId == 1 ? '#d0cba4 ' : '#dfdfdf'}}>
           OUR HISTORY
           </Item>

           <Item className="scthead" style={{ color: this.state.sectionId == 2 ? '#d0cba4 ' : '#dfdfdf'}}>
           CLIENTS
           </Item>

           <Item className="scthead" style={{ color: this.state.sectionId == 3 ? '#d0cba4 ' : '#dfdfdf'}}>
           NEWS
           </Item>
        
 
         </div> 
      </div>
        </div>}</Sticky>
   
            </div>
          </div>
        </Container>

  


 

{/*       
  
    <section
        className="section section--gradient hero"
        style={{height:700}}
      >
        <div className="container">
          
            <div className="columns">
            <Fade right delay={350}>
            <div className="column is-10 hero-content" >
        
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
          Our Mission
        </h1>
        <div className="has-text-white is-size-4">
        <p style={{color:'#b9b9b9'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 
        </div>

        

        </div>
        </Fade>


            </div>
         
        </div>
    </section>

 

      <section 
        className="section section--gradient hero"
        style={{height:600}}
       
      >
        <div className="container">
          
            <div className="columns">
           

           <Fade left delay={750}>
            <div className="column is-10 hero-content">
        
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
          Our Vision
        </h1> 
        </div>
        </div>
        </Fade>


            </div>
         
        </div>
      </section>
     
   
   
 */}



<NewsRoll />


   
  
      {/* <section style={{background: '#232323'}}>
        <div className="container" style={{zIndex: 999, background: '#232323'}}>
          <div className="section" >
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2" style={{color:'white'}}>
                Latest news
              </h3>
              <div className="section-break"></div>
             
            </div>
          </div>
        </div>
      </section> */}
   
    
  </>
)}};

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array
//   })
// };

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout> 
      <IndexPageTemplate
        
     
        motto={frontmatter.motto}
        heading={frontmatter.heading}
        subheadding={frontmatter.subheadding}
        motto={frontmatter.motto}
        stories={frontmatter.stories}
       
   
      />
    </Layout>
  );
};

// IndexPage.propTypes = {
//   data: PropTypes.shape({ 
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   })
// }; 

export default IndexPage;

export const pageQuery = graphql` 
  query IndexPageTemplate ($locale: String) {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" }, locale: { eq: $locale } })  {
      html
      frontmatter {
        templateKey
        heading
        subheading, 
        motto,
        stories {
          heading,
          content

        }
      }
    }
  }
`;


// image1 {
//   childImageSharp {
//     fluid(maxWidth: 2048, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }