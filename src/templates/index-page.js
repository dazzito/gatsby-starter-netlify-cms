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

import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";



import {darken} from 'polished'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { InView } from 'react-intersection-observer';

import Masonry from 'react-masonry-css';

import ReactPageScroller from "react-page-scroller";

import root from 'window-or-global'

import Img from "gatsby-image"

import {Row, Col} from 'src/shared/styled'




const breakpointColumnsObj = {
	default: 3,
	1100: 2,
	700: 2,
	500: 2
  };
 

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


const AboutSection = styled.div`
width: 100%;

/* margin-left: auto;
    margin-right: auto;
    max-width: 1300px; */
	/* margin: 1.5em; */
	/* max-width: 1300px; */
`;

const Story = styled.div`
width: 100%;
/* padding: 0 6vw; */
/* margin-left: auto;
    margin-right: auto;
    max-width: 1300px; */
	/* margin: 1.5em; */
	/* max-width: 1300px; */
`;

const Gallery = styled.div`
	flex: 1;
	width: 100%;
	/* min-width: 300px; */
	flex-wrap: wrap;
	flex-direction: column;

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


const HeroBackgroundWrapper = styled.div`
	background-attachment: fixed;
	background:url("/img/sky.jpg");
	background-size: cover;
	background-position: bottom;
`;


const BackgroundWrapper = styled.div`
	background:  ${props => props.background ? `url(${props.background})`: "white" };

`;



const ClientSection = styled(StoryContainer)`
    border-top: solid rgb(33, 33, 33);
	min-height: 75vh

	background: #1b1b1b;
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




const ResponsiveContainer = styled.div`
max-width: 720px;
    min-width: 250px;
    flex: 1 1 0%;
    padding: 0px 2vw;
	text-align: center;
/* min-width: 250px;
margin-left: auto;
margin-right: auto;
padding: 0px 2vw;
width: fit-content;
flex: 1;

> * {
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
} */


`;



const StyledLink = styled(Link)`

`;

const HeroBox = styled.div`

max-width: 720px;

min-width: 250px;

flex: 1;
 padding: 2vw;

 /* &:hover & {
	color: #d0cba4;
	
 } */


`;

const HeroContainer = styled.div`
/* border-top: solid; */
    /* border-bottom: solid; */

	align-items: center;
	display: flex;
	position: relative;
	background-attachment: fixed;
	/* background: rgba(0, 0, 0, 0.77); */
	/* background: url("/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg"); */
	/* background:url("/img/sky.jpg"); */
	/* background: #1b1b1b; */
	/* background:  ${props => props.background ? `url(${props.background})`: "red" }; */
	background-size: cover;
	background-position: bottom;
	min-height: 40vh;

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

	justify-content: center;
	padding: 0 8vw;
	display: flex;
  /* margin-bottom: 1.5em; */
  /* margin-left: auto;
  margin-right: auto;
  max-width: 1300px; */
`;

const Client = styled.div`


	flex: 1;
	margin: 1em;
	display: inline-block;

	*{
		max-width: 240px;
		
	}

	@media (max-width: 768px) {
		*{
		max-width: 80px;
		
	}
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


const ImageWrapper = styled.div`
flex: 1;
	align-self: flex-start;
	padding: 5px;
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


const Statement = styled.div`

max-width: 720px;
    min-width: 250px;
    flex: 1 1 0%;
    padding: 0px 2vw;
	color: whitesmoke;
 
  /* min-width: 300px; */
  /* margin-left: auto;
  margin-right: auto; */
`;



const StatementButton = styled.h2`

margin-bottom: 0.5rem;
    /* color: #d0cba4; */
    color: ${props => (props.color ? props.color : 'black')};
 
  	text-align: left;
    line-height: 1.125;
    font-family: 'Playfair Display';
    word-break: break-word;
	color: whitesmoke;

   

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
background: #1b1b1b;
border-top: solid rgb(33, 33, 33);

/* *{
	max-width:1366px;
} */
/* 
  	
	align-items: flex-start;

	div{
		margin-left: auto;
		margin-right: auto;
	}

	 */



`;


