import React from "react";
import { Link } from "gatsby";

import logo from './../../public/img/BLC-Logo.png';
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faFax
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
 
import {Row,Col} from "shared/styled.js"


import * as Constant from "shared/constant.js" 


const List = styled.ul`
 
  justify-content: center;
  flex: 1;
  text-align: left;

  padding: 0 1em;
  margin: 0 1em;

`;


const Logo = styled.img`
  
`;

const ListItem = styled.li`
   list-style: none;
   max-width: 20em;
   min-width: 150px;
`;

const StyledLink = styled(Link)`
  color: #b7b28a;
  
  &:hover {
    color: ${Constant.WHITE}
  }

`; 

const FooterRow = styled(Row)`
  /* margin-left: 13em;
    margin-right: 0.5em; */
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 2em 0;
    /* padding-top: 13px; */
   
    /* padding-bottom: 13px; */
  
    
`;

const FooterWrapper = styled(Col)`
  
  z-index:2;
  background: #212121;
  /* border-right: solid 1px #3f3f3f; */
    text-align: end;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    /* padding: 1em; */
/* 
    position: fixed;
    bottom: 0;
    left: 0%;
    right: 0; */
`;

const ContactInfo = styled.div`
  padding: 0 1em;
  margin: 0 1em;  
  flex:2;
  text-align: left;
  color: lightgrey;

  p{
    padding: 0.4em;
  }
`;

const Copyright = styled.div`

  text-align: center;
  padding: 10px;
  background: #1b1b1b;
    p{
      color: #505050;
      text-decoration: none;
    }
`;

function getLocalePath(locale, path) {
	if (locale == 'en') {
		return '/' + path;
	} else if (locale == 'th') {
		return '/th/' + path;
	}
}

function getMenuItem(str, locale){
  if(locale == "en"){
    return str.charAt(0).toUpperCase() + str.slice(1);

  } else {


    if(str == "home"){
      return "หน้าหลัก"
    }  else if( str == "about"){
      return 'เกี่ยวกับเรา'
    } else if( str == "team"){
      return "ทีมของเรา"
    } else if (str == 'service'){
      return "บริการ"
    } else if (str == 'news'){
      return "ข่าวสาร"
    } else if( str == "contact"){
      return 'ติดต่อ'
    }


  }
}


const Footer = class extends React.Component {

  constructor(props){
    super(props)
    this.state = {

      locale: this.props.locale
    }
  }



    componentDidUpdate(prevProps){
      if(prevProps.locale != this.props.locale){
        this.setState({locale:this.props.locale})
      }
    }



  render() {
    const footerNav =  this.props.disableFooterNav;
    let about = getLocalePath(this.state.locale, 'about')
    let team = getLocalePath(this.state.locale, 'team')
    let service = getLocalePath(this.state.locale, 'service')
    let news = getLocalePath(this.state.locale, 'news')
    let contact = getLocalePath(this.state.locale, 'contact')

  
    return (
      <FooterWrapper>

    


      {!this.props.disableFooterNav ?  
        <FooterRow >


   
          {/* <img src={logo} /> */}

          <List>
            <ListItem>
              <StyledLink to={getLocalePath(this.state.locale, '/')} >{getMenuItem("home", this.state.locale)}</StyledLink>
            </ListItem>
            <ListItem>
            <StyledLink to={getLocalePath(this.state.locale, 'about')} >{getMenuItem("about", this.state.locale)}</StyledLink>
            </ListItem>
            <ListItem>
            <StyledLink to={getLocalePath(this.state.locale, 'service')} >{getMenuItem("service", this.state.locale)}</StyledLink>
            </ListItem>
         </List>

         <List> 
          <ListItem>
          <StyledLink to={getLocalePath(this.state.locale, 'news')} >{getMenuItem("news", this.state.locale)}</StyledLink>
            </ListItem>
            <ListItem>
            <StyledLink to={getLocalePath(this.state.locale, 'team')} >{getMenuItem("team", this.state.locale)}</StyledLink>
            </ListItem>
        
            
          </List>

          <ContactInfo>
          <ListItem>
          <StyledLink to={getLocalePath(this.state.locale, 'contact')} >{getMenuItem("contact", this.state.locale)}</StyledLink>
            </ListItem>
           
           <p>

            <StyledLink to={contact}>

            <address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              &emsp;Fl 3rd Unit 301, Mid Town Asoke Bldg, 189/1 Sukhumvit 21 Rd, Klong-Toey Nua, Wattana, Bangkok 10110
            </address>
          </StyledLink>
           
          
       
              <FontAwesomeIcon icon={faPhone} />
              &emsp;+668 6060 5225&emsp;
              
              <FontAwesomeIcon icon={faFax} />
              &emsp;(66) 2258 9091-3
          
              
            <br/>
              <FontAwesomeIcon icon={faEnvelope} />
              &emsp;info@bangkoklegalconsulting.com
              </p>
            
          </ContactInfo>

        
         

         

       
        </FooterRow>

 : <></>}

        <Copyright>
          <p>
            Copyright &copy; 2019 All Rights Reserved by&nbsp;
            <a href="#">dz</a>
          </p>
        </Copyright>

        {/* <div className="column is-12">
              <div className="column is-12 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                </div>

               
            
           
           
           
            </div> */}

   


      </FooterWrapper>
    );
  }
};

export default Footer;
