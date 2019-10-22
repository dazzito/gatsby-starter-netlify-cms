import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../layouts';
import Features from '../components/Features';
import NewsRoll from '../components/NewsRoll';
import ContactForm from '../components/ContactForm';
import Fade from 'react-reveal/Fade';

import Landing from '../components/Landing';

import { useInView } from 'react-intersection-observer';

import Content, { HTMLContent } from '../components/Content';

import ReactMarkdown from 'react-markdown';

import styled, { keyframes } from 'styled-components';

import { StickyContainer, Sticky } from 'react-sticky';

import Color from 'color';

import Team from '../pages/team';

import {darken} from 'polished'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { InView } from 'react-intersection-observer';

import ReactPageScroller from "react-page-scroller";

import root from 'window-or-global'
 

const Container = styled(StickyContainer)`
	margin-left: auto;
	margin-right: auto;
	max-width: 1366px;
	margin-bottom: 5em;
	padding: 2.5em;
`;

const IndexWrapper = styled(StickyContainer)`
background: white;
color: #212121;

`;

const Story = styled.div`
	margin: 1.5em;
	max-width: 1300px;
`;

const Item = styled.li`
  user-select: none;
  /* color: ${props => (props.selected ? '#c9b96e ' : 'beige')}; */
  display: inline-block;
  padding-right: 17.5px;

`;

const Layer1 = styled.div`
	height: ${props => (props.height ? props.height * 2.1 + 'px' : '100%')};
	background: ${props => (props.background ? props.background : 'white')};

	top: ${props => (props.top ? props.top * 2.1 + 'px' : '0px')};

	width: 100%;

	transform: translateZ(-1px) scale(2.1);

	left: 0;
	bottom: 0;
	right: 0;
`;

const Section = styled.section`
	padding: 2rem 1.5rem;
	padding-left: 15em;
	padding-right: 15em;
	background: #000000bf;
	box-shadow: 1px 1px 9px 0px #a0a0a0;
	/* border: solid #c7c7c7 2px; */
	/* margin-top: 50px; */
	text-align: left;
`;

//#region cardheader recipe

{
	/* <CardHeaderFrame>

  <CardHeaderContent>

  </CardHeaderContent>
</CardHeaderFrame> */
}

const CardHeaderFrame = styled.div`
	background: #ffffff;
	background: url('/img/marble-white.jpg');

	padding: 0.4em;
	width: fit-content;
	/* border: solid 2px #cfcaa3; */
	margin: 5em;
`;

const CardHeaderContent = styled.div`
	border: solid 2px #d0cba4;
	padding: 0.5em;

	h1,
	h2 {
		font-family: 'Playfair Display', sans-serif;
		font-size: 1.5rem;
		color: #d0cba4;
		font-weight: bolder;
	}
`;

////#region

const StoryContainer = styled.div`

	text-align: center;
	color: #212121;
	/* padding-top: 126px; */
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;

	/* background: #ffffff;
    box-shadow: 0px 0px 3px 0px black; */
	/* margin-bottom: 100vh; */

	/* 
    *{
      max-width: 690px;
    } */

	h1 {
		color: whitesmoke;
	}
`;

const ClientSection = styled(StoryContainer)`
	/* background: white; */
	margin: 0px;
	* {
		max-width: unset;
	}
`;

const ParallaxContainer = styled.div`
	display: initial;

	/* position: relative; */
	width: 100%;
	min-height: 100vh;
	transform-style: preserve-3d;

	* {
		position: absolute;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: block;
		background: url('/img/marble-white.jpg') top center;
		background-size: cover;
		transform: translateZ(-1px) scale(2.1);
		min-height: 100%;
		z-index: -2;
	}
`;

const HeroContainer = styled.div`

	align-items: center;
	display: flex;
	position: relative;
	background-attachment: fixed;
	background:url("/img/sky.jpg");
	/* background:  ${props => props.background ? `url(${props.background})`: "red" }; */
	background-size: cover;
	background-position: bottom;
	height: 100vh;

	align-items: center;
  
    display: flex;
    justify-content: center;
    flex-direction: column;



	h1 {
		font-size: 3.2rem;
		color: #d0cba4;
	}

	h2 {
		font-size: 2.4rem;
		color: #474747;;
	}

	img {
		height: auto;
		max-width: 620px;
		padding: 10em;
	}
`;

