import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from './../../public/img/logot.png'

import Headroom from 'react-headroom'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ''
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }



  render() {
    return (
     
     
      <nav 
        className="navbar is-transparent cl-effect-4"
        role="navigation"
        aria-label="main-navigation"
        style={this.props.isScrolled ? this.props.scrolled : this.props.unscrolled}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <h1  style={{marginBottom: 6, color: this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color, fontWeight:'bolder'}}>[ Logo ]</h1>
             */}
              <img src={logo} alt="Kaldi" />
            </Link>  
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu" 
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about" style={{color: this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                ABOUT
              </Link>

              <Link className="navbar-item" to="/team" style={{color:this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                TEAM
              </Link>


              <Link className="navbar-item" to="/service" style={{color:this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                SERVICES
              </Link>
              <Link className="navbar-item" to="/news" style={{color:this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                NEWS
              </Link>
              <Link className="navbar-item" to="/contact" style={{color:this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                CONTACT
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples" style={{color:this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                Form Examples
              </Link> */}
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
