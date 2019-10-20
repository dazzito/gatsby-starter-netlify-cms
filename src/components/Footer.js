import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
 
import {Row,Col} from "shared/styled.js"


import * as Constant from "shared/constant.js" 


const List = styled.ul`
 
  justify-content: center;
  flex: 1;
  text-align: right;
  border-right: solid #353535 1px;
  padding: 15px;
  margin:15px;

`;

const ListItem = styled.li`
   list-style: none;
   max-width: 20em;
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
 
    margin-left: auto;
    margin-right: auto;
    /* padding-top: 13px; */
   
    /* padding-bottom: 13px; */
  
    
`;

const FooterWrapper = styled(Col)`
  z-index:2;
  background: #212121;
  border-right: solid 1px #3f3f3f;
    text-align: end;
    /* padding: 1em; */

    position: fixed;
    bottom: 0;
    left: 0%;
    right: 0;
`;

const ContactInfo = styled.div`
  padding-top: 15px;
  flex:1;
  text-align: left;
  color: lightgrey;
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




const Footer = class extends React.Component {





  render() {
    const footerNav =  this.props.disableFooterNav;
  
    return (
      <FooterWrapper>


      {!this.props.disableFooterNav ?  
        <FooterRow >


          <FooterRow>
          <List>
            <ListItem>
              <StyledLink to="/">Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about">About</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/Services">Services</StyledLink>
            </ListItem>
         </List>

         <List> 
          <ListItem>
              <StyledLink  to="/News">
                News
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink  to="/gallery">
                Our Team
              </StyledLink>
            </ListItem>
        
            
          </List>

          </FooterRow>
         

         

          <ContactInfo>
          <ListItem>
              <StyledLink to="/contact">Contact Us</StyledLink>
            </ListItem>

            <address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              &nbsp;Address Example / 5534 Somewhere In. The World 22193
            </address>

            <div>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;(66)5050 9999
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp;tl.leo90@hotmail.com
            </div>
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
