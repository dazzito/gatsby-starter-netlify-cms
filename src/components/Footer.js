import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h1 style={{ color: "white" }}>Brand Logo</h1>
          {/* <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          /> */}
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Services
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
        
              <div className="column is-4">
              <div style={{ marginBottom: 20 }}>
                <h5 style={{ color: "white" }}>Contact Info.</h5>

               
                <address>
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                &nbsp;Address Example / 5534 Somewhere In. The World 22193
                </address>

                <div>
                  <FontAwesomeIcon icon={faPhone}/>
                  &nbsp;(66)5050 9999 
                </div>

                <div>
                  <FontAwesomeIcon icon={faEnvelope}/>
                  &nbsp;tl.leo90@hotmail.com
                </div>


              </div>
            </div>
            </div>

         

            <div className="column is-12">
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

                <div className="column is-12">
                <p class="copyright-text">
                  Copyright &copy; 2019 All Rights Reserved by&nbsp;
                  <a href="#">dz</a>
                </p>
                </div>
            
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
