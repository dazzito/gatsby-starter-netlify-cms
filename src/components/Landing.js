import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import { CSSTransition } from "react-transition-group";

import "./transitions.css";

import { StickyContainer, Sticky } from 'react-sticky';




import { InView } from 'react-intersection-observer'

import styled from "styled-components";
import { invoke } from "q";

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


const Statement = ({sectionId, changeSection}) => (
  <InView onChange={(inView, entry) => {changeSection(inView, sectionId, entry)}} > 
    {({ inView, ref, entry }) => (
      <div>
        {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
      
              <h1 ref={ref} className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary " style={{paddingTop:0}}>
                OUR VISION
              </h1>
              <div className="has-text-white is-size-4">
                <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                OUR MISSION
              </h1>
              <div className="has-text-white is-size-4">
                <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>

              <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                OUR VALUE
              </h1>
              <div className="has-text-white is-size-4">
                <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
      </div>
    )}
  </InView>
)

const History = ({sectionId, changeSection}) => (
  <InView onChange={(inView, entry) => {changeSection(inView, sectionId, entry)}} > 
    {({ inView, ref, entry }) => (
      <div>
          <h1
                    style={{
                      color: "#ffffffd9",
                      fontSize: 45,
                      marginBottom: "1.5rem",
          
                    }}
                  >
                    “ LAWS ARE ONLY AS GOOD AS THOSE THAT ENFORCE THEM ”
                  </h1>

                  <h1 ref={ref} className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                    OUR HISTORY
                  </h1>
                  <div className="has-text-white is-size-4">
                    <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                 
      </div>
    )}
  </InView>
)


const Client = ({sectionId, changeSection}) => (
  <InView onChange={(inView, entry) => {changeSection(inView, sectionId, entry)}} > 
    {({ inView, ref, entry }) => (
      <div>
         

                  <h1 ref={ref} className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                    OUR CLIENTS
                  </h1>
                  <div className="columns is-multiline">
                    <div className="is-parent column is-12">
                        <div className="clientsph"></div>
                        <div className="clientsph"></div>
                        <div className="clientsph"></div>
                        <div className="clientsph"></div>
                        <div className="clientsph"></div>
                        <div className="clientsph"></div>
                        <div className="clientsph"></div>
                        <div className="clientsph"></div>
                    </div>
                  </div>
                 
      </div>
    )}
  </InView>
)



const LandingContainer = styled(StickyContainer)`
  background: url("/img/waranont-joe-EZwBNdnIlpo-unsplash.jpg");
  background-attachment: fixed;
  background-size: cover; 
  background-position: bottom;
`;



const Landing = class extends React.Component {


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


  handleSectionChange = (inView, sectionId, entry) => {
  

    if(inView && sectionId !== this.state.sectionId ){
      this.setState({sectionId})
    } 
    
  }

  // handleSectionChange(sectionId){
  //   this.setState({sectionId})
  // }



  render() {  

    

    return (
      <LandingContainer >



<section
        className="hero-2"
      >

        <div className="container">

     
         <div className="column is-12" style={{marginBottom:600}}>
      
   
                <div style={{ color: "rgba(63, 60, 60, 0.85)", fontSize: 90, marginTop: 20}}>
                  “ THE PEOPLE’S GOOD IS THE HIGHEST LAW ”
                </div>
              

                <div className="column is-10 slide-relative">
             
            {/* <Link className="btn" to="/" onClick={this.handleClick}>
              {this.state.showButton[this.state.show]}
            </Link> */}
            
          </div>
        </div> 
        </div>
        </section>

        {/* topOffset={444}  */}
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

          

        
        <Section >
        <Fade right>
<Statement sectionId={0} changeSection={this.handleSectionChange}/>  
</Fade>
</Section>
       
      
<Fade>
    <div className="landingimgph" style={{height:920}}></div>
    </Fade>

      
        <Section>
        <Fade left>
   
        <History sectionId={1} changeSection={this.handleSectionChange}/>  
        </Fade>
        </Section>


        <Fade>
    <div className="landingimgph" style={{height:460}}></div>
    </Fade>


        <Fade>
        <Section style={{marginBottom: 170}}>

   
        <Client sectionId={2} changeSection={this.handleSectionChange}/> 

          </Section>
          </Fade>



        
    


    
      </LandingContainer>
    );
  }
};

export default Landing;
