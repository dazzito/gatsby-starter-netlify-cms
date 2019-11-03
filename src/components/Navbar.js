import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from './../../public/img/logot.png';
import { navigate } from 'gatsby';
import Headroom from 'react-headroom';
import Location from '@reach/router';

import locales from 'src/shared/locales';

import styled from 'styled-components';

const ExtendedLink = ({ to, locale, ...props }) => {
	const path = locale == 'en' || locale == undefined ? to : `/${locale}${to}`;
	return (
		<Link to={path} className="navbar-item">
			{props.children}
		</Link>
	);
};


const ActiveMenuItem = styled(Link)`
  position: relative;
  transition: all 0.2s ease 0s;
  color:#d0cba4;
  height: fit-content;
  font-family: 'Playfair Display', sans-serif;
  padding: 0.5em;

  &::after{
    position: absolute;
    height: 5px;
		opacity: 1;
		top: 80%;
		left: 0;
		width: 100%;
		height: 1px;
    background: #d0cba4;
  }
`;



const NavbarWrapper = styled.nav`
background: ${props => props.isTransparent ? 'transparent !important' : '#1b1b1b'};
		/* box-shadow: inset 0px -1px 5px 0px #252525; */
`;


const MenuItem = styled(Link)`
  position: relative;
  transition: all 0.2s ease 0s;
  color: ${props => props.isDark ? '#1b1b1b' : '#d0cba4'};
 

  
  height: fit-content;
  font-family: "Playfair Display";
  padding: 1.25em;
  font-size:1.1rem;


  



	/* Effect 4: bottom border enlarge */
  &:hover{
	  color: #e0e0e0;
	/* color: ${props => props.isDark ? '#d0cba4' : '#1b1b1b'}; */
    /* font-weight: bold; */
    /* padding-top: 1em; */
    &::after{
      height: 2px;
		opacity: 1;
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		transform: translateY(0px); 
    }
    
  }

  &::after {

		position: absolute;
		top: 80%;
		left: 0;
		width: 100%;
		height: 1px;
     background: #d0cba4; 
		content: '';
		opacity: 0;
		-webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
		-moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
		transition: height 0.3s, opacity 0.3s, transform 0.3s;
		-webkit-transform: translateY(-10px);
		-moz-transform: translateY(-10px);
		transform: translateY(-10px);


    ${props => props.active && ({

height: '2px',
opacity: 1,
top: '100%'

})}
	}


`;


const LanguageSelector = styled.div`
    display:flex;
    flex-direction: row;
    padding-left: 10px; 
`;

const LanguageMenuItem = styled(Link)`
  margin-left: 0.2em;
  margin-right: 0.2em;
  background-color: ${props => props.active ? '#c5cba4' : 'transparent'};
  color: ${props => props.active ? '#212121' : '#c5cba4'};
  border-radius:4px;
	display: block;
	line-height: 1.5;
	padding: 0.5rem 0.275rem;
	height: 1.2em;
	align-self: center;
	cursor: pointer;
  transition: all 0.2s ease 0s;

	position: relative;
	&:a {
		border-left: solid 1px lightgrey;
	}

	&:hover {
		background: #c5cba4;
	}

	&:hover::after {
	}

	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: center;
	}
`;

function getLocalePath(locale, path) {
	if (locale == 'en') {
		return '/en/' + path;
	} else if (locale == 'th') {
		return '/th/' + path;
	}
}

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: '',
      locale: this.props.locale,
      pathname: this.props.pathname
		};

		this.setLocale = this.setLocale.bind(this);
	}

	setLocale(locale) {
		this.setState({ locale });
	}


	getMenuItem(str, locale){
		if(locale == "en"){
			return str.toUpperCase();

		} else {

			if(str == "about"){
				return "เกี่ยวกับเรา"
			} else if( str == "team"){
				return "ทีมของเรา"
			} else if (str == 'services'){
				return "บริการ"
			} else if (str == 'news'){
				return "ข่าวสาร"
			} else if( str == "contact"){
				return 'ติดต่อ'
			}


		}
	}




	componentWillReceiveProps(newProps) {
		if (newProps.locale != this.state.locale) {
			this.setState({ locale: newProps.locale });
    }
    
    if (newProps.pathname != this.state.pathname) {
			this.setState({ pathname: newProps.pathname });
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
					  });
			}
		);
	};

	render() {
		// const links = this.props.langs.map((lang, index) =>

		//   <Link to={lang.link} key={lang.langKey} style={{
		//     color: 'white'
		//   }}>
		//     <li selected={lang.selected}>
		//       {lang.langKey}
		//     </li>
		//   </Link>

    // );
    
    let about = getLocalePath(this.state.locale, 'about')
    let team = getLocalePath(this.state.locale, 'team')
    let service = getLocalePath(this.state.locale, 'service')
    let news = getLocalePath(this.state.locale, 'news')
    let contact = getLocalePath(this.state.locale, 'contact')

    // alert(about)
    // alert(this.state.pathname)

      console.log(this.state.location)
		return (
			<NavbarWrapper 
				// isTransparent={this.state.pathname == "/" || this.state.pathname == "/th"}
				className="navbar is-transparent "
				role="navigation"
				aria-label="main-navigation"
				// style={this.props.isScrolled ? this.props.scrolled : this.props.unscrolled}
			>
				<div className="container">
					<div className="navbar-brand">
						<Link to={getLocalePath(this.state.locale, '/')} className="navbar-item" title="Logo">
							{/* <h1  style={{marginBottom: 6, color: this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color, fontWeight:'bolder'}}>[ Logo ]</h1>
							 */}
							<img src={logo} alt="BLC" />
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
					<div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
						<div className="navbar-end has-text-centered">
							<MenuItem
                active={this.state.pathname == about}
								to={about}
								// isDark={this.state.pathname == "/"}
							>
								{this.getMenuItem("about", this.state.locale)}
							</MenuItem>

							<MenuItem
                active={this.state.pathname == team}
								to={team}
							
							>
								{this.getMenuItem("team", this.state.locale)}
							</MenuItem>

							<MenuItem
                active={this.state.pathname == service}
								to={service}
							

							>
								{this.getMenuItem("services", this.state.locale)}
							</MenuItem>
							<MenuItem
                active={this.state.pathname == news}
								to={news}
							
	
							>
								{this.getMenuItem("news", this.state.locale)}
							</MenuItem>
							<MenuItem
                active={this.state.pathname == contact}
								to={contact}
							
				
							>
								{this.getMenuItem("contact", this.state.locale)}
							</MenuItem>



              <LanguageSelector>
              <LanguageMenuItem replace to="/th" active={this.state.locale == "th"}>
								TH
							</LanguageMenuItem>

							<LanguageMenuItem replace to="/" active={this.state.locale == "en"}>
								EN
							</LanguageMenuItem>

              </LanguageSelector>
						

							{/* 
              <Link className="navbar-item" to={location.pathname} style={{color:this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                TH
              </Link> */}
							{/* 
            <Link  className="navbar-item" to={this} style={{color:this.props.isScrolled ? this.props.scrolled.color : this.props.unscrolled.color}}>
                            CONTACT
            </Link>
              <button onClick={()=> this.setLocale("th")}>TH</button>
              <button onClick={()=> this.setLocale("en")}>EN</button> */}

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
			</NavbarWrapper>
		);
	}
};

export default Navbar;
