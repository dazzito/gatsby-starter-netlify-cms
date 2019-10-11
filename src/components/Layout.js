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

import styled from 'styled-components'


import {Row,Col} from "shared/styled.js"

const Container = styled(Col)`

  height: 100%;
`;



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
  
  

  const Container = styled.div`
    height: 100%; 
  `;
  
  return (
    <>
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
        <meta property="og:image" content={`${withPrefix("/")}img/bg1.jpg`} />
      </Helmet>



<Col style={{height: '100%'}}>

<Navbar isScrolled={isScrolled} 
  scrolled={{backgroundColor:'#ffffff', boxShadow:'0px 2px 2px -2px rgba(122,122,122,1)', color: '#3f3c3cd9'}}  
  unscrolled={{backgroundColor:'transparent', boxShadow:'0px 2px 2px -2px rgba(122,122,122,1),'}} />


<div ref={ref}>
  <DynamicSubNav />
  </div> 
    
      
      <div style={{flex:1}}>{children}</div>
     
     
      <Footer />
</Col>


    </>
  )
}

export default TemplateWrapper