const params = {
	slidesPerView: 3,
	spaceBetween: 0,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true
	},
	breakpoints: {
	  1024: {
		slidesPerView: 3,
		spaceBetween: 40
	  },
	  768: {
		slidesPerView: 1,
		spaceBetween: 30
	  },
	  640: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  320: {
		slidesPerView: 1,
		spaceBetween: 10
	  }
	}
  }


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

		console.log(this.props)
		

		// const slideBackground = ["/img/sky.jpg", "/img/bg1-old.jpg", "/img/bg3.jpg"]

		return (
			<IndexWrapper>
				
			
				<BackgroundWrapper background="/img/marble.jpg">
			
				<HeroContainer>
			{/* <HeroContainer background={slideBackground[this.state.slide]}> */}

			<Fade delay={500} >

			<Swiper {...params} style={{height:'50vh'}}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
        <div>Slide #6</div>
        <div>Slide #7</div>
        <div>Slide #8</div>
      </Swiper>

</Fade>




{/* 
				<Fade when={this.state.slide == 0}>
	
<h1 style={{textAlign: 'center', position: 'absolute', width: '100%', fontFamily: 'Playfair Display'}}>Practical wisdom, trusted advice</h1>


	



	
</Fade>


<Fade when={this.state.slide == 1} >
<h1 style={{textAlign: 'center', position: 'absolute', width: '100%', fontFamily: 'Playfair Display' }}>"The people's good is the highest law." - Cicero</h1>



}


</Fade>

<Fade when={this.state.slide == 2} >
<h1 style={{textAlign: 'center', position: 'absolute', width: '100%',  fontFamily: 'Playfair Display' }}>Experienced. Driven. Effective</h1>

	

</Fade> */}





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

				{/* <Sticky topOffset={root.innerHeight}>
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
				</Sticky> */}

				

				{/* <Fade delay={200}>
					<StoryContainer style={{ height: '100px' }}>
						<Story>
							<h2 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary" style={{fontFamily:'serif'}}>
								Company background
							</h2>

						</Story>
					</StoryContainer>
				</Fade> */}

			
					<StoryContainer style={{ background: 'transparent', color: 'whitesmoke' }}>
						<InView
							onChange={(inView, entry) => {
								this.changeSection(inView, 0, entry);
							}}
						>
							{({ inView, ref, entry }) => (
								<AboutSection ref={ref}>


								
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											textAlign: 'left',
											
											flexWrap: 'wrap',
											alignItems: 'center',
											padding: '0 6vw',
											background: '#1b1b1b'
										
										}}
									>



										
										{/* borderLeft: 'solid 7px #f6f6f6'
										 */}
										<HeroBox>
										
										<h1>
										{this.props.mainHeader}
										</h1>

									

											<ReactMarkdown source={this.props.mainContent} />
											<StyledLink to={this.props.pageContext.langKey +"/about"} className="btn2 draw-border left">Read more</StyledLink>
											
										</HeroBox>


										<HeroBox>
										<Fade delay={200}>
										<h1>
										Meet Our Team
									</h1>

									

											<ReactMarkdown source={this.props.mainContent} />
											<Link to={this.props.pageContext.langKey +"/about"} className="btn2 draw-border left">Read more</Link>
											</Fade>
										</HeroBox>

										<HeroBox>
										<Fade delay={200}>
										<h1>
										Contact Us
									</h1>

									

											<ReactMarkdown source={this.props.mainContent} />
											<Link to={this.props.pageContext.langKey +"/about"} className="btn2 draw-border left">Read more</Link>
											</Fade>
										</HeroBox>

									</div>
								</AboutSection>
							)}
						</InView>

				


					
					</StoryContainer>
	

	
					</BackgroundWrapper>

				<BackgroundWrapper background={"img/office.jpg"} style={{backgroundPosition: 'top', backgroundSize: 'cover'}} >

			
					<StoryContainer style={{ background: '#101010ad', color: 'white', paddingBottom: '1.5em', minHeight: '100vh' }}>
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
											flexDirection: 'row',
											textAlign: 'left',
											
											flexWrap: 'wrap-reverse',
											alignItems: 'center',
											justifyContent: 'center',
											padding: '6vw'
										
										}}
									>


										{/* <Fade>
										<div style={{ flex: 1, minWidth:300}}>
											<img src="https://dummyimage.com/600x400/1c1c1c/ffffff.png" />
										</div>

										</Fade>
										 */}



										<Fade delay={200}>
										<ResponsiveContainer>
										<h1>
										{this.props.serviceHeaderLeft}
									</h1>

									<h2>Experienced. Driven. Effective</h2>

								

									<ReactMarkdown source={this.props.serviceContentLeft} />

											<button class="btn2 draw-border">Read more</button>
										
										
										</ResponsiveContainer>
										</Fade>
										</div>

								</Story>
							)}
						</InView>

					


					
					</StoryContainer>
			

					</BackgroundWrapper>


				
										 
					<StoryContainer style={{ background: '#101010', color: 'whitesmoke', minHeight: '100vh' }}>
						<InView
							onChange={(inView, entry) => {
								this.changeSection(inView, 0, entry);
							}}
						>
							{({ inView, ref, entry }) => (
								<AboutSection ref={ref}>


								
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											textAlign: 'left',
											justifyContent: 'center',
											flexWrap: 'wrap-reverse',
											alignItems: 'center',
											padding: '6vw'
										
										}}
									>



										
										{/* borderLeft: 'solid 7px #f6f6f6'
										 */}
	

										<div style={{ maxWidth: '720px', minWidth: '250px', width: '100%', padding: '0 2vw'}}>
										<Fade delay={200}>
										<h1>
										Our Services
									</h1>

										<h3>Practical wisdom, trusted advice</h3>

											<ReactMarkdown source={this.props.mainContent} />

											<h3>Our Expertise</h3>
										
											<ReactMarkdown source={this.props.serviceContentRight} />
											<Link to={this.props.pageContext.langKey +"/about"} className="btn2 draw-border left">Read more</Link>
											</Fade>
										</div>

										<div style={{ maxWidth: '720px', flex: 1, padding: '0 2vw'}}>
										<Fade delay={200}>
								
								
										 <ImageWrapper>

										 <Img fluid={this.props.mainImage1.childImageSharp.fluid} />
										 </ImageWrapper>


										 <Row>
										 <ImageWrapper>

