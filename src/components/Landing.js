import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import "./transitions.css";

import { StickyContainer, Sticky } from 'react-sticky';
import { ScrollingProvider, Section,SectionLink} from "react-scroll-section";
import { CSSTransition } from "react-transition-group";

import styled from "styled-components";

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
  color: ${props => (props.selected ? "#ffca64" : "beige")};
  display: inline-block;
  padding-right: 17.5px;

 
`;



const Landing = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0,
      slides: [0, 1],
      showButton: ["Learn about us", "Learn about us"]
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

  render() {  
    return (
      <StickyContainer>
      <section
        className="section section--gradient hero"
        style={{ paddingTop: 0, height:3200}}
      >
        <div className="container">
       
        <ScrollingProvider scrollBehavior="smooth">

      <div style={{position:'fixed', zIndex:999}}>
      <SectionLink section={"landing"}>
         {link => (
               <Item  className="scthead" onClick={link.onClick} selected={link.isSelected}>
                [ LOGO ] 
               </Item>
             )}
         
         </SectionLink>

      <SectionLink section={"s1"}>
         {link => (
               <Item  className="scthead" onClick={link.onClick} selected={link.isSelected}>
               OUR MISSION, VISION & VALUES
               </Item>
             )}
         
         </SectionLink>
         
         <SectionLink section={"s2"}>
         
         {link => (
           <Item className="scthead" onClick={link.onClick} selected={link.isSelected}>
           OUR HISTORY
           </Item>
         )}
         </SectionLink>
      </div>
         <Section id="landing" >
      <div className="column is-10" style={{marginBottom:600}}>
      
   
                <div style={{ color: "#ffffffd9", fontSize: 90, marginTop: 20}}>
                  “ THE PEOPLE’S GOOD IS THE HIGHEST LAW ”
                </div>
              

                <div className="column is-10 slide-relative">
                <SectionLink section={"s1"}>
                {link => (
               <div  className="btn" onClick={link.onClick} selected={link.isSelected}>
               Learn about us.
               </div>
             )}
             </SectionLink>
            {/* <Link className="btn" to="/" onClick={this.handleClick}>
              {this.state.showButton[this.state.show]}
            </Link> */}
            
          </div>
        </div> 
        </Section>
     
        <Fade>

      <Sticky topOffset={986} >{({ style, isSticky }) => <div style={{...style,
         marginBottom: isSticky ? '0px' : '0px',
         position: isSticky ? 'fixed' : 'relative',
         top:86,
         zIndex: 999
         }}>   <div className=""  > 
         
       

{/* <SectionLink section={"s0"}>

      {link => (
        
        <Link className="btn" to="/" onClick={link.onClick} selected={link.isSelected}>
        LANDING
        LANDING
      </Link>
  )}

</SectionLink> */}


   
  </div>
</div>}</Sticky>
</Fade>
    



      <Section id="s1" style={{marginTop:130}}>
      <Fade>
            <div className="column is-10" style={{marginBottom:500}}>
                <div>
              
                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary " style={{paddingTop:50}}>
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
            </div>
            </Fade>
      </Section>

      <Section id="s2">
      <Fade bottom>
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
      </Section>

          </ScrollingProvider>
     



            <div className="slide-container">

            
           
         
            </div>

         

          

          {/* <Fade when={this.state.show}>
         </Fade> */}
        </div>
      </section>
      </StickyContainer>
    );
  }
};

export default Landing;