// .fa-angle-up
//   position: absolute
//   bottom: 1px
//   right: 30px
//   color: black
//   font-size: 1em

const ClientsWrapper = styled.div`
	flex-wrap: wrap;
	max-width: 1200px;
	justify-content: center;
  margin-bottom: 1.5em;
`;

const Client = styled.div`
	border: solid white 1px;
	border-radius: 4px;
	width: 200px;
	height: 200px;
	margin: 20px;
	display: inline-block;
	
	*{
		width: 200px;
		
	}
`;

const ArrowAnimation = keyframes`
  0% {
    bottom: 0
  }
  50% {
    bottom: 10px
  }
  100% {
    bottom: 0
  } 
`;

const Arrow = styled.a`
	position: relative;

	img {
		animation: ${ArrowAnimation} 2s linear infinite;
		position: absolute;
		bottom: 0;
	}
`;

const Carousel = styled(AliceCarousel)`
    box-sizing: border-box;
    position: relative;
    margin-left: 1em;

`;

const HeroCarousel = styled(AliceCarousel)`
    box-sizing: border-box;
    position: relative;
    height: 100vh;
	

`;



const HeroCarouselWrapper = styled(AliceCarousel)`
    box-sizing: border-box;

	display: flex;
	height: 100vh;
	text-align: center;
	justify-content: center;


	
`;

const HeroImage = styled.img`
	 max-width: 100% !important;
	 padding: 0px !important;
`;




const HeroButton = styled.h2`
	position: absolute;
	bottom: -150px;
	left: 50%;
/* 	
	bottom: 0;
	right: 0; */
	text-align: right;


    /* color: #d0cba4; */
    color: ${props => (props.color ? props.color : 'black')};
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: 'Playfair Display';
    word-break: break-word;

    font-weight: 700 !important;

    transition: all 0.2s ease 0s;

    &:hover, &:focus {
    color: ${props => (props.color ? darken(0.10, props.color) : 'black')};
    transform: translate(0%, -10%);
    
   
  }

  &:hover:before{
      top: 0;	
	border: 1px solid black;
	border-top: 0;
	border-bottom: 0;
  }
  
  &:hover:after{
    border: 1px solid black;
    bottom: 0;
	height: 0;
  }

`;




const StatementButton = styled.h2`

margin-bottom: 1.5rem;
    /* color: #d0cba4; */
    color: ${props => (props.color ? props.color : 'black')};
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: 'Playfair Display';
    word-break: break-word;

    font-weight: 700 !important;

    transition: all 0.2s ease 0s;

    &:hover, &:focus {
    color: ${props => (props.color ? darken(0.10, props.color) : 'black')};
    transform: translate(0%, -10%);
    
   
  }

  &:hover:before{
      top: 0;	
	border: 1px solid black;
	border-top: 0;
	border-bottom: 0;
  }
  
  &:hover:after{
    border: 1px solid black;
    bottom: 0;
	height: 0;
  }

`;


const MottoContainer = styled.div`
	width: 100%;
	position: absolute;
	z-index: 1;

	
`;

const NewsSection = styled(StoryContainer)`
text-align: left;
background: #242424;
*{
	max-width:1366px;
}
/* 
  	
	align-items: flex-start;

	div{
		margin-left: auto;
		margin-right: auto;
	}

	 */



`;



const BackgroundCarousel = (images) => {
	const handleOnDragStart = e => e.preventDefault();

	const stagePadding = {
		paddingLeft: 0,
		paddingRight: 0,
	};

	const responsive = {
		0: {
			items: 1,
		},
		1024: {
			items: 4,
		},
	};

	return (
		<Carousel mouseDragEnabled buttonsDisabled dotsDisabled stagePadding={stagePadding} responsive={responsive}>


				{images.map(item => (
						<img src={item} onDragStart={handleOnDragStart} />
				
					))}
		
		
		</Carousel>
	);
};