<Img fluid={this.props.mainImage1.childImageSharp.fluid} />
</ImageWrapper>


<ImageWrapper>

<Img fluid={this.props.mainImage1.childImageSharp.fluid} />
</ImageWrapper>

										 </Row>
										 
									

										
											</Fade>

											
										</div>


								

									</div>
								</AboutSection>
							)}
						</InView>

				


					
					</StoryContainer>

	
					
			




{/* 

				<StoryContainer style={{ background: '#1b1b1b', color: 'white', borderTop:"solid #212121", paddingBottom: '1.5em', flexDirection: 'row'}}>

				<ImageWrapper >
					<Img fluid={this.props.mainImage1.childImageSharp.fluid} />

					</ImageWrapper>
					<ImageWrapper>
					<Img fluid={this.props.mainImage1.childImageSharp.fluid} />

					</ImageWrapper>
					<ImageWrapper>
					<Img fluid={this.props.mainImage1.childImageSharp.fluid} />

					</ImageWrapper>
					<ImageWrapper>
					<Img fluid={this.props.mainImage1.childImageSharp.fluid} />

					</ImageWrapper>
					<ImageWrapper>
					<Img fluid={this.props.mainImage1.childImageSharp.fluid} />

					</ImageWrapper>

				</StoryContainer> */}



    
    
    		<ClientSection>
					<InView
						onChange={(inView, entry) => {
							this.changeSection(inView, 4, entry);
						}}
					>
						{({ inView, ref, entry }) => (
							<div ref={ref}>
								<Fade delay={200}>
									<h2>
										Clients
									</h2>
								</Fade>

								<Fade delay={400} cascade>
									<ClientsWrapper>
										<Client><img src="/img/BLC-Logo.png" /></Client>
										<Client><img src="/img/BLC-Logo.png" /></Client><Client><img src="/img/BLC-Logo.png" /></Client><Client><img src="/img/BLC-Logo.png" /></Client><Client><img src="/img/BLC-Logo.png" /></Client><Client><img src="/img/BLC-Logo.png" /></Client><Client><img src="/img/BLC-Logo.png" /></Client><Client><img src="/img/BLC-Logo.png" /></Client><Client><img src="/img/BLC-Logo.png" /></Client>
							
										
									</ClientsWrapper>
								</Fade>
							</div>
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
									<h2 ref={ref}>
										News
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

				
				{...props}

				mainImage1={frontmatter.mainImage1}
				mainImage2={frontmatter.mainImage2}
				mainImage3={frontmatter.mainImage3}
				mainHeader={frontmatter.mainHeader}
				mainContent={frontmatter.mainContent}

			
				statementHeader={frontmatter.statementHeader}
				visionHeader={frontmatter.visionHeader}
				missionHeader={frontmatter.missionHeader}
				valueHeader={frontmatter.valueHeader}


				visionContent={frontmatter.visionContent}
				missionContent={frontmatter.missionContent}
				valueContent={frontmatter.valueContent}


				serviceHeaderLeft={frontmatter.serviceHeaderLeft}
				serviceHeaderRight={frontmatter.serviceHeaderRight}
				serviceContentLeft={frontmatter.serviceContentLeft}
				serviceContentRight={frontmatter.serviceContentRight}


				teamHeader={frontmatter.teamHeader}



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
				
				mainImage1 {
					childImageSharp {
						fluid(maxWidth: 1200) {
						
						...GatsbyImageSharpFluid
						}
					}
				}
				
				mainImage2 {
					childImageSharp {
						fluid(maxWidth: 900) {
						...GatsbyImageSharpFluid
						}
					}
				}

				
				mainImage3 {
					childImageSharp {
						fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
						}
					}
				}
			
				mainHeader
				mainContent
				
			
				statementHeader
				visionHeader
				missionHeader
				valueHeader

				visionContent
				missionContent
				valueContent


				serviceHeaderLeft
				serviceHeaderRight
				serviceContentLeft
				serviceContentRight

				teamHeader
			
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
