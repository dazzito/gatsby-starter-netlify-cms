import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import "./transitions.css";

import { CSSTransition } from "react-transition-group";

const Landing = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0,
      slides: [0, 1, 3],
      showButton: ["Learn about us", "Our history", "Contact us"]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      show:
        this.state.show == this.state.slides.length - 1
          ? 0
          : this.state.show + 1
    });
  }

  render() {
    return (
      <section
        className="section section--gradient hero"
        style={{ paddingTop: 0, height: "100vh" }}
      >
        <div className="container">
          <div className="slide-container">
            <CSSTransition
              classNames="slide"
              in={this.state.show == 0}
              timeout={200}
              appear={true}
            >
              <div className="column is-10 slide dynheight">
                <div style={{ color: "#ffffffd9", fontSize: 90 }}>
                  “ THE PEOPLE’S GOOD IS THE HIGHEST LAW ”
                </div>
              </div>
            </CSSTransition>

            <CSSTransition
              {...this.props}
              classNames="slide"
              in={this.state.show == 1}
              timeout={1000}
            >
              <div className="column is-10 slide dynheight ">
                <div>
                  {/* <h1
                    style={{
                      color: "#ffffffd9",
                      fontSize: 45,
                      marginBottom: "1.5rem"
                    }}
                  >
                    “ LAWS ARE ONLY AS GOOD AS THOSE THAT ENFORCE THEM ”
                  </h1> */}

                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                    OUR VISION
                  </h1>
                  <div className="has-text-white is-size-4">
                    <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                    OUR MISSION
                  </h1>
                  <div className="has-text-white is-size-4">
                    <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                    OUR VALUE
                  </h1>
                  <div className="has-text-white is-size-4">
                    <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </CSSTransition>


            <CSSTransition
              {...this.props}
              classNames="slide"
              in={this.state.show == 2}
              timeout={1000}
            >
              <div className="column is-10 slide dynheight ">
                <div>
                  <h1
                    style={{
                      color: "#ffffffd9",
                      fontSize: 45,
                      marginBottom: "1.5rem"
                    }}
                  >
                    “ LAWS ARE ONLY AS GOOD AS THOSE THAT ENFORCE THEM ”
                  </h1>

                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light text-tone-primary ">
                    OUR HISTORY
                  </h1>
                  <div className="has-text-white is-size-4">
                    <p style={{ color: "#b9b9b9", marginBottom: "1.5rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                 
                </div>
              </div>
            </CSSTransition>

         
          </div>

          <div className="column is-10 slide-relative">
            <Link className="btn" to="/" onClick={this.handleClick}>
              {this.state.showButton[this.state.show]}
            </Link>
          </div>

          {/* <Fade when={this.state.show}>
         </Fade> */}
        </div>
      </section>
    );
  }
};

export default Landing;