export const IndexPageTemplate = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: 0,
			slides: [0, 1],
			showButton: ['Learn about us', 'Learn about us'],
			sectionId: -1,
      prevSection: -1,
      

      toggleVision: false,
      toggleMission: false,
	  toggleValue: false,
	  


	  slide: 0

	  
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			show: this.state.show == this.state.slides.length - 1 ? 0 : this.state.show + 1,
		});
	}

	changeSection = (inView, sectionId, entry) => {
		if (inView && sectionId !== this.state.sectionId) {
			this.setState({ sectionId });
		}
	};


	changePresentation(){
		let slide = this.state.slide + 1;
		if (slide > 2) {
			slide = 0;
		}
		this.setState({slide:slide})
	
	}



	componentDidMount(){
		setInterval(this.changePresentation.bind(this), 7000);
	}



	render() {

		// const slideBackground = ["/img/sky.jpg", "/img/bg1-old.jpg", "/img/bg3.jpg"]

		return (
			<IndexWrapper>
				
				<HeroContainer>
			{/* <HeroContainer background={slideBackground[this.state.slide]}> */}

			<Fade delay={500} >


</Fade>
<MottoContainer>


				<Fade when={this.state.slide == 0}>
	
<h1 style={{textAlign: 'center', position: 'absolute', width: '100%',background: '#000000c4', fontFamily: 'Playfair Display',
    boxShadow: 'inset 0px 1px 4px 4px #252525' }}>Practical wisdom, trusted advice</h1>


	



	
</Fade>


<Fade when={this.state.slide == 1} >
<h1 style={{textAlign: 'center', position: 'absolute', width: '100%',background: '#000000c4', fontFamily: 'Playfair Display',
    boxShadow: 'inset 0px 1px 4px 4px #252525' }}>"The people's good is the highest law." - Cicero</h1>



}


</Fade>

<Fade when={this.state.slide == 2} >
<h1 style={{textAlign: 'center', position: 'absolute', width: '100%',background: '#000000c4',  fontFamily: 'Playfair Display',
    boxShadow: 'inset 0px 1px 4px 4px #252525' }}>Experienced. Driven. Effective</h1>

	

</Fade>

<HeroButton >Learn more</HeroButton>



</MottoContainer>




{/* 
				<HeroCarousel  
		duration={750}
		buttonsDisabled 
		dotsDisabled 
		stagePadding={{
			paddingLeft: 0,
			paddingRight: 0,
		}}
		// fadeOutAnimation={true}
		autoPlay={true}
		autoPlayInterval={5000}
		onSlideChange={(e) => this.setState({slide:e.slide})}

		responsive={{
			0: {
				items: 3,
			}
		}}

		>


		
		<img style={{height:'100vh', width:'100vw', padding:'0px', maxWidth:'unset'}} src={"/img/sky.jpg"}/>
		<img  style={{height:'100vh', width:'100vw', padding:'0px', maxWidth:'unset'}} src={"/img/bg1-old.jpg"}/>
		<img  style={{height:'100vh', width:'100vw', padding:'0px', maxWidth:'unset'}} src={"/img/marble-white.jpg"}/>


		</HeroCarousel>

	 */}

		
			

					{/* <img src="/img/logot.png" /> */}
				</HeroContainer>

				{/* 
<CardHeaderFrame>

  <CardHeaderContent>
    <h2>
    Our History
    </h2>

    <p></p>
    
  </CardHeaderContent>
</CardHeaderFrame> */}

				{/* 
<ParallaxContainer>
  <Layer1 height={400} top={0} background={'/img/bg3.jpg'}> </Layer1>
  

</ParallaxContainer> */}

				<Sticky topOffset={root.innerHeight}>
					{({ style, isSticky }) => (
						<div
							style={{
								...style,
								marginBottom: isSticky ? '0px' : '0px',
								position: isSticky ? 'fixed' : 'relative',
								top: isSticky ? 0 : 0,
								//  top: isSticky ? 126 : 0,
								zIndex: 999,
							}}
						>
							{' '}
							<div style={{ height: 35, background: 'white', textAlign: 'end', paddingTop: 5 }}>
								{' '}
								<div className="container">
									{/*               
               <Item  className="scthead">
                [ LOGO ] 
               </Item>
       */}

									<Item
										className="scthead"
										style={{ color: this.state.sectionId == 0 ? '#d0cba4 ' : '#212121' }}
									>
										ABOUT US
									</Item>

									<Item
										className="scthead"
										style={{ color: this.state.sectionId == 1 ? '#d0cba4 ' : '#212121' }}
									>
										STATEMENTS
									</Item>

									<Item
										className="scthead"
										style={{ color: this.state.sectionId == 2 ? '#d0cba4 ' : '#212121' }}
									>
										SERVICES
									</Item>

									<Item
										className="scthead"
										style={{ color: this.state.sectionId == 3 ? '#d0cba4 ' : '#212121' }}
									>
										TEAM
									</Item>

									<Item
										className="scthead"
										style={{ color: this.state.sectionId == 4 ? '#d0cba4 ' : '#212121' }}
									>
										CLIENTS
									</Item>

									<Item
										className="scthead"
										style={{ color: this.state.sectionId == 5 ? '#d0cba4 ' : '#212121' }}
									>
										NEWS
									</Item>
								</div>
							</div>
						</div>
					)}
				</Sticky>

				

				{/* <Fade delay={200}>
					<StoryContainer style={{ height: '100px' }}>
						<Story>
							<h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary" style={{fontFamily:'serif'}}>
								Company background
							</h2>

						</Story>
					</StoryContainer>
				</Fade> */}

				<Fade delay={200}>
					<StoryContainer style={{ background: 'white', color: '#212121' }}>
						<InView
							onChange={(inView, entry) => {
								this.changeSection(inView, 0, entry);
							}}
						>
							{({ inView, ref, entry }) => (
								<Story ref={ref}>


								
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											textAlign: 'left',
											padding: '1.5em',
											flexWrap: 'wrap-reverse',
										
										}}
									>
										<div style={{ flex: 1, minWidth:300,margin: '1.5em'}}>
											<img src={this.props.backgroundSectionImage} />
										</div>

										<div style={{ padding: '1.5em', minWidth: '550px', flex: 1,borderLeft: 'solid 7px #f6f6f6',margin: '1.5em'}}>
										<h2 className="title is-size-2 is-bold-light text-tone-primary" style={{marginTop: '1.5em', fontFamily:'Playfair Display', fontWeight: 'normal',}}>
										{this.props.backgroundSectionHeading}
									</h2>

											<ReactMarkdown source={this.props.backgroundSectionContent} />
											<button class="btn2 draw-border left">Read more</button>
										</div>
									</div>
								</Story>
							)}
						</InView>

						{/* {BackgroundCarousel(this.props.gallery)} */}


					
					</StoryContainer>
				</Fade>















				{/* 
            {this.props.stories &&
          this.props.stories.map((item, index) => (

            <Fade  delay={200}>





              <StoryContainer style={{height:'100vh', background:  Color('#212121').lighten(0.5*index)}}>

              <InView onChange={(inView, entry) =>  {this.changeSection(inView, index, entry)}} > 
    {({ inView, ref, entry }) => (
         
          <Story ref={ref}>

      <h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary">
        {item.heading}
      </h2>



      <div style={{display: 'flex', flexDirection: 'row', textAlign: 'left', padding:'1.5em', flexWrap: 'wrap-reverse'}}>
        <div style={{flex:1}}>
        <img src="https://dummyimage.com/600x400/1c1c1c/ffffff.png"/>
        </div>
      
      <div style={{padding: '1.5em', minWidth: '550px', flex: 1}}>
      <ReactMarkdown source={item.content}/>

      </div>
      


      </div>
      
     
      
      </Story>
   
 
    )}

    
  </InView>



{BackgroundCarousel()}



              </StoryContainer>





  </Fade> 

     
 

        
       
          
          ))}
 
 */}

				<Fade>
					<StoryContainer style={{ height: '600px'}}>
						<InView
							onChange={(inView, entry) => {
								this.changeSection(inView, 1, entry);
							}}
						>
							{({ inView, ref, entry }) => (
               
								<Story ref={ref}>

                  {/* <Fade delay={200}>
									<h2 className="title is-size-3 has-text-weight-bold is-bold-light text-tone-primary">
										Our Statement
									</h2>
                  </Fade> */}

                  <Fade delay={400}>
                  <StatementButton color="#d0cba4" onClick={()=> this.setState({toggleVision:!this.state.toggleVision})}>
                    Vision
                  </StatementButton>
                  </Fade>

                  <Fade delay={800} collapse >

                  <div style={{maxWidth: '500px',padding:'1em', marginBottom: '2em'}}>
                  {/* <p>to provide a high quality, creative, and result – oriented legal team to individuals and businesses, and serve as a primary resource and partner in all aspects of clients’ business growth and development.</p>
                  */}
                  <ReactMarkdown source={this.props.vision}/>


                  </div>

                  </Fade>


                  <Fade delay={1200}>

                  <StatementButton color="#d0cba4"  onClick={()=> this.setState({toggleMission:!this.state.toggleMission})}>
                    Mission
                  </StatementButton>
                  </Fade>

                  <Fade delay={1600} collapse>

                    <div style={{maxWidth: '500px',padding:'1em', marginBottom: '2em'}}>
                    {/* <p>to provide a high quality, creative, and result – oriented legal team to individuals and businesses, and serve as a primary resource and partner in all aspects of clients’ business growth and development.</p>
                    */}
                    <ReactMarkdown source={this.props.mission}/>
                    

                    </div>
                   
                  </Fade>

                  <Fade delay={2000}>
                  <StatementButton color="#d0cba4" onClick={()=> this.setState({toggleValue:!this.state.toggleValue})}>
                    Value
                  </StatementButton>
                  </Fade>

                  <Fade delay={2400} collapse>

<div style={{maxWidth: '500px',padding:'1em', marginBottom: '2em'}}>
{/* <p>to provide a high quality, creative, and result – oriented legal team to individuals and businesses, and serve as a primary resource and partner in all aspects of clients’ business growth and development.</p>
*/}
<ReactMarkdown source={this.props.value}/>


</div>

</Fade>




								</Story>
                
                	
							)}
						</InView>
					</StoryContainer>
				</Fade>

		
    

				<Fade delay={200}>
					<StoryContainer style={{ background: '#242424', color: 'white' }}>
						<InView
							onChange={(inView, entry) => {
								this.changeSection(inView, 2, entry);
							}}
						>
							{({ inView, ref, entry }) => (
								<Story ref={ref}>


								
									<div
										style={{
											display: 'flex',
											flexDirection: 'row-reverse',
											textAlign: 'left',
											padding: '1.5em',
											flexWrap: 'wrap-reverse',
										}}
									>

										<Fade>
										<div style={{ flex: 1, minWidth:300}}>
											<img src="https://dummyimage.com/600x400/1c1c1c/ffffff.png" />
										</div>

										</Fade>
										

										<div style={{ padding: '1.5em', minWidth: '550px', flex: 1 }}>
										<h2 className="title is-size-2 is-bold-light text-tone-primary" style={{marginTop: '1.5em', fontFamily:'Playfair Display', fontWeight: 'normal',}}>
										{this.props.serviceSectionHeading}
									</h2>

											<ReactMarkdown source={this.props.serviceSectionContent} />

											<button class="btn2 draw-border left">Read more</button>
										</div>
									</div>
								</Story>
							)}
						</InView>

					


					
					</StoryContainer>
				</Fade>





    
    
    
				<Fade>
					<StoryContainer style={{ height: '100vh', background:'white'}}>
						<InView
							onChange={(inView, entry) => {
								this.changeSection(inView, 3, entry);
							}}
						>
							{({ inView, ref, entry }) => (
               
								<Story ref={ref}>

                  {/* <Fade delay={200}>
									<h2 className="title is-size-3 has-text-weight-bold is-bold-light text-tone-primary">
										Our Statement
									</h2>
                  </Fade> */}

                

				  <button class="btn2 draw-border  btn2--big btn2--gold">Meet our team.</button>
                  {/* <StatementButton color="#d0cba4">
                    Meet our team.
                  </StatementButton> */}
                  
               




								</Story>
                
                	
							)}
						</InView>
					</StoryContainer>
				</Fade>

    
	
    
    
    		<ClientSection>
					<InView
						onChange={(inView, entry) => {
							this.changeSection(inView, 4, entry);
						}}
					>
						{({ inView, ref, entry }) => (
							<Story ref={ref}>
								<Fade delay={200}>
									<h2 className="title is-size-2 is-bold-light text-tone-primary" style={{fontFamily:'Playfair Display', fontWeight: 'normal', marginTop:'0.75em'}}>
										Our Clients
									</h2>
								</Fade>

								<Fade delay={400} cascade>
									<ClientsWrapper>
										<Client><img src="/img/blc_logo.png" /></Client>
										<Client><img src="/img/blc_logo.png" /></Client>

										<Client><img src="/img/blc_logo.png" /></Client>
										<Client><img src="/img/blc_logo.png" /></Client>
										

										<Client><img src="/img/blc_logo.png" /></Client>
										<Client><img src="/img/blc_logo.png" /></Client>
										

										<Client><img src="/img/blc_logo.png" /></Client>
										<Client><img src="/img/blc_logo.png" /></Client>
										
										<Client><img src="/img/blc_logo.png" /></Client>
										<Client><img src="/img/blc_logo.png" /></Client>
										
									</ClientsWrapper>
								</Fade>
							</Story>
						)}
					</InView>
				</ClientSection>

				{/* {this.props.stories &&
          this.props.stories.map((item, index) => (

            <Fade  delay={200}>

              <StoryContainer>

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

              </StoryContainer>





  </Fade> 

     
 

        
       
          
          ))} */}

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

        <NewsSection>
		<InView
						onChange={(inView, entry) => {
							this.changeSection(inView, 5, entry);
						}}
					>
						{({ inView, ref, entry }) => (

		<Fade delay={200} cascade>
									<h2 ref={ref} className="title is-size-2 is-bold-light text-tone-primary" style={{fontFamily:'Playfair Display', textAlign:'left' , marginTop:'0.75em'}}>
										Latest News
									</h2>

									<NewsRoll style={{marginBottom: '5em'}} />
								</Fade>

          


			  )}
			  </InView>
        </NewsSection>

	

			

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
			</IndexWrapper>
		);
	}
};

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

const IndexPage = props => {
	console.log(props);
	const { frontmatter } = props.data.markdownRemark;
	const location = props.location;

	return (
		<Layout location={location}>
			<IndexPageTemplate
				backgroundSectionImage={frontmatter.backgroundSectionImage}
				backgroundSectionHeading={frontmatter.backgroundSectionHeading}
				backgroundSectionContent={frontmatter.backgroundSectionContent}
				statementSectionImage={frontmatter.statementSectionImage}
				vision={frontmatter.vision}
				mission={frontmatter.mission}
				value={frontmatter.value}
				serviceSectionImage={frontmatter.serviceSectionImage}
				serviceSectionHeading={frontmatter.serviceSectionHeading}
				serviceSectionContent={frontmatter.serviceSectionContent}
				gallery={frontmatter.gallery}
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
	query IndexPageTemplate($langKey: String) {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }, fields: { langKey: { eq: $langKey } }) {
			html
			frontmatter {
				templateKey
				heroImage
				backgroundSectionImage
				backgroundSectionHeading
				backgroundSectionContent
			
				statementSectionImage
				vision
				mission
				value
				serviceSectionImage
				serviceSectionHeading
				serviceSectionContent
			
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
