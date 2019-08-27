import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll';
import { StickyContainer, Sticky } from 'react-sticky';
import { AnimatedBg, Transition } from 'scroll-background';

import { useInView } from 'react-intersection-observer'
import DynamicSubNav from '../components/DynamicSubNav'



const TemplateWrapper = ({ 
  children,
  heading
}) => {
 
  


  const [ref, inView, entry] = useInView({
    rootMargin: '-52px' 
  })


  const [isScrolled, setIsScrolled] = useState(false);

  const isInitial = useRef(true);

  useEffect(() => {

    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    if (inView) {
      setIsScrolled(false)
      console.log("s")
    } else {
      setIsScrolled(true)
      console.log("e")
    }
  }, [inView])

  const { title, description } = useSiteMetadata()
  
  
  
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>


      <StickyContainer>


{/*       

      <div
      className="full-width-image margin-top-0 "
      style={{
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
          marginLeft: 100
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            // boxShadow:
            //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: "white",
            color: "#212121",
            lineHeight: "1",
            padding: "0.4em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            width: "fit-content",
            backgroundColor: "black",
            color: "white",
            lineHeight: "1",
            padding: "0.4em"
          }}
        >
          Sub-header
        </h3>
      </div>
    </div>
  */}
  {/* <Sticky>
  {({
            style,
 
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <div style={{ ...style, backgroundColor: 'white', zIndex: '999' }}>

            

          </div>
            
          )}
  </Sticky> */}
 

  <Navbar isScrolled={isScrolled} 
  scrolled={{backgroundColor:'white', color:'#4a4a4a', boxShadow:'0px 2px 2px -2px rgba(122,122,122,1)'}}  
  unscrolled={{backgroundColor:'transparent', color:'white'}} 
  
  />


  <div ref={ref}>
  <DynamicSubNav />
  </div> 
    
      
      <div>{children}</div>
      <Footer />


      </StickyContainer>

    </div>
  )
}

export default TemplateWrapper
