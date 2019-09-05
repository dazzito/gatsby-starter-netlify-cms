import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import "./transitions.css";

import { StickyContainer, Sticky } from 'react-sticky';

import { CSSTransition } from "react-transition-group";


import { InView } from 'react-intersection-observer'

import styled from "styled-components";
import { invoke } from "q";

// const Item = styled.li`
//   display: inline-block;
//   text-align: center;
//   cursor: pointer;
//   transition: all 0.25s;
//   margin: 0;
//   padding: 40px 10px;
//   font-weight: bold;
//   font-size: 20px;
//   user-select: none;
//   color: ${props => (props.selected ? "#07689f" : "inherit")};
//   border-top: 5px solid ${props =>
//     props.selected ? "#ff7e67" : "transparent"};
// `;

const Item = styled.li`
  user-select: none;
  /* color: ${props => (props.selected ? "#ffca64" : "beige")}; */
  display: inline-block;
  padding-right: 17.5px;

 
`;


const Statement = ({sectionId, changeSection}) => (
  <InView onChange={(inView, entry) => {changeSection(inView, sectionId, entry)}} > 
    {({ inView, ref, entry }) => (
      <div>
        {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
      
              <h1 ref={ref} className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary " style={{paddingTop:50}}>
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
                      paddingTop:70
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
      <StickyContainer>



<section
        className="hero-2"
      >

        <div className="container">

     
         <div className="column is-12" style={{marginBottom:600}}>
      
   
                <div style={{ color: "#ffffffd9", fontSize: 90, marginTop: 20}}>
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

      
             <Sticky topOffset={244} disableCompensation >{({ style, isSticky }) => 
        <div style={{...style,
         marginBottom: isSticky ? '0px' : '0px',
         position: isSticky ? 'fixed' : 'relative',
         top: isSticky ? 126 : 0, 
         zIndex: 999
         }}>    <div
         style={{height:25, background:'#232323'}}
       >  <div className="container"> 
              
              
              
              
               <Item  className="scthead">
                [ LOGO ] 
               </Item>
      
         
     
               <Item  className="scthead" style={{ color: this.state.sectionId == 0 ? '#ffca64' : '#dfdfdf'}}>
               OUR MISSION, VISION & VALUES
               </Item>
 
    
           <Item className="scthead" style={{ color: this.state.sectionId == 1 ? '#ffca64' : '#dfdfdf'}}>
           OUR HISTORY
           </Item>

           <Item className="scthead" style={{ color: this.state.sectionId == 2 ? '#ffca64' : '#dfdfdf'}}>
           CLIENTS
           </Item>

           <Item className="scthead" style={{ color: this.state.sectionId == 3 ? '#ffca64' : '#dfdfdf'}}>
           NEWS
           </Item>
        
 
         </div> 
      </div>
        </div>}</Sticky>

          
      

      <section
        className="section section--gradient hero"
        style={{ paddingTop: 0, height:3200}}
      >
        <div className="container">

   <Statement sectionId={0} changeSection={this.handleSectionChange}/>  
    
    <Fade>
    <div className="landingimgph" style={{height:500}}></div>
    </Fade>
   
   <History sectionId={1} changeSection={this.handleSectionChange}/>  

   <Fade>
    <div className="landingimgph" style={{height:250}}></div>
    </Fade>

    <Fade>
   <Client sectionId={2} changeSection={this.handleSectionChange}/> 
     </Fade>
     
     
      {/* <Fade>
            <div className="column is-10" >
           </div>
            </Fade>
     */}

 
      {/* <Fade bottom>
              <div className="column is-10">
                <div>
                  <h1
                    style={{
                      color: "#ffffffd9",
                      fontSize: 45,
                      marginBottom: "1.5rem",
                      paddingTop:70
                    }}
                  >
                    “ LAWS ARE ONLY AS GOOD AS THOSE THAT ENFORCE THEM ”
                  </h1>

                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
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
            

            
            </div>           
            </Fade>
 

  */}
        </div>
      </section>
      </StickyContainer>
    );
  }
};

export default Landing;
