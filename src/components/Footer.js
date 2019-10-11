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

import {Row,Col} from "~shared/styled.js"


import * as Constant from "~shared/constant.js"


const List = styled.ul`
  list-style: none;
  justify-content: center;
  flex: 1;
  text-align: center;
`;

const ListItem = styled.li`
  /* color: white; */
`;

const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: ${Constant.PRIMARY}
  }

`; 

const FooterRow = styled(Row)`
    margin-left: 13em;
    margin-right: 13em;
    padding-top: 13px;
    padding-bottom: 13px;
    color: white;
    
`;

const FooterWrapper = styled(Col)`
  background: #212121;
`;

const ContactInfo = styled.div`
  flex:1;
  text-align: left;
`;

const Copyright = styled.div`
  text-align: center;
  padding: 10px;
  background: #1b1b1b;
    p{
      color: white;
      text-decoration: none;
    }
`;




const Footer = class extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <FooterRow>


          <FooterRow>
          <List>
            <ListItem>
              <StyledLink to="/">Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about">About</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/products">Services</StyledLink>
            </ListItem>
         </List>

         <List> 
          <ListItem>
              <StyledLink  to="/blog">
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
            <h5 style={{ color: "white" }}>Contact Info.</h5>

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
