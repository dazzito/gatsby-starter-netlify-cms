import React, { useState, useEffect, useRef } from 'react'

import "./layout.css"

import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import 'src/components/all.sass'
import useSiteMetadata from '../components/SiteMetadata'
import { withPrefix } from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll';
import { StickyContainer, Sticky } from 'react-sticky';
import { AnimatedBg, Transition } from 'scroll-background';

import { useInView } from 'react-intersection-observer'
import DynamicSubNav from '../components/DynamicSubNav'

import styled from 'styled-components'
 
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';

import {Row,Col} from "shared/styled.js"

import { Link } from 'gatsby'
// import root from 'window-or-global'


 
const Container = styled(Col)`

  height: 100%;
`;







const TemplateWrapper = ({ children, location }) => {
 
  
  


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

 
  
  
  const ParallaxContainer  = styled.div`
  display: initial;
  
  /* position: relative; */
  width: 100%;
  min-height: 100vh;
  transform-style: preserve-3d;

  *{
    position:absolute;

  }

  &::before{
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: block;
    background: url("/img/marble-white.jpg") top center;
    background-size: cover;
    transform: translateZ(-1px) scale(2.1);
    min-height: 100%;
    z-index: -2;
  }





  
  `



const ContentContainer = styled.div`
   /* margin-top: 126px; */
   flex:1;
 
   /* max-width: 1300px;
  margin-left: auto;
  margin-right: auto; */
`;


  const Container = styled.div`
        /* background: url('/img/marble-white.jpg'); */
        background: #212121;
      background-size: cover;
    /* background: #272727; */
    /* background-position: bottom;perspective: 1px;
transform-style: preserve-3d;
height: 100vh;
overflow-x: hidden;
overflow-y: scroll; */

   
  `;


  
 
   const url = location.pathname;
  const { title, description , languages} = useSiteMetadata()

 // alert(url);
  //alert(languages.langs)
  //alert(languages.defaultLangKey); 
  const langKey = getCurrentLangKey(languages.langs, languages.defaultLangKey, url);
  //alert(langKey); 

  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(languages.langs, langKey, getUrlForLang(homeLink, url));
  return (
    <IntlProvider
    locale={langKey}
    // messages={this.i18nMessages} 
  >
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

 
      {/* <Link  className="navbar-item" to="/th">
                LANG - TH
              </Link> */}


<Container >

<Col style={{height: '100%', flex:1}}>  









<Navbar pathname={location.pathname} locale={langKey} langs={langsMenu}  isScrolled={isScrolled} 

//url("/img/waranont-joe-EZwBNdnIlpo-unsplash.jpg")
  scrolled={{background: '#212121', boxShadow:'0px 2px 2px -2px rgba(122,122,122,1)', color: '#3f3c3cd9'}}  
  unscrolled={{background: '#212121', boxShadow:'0px 2px 2px -2px rgba(122,122,122,1)', color: '#3f3c3cd9'}} />






{/* <div ref={ref}>
  <DynamicSubNav />
  </div>  */}
    
      <ContentContainer>

        {children}
      </ContentContainer>
      
     
     
      <Footer disableFooterNav={location.pathname == "/"} />
</Col>

</Container>
</IntlProvider>
  )
}

export default TemplateWrapper
