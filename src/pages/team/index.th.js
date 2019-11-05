import React from "react";

import Layout from "src/layouts";
import { graphql, StaticQuery } from "gatsby";
import Fade from "react-reveal/Fade";
import Masonry from "react-masonry-css";
import PreviewCompatibleImage from "src/components/PreviewCompatibleImage";
import Img from "gatsby-image";

import { ModalRoutingContext, Link } from "gatsby-plugin-modal-routing";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faTimes,
  faFileExcel
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { constants } from "os";
import { getLocalizedConstant } from "shared/constant";

import ReactMarkdown from "react-markdown";

import ReactModal from "react-modal";

import { Portal } from "react-portal";

import * as Styled from "src/components/pages/team/TeamPage";

import TeamRoll from "src/components/TeamRoll";


class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalIndex: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(index) {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      modalIndex: index
    }));
  }

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;
    return (
      <Styled.TeamPageWrapper>
        <Fade>
          <h2 style={{ textAlign: "center" }}>ทีมของเรา</h2>
        </Fade>

        <Styled.MemberContainer>
          <TeamRoll data={posts} handleCallback={this.toggleModal} />
        </Styled.MemberContainer>

        {this.state.isModalOpen && (
          <Portal>
            <Styled.Overlay
              portalIsOpen={this.state.isModalOpen}
              onClick={() => this.setState({ isModalOpen: false })}
            ></Styled.Overlay>

            <Styled.CloseButton
              onClick={() => this.setState({ isModalOpen: false })}
            >
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </Styled.CloseButton>

            <Styled.MemberPortal>
              <Styled.ImageWrapper>
                <Img
                  fluid={
                    posts[this.state.modalIndex].node.frontmatter.profileImage1
                      .childImageSharp.fluid
                  }
                />
              </Styled.ImageWrapper>

              <Styled.PortalTextContainer>
                <h3>
                  {posts[this.state.modalIndex].node.frontmatter.firstname}{" "}
                  {posts[this.state.modalIndex].node.frontmatter.lastname}{" "}
                  <span>
                    ( {posts[this.state.modalIndex].node.frontmatter.nickname} )
                  </span>
                </h3>
                <h4>
                  {posts[this.state.modalIndex].node.frontmatter.position}
                </h4>
                <ReactMarkdown
                  source={posts[this.state.modalIndex].node.frontmatter.content}
                />

                <h4>ประสบการณ์</h4>
                <ReactMarkdown
                  source={
                    posts[this.state.modalIndex].node.frontmatter.expertise
                  }
                />

                <h4>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />{" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />{" "}
                  {posts[this.state.modalIndex].node.frontmatter.email}
                </h4>
              </Styled.PortalTextContainer>
            </Styled.MemberPortal>
          </Portal>
        )}
      </Styled.TeamPageWrapper>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query MemberQueryTH($langKey: String) {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "team-page" }
              locale: { eq: $langKey }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                firstname
                lastname
                nickname
                content
                position
                expertise
                profileImage1 {
                  childImageSharp {
                    fluid(maxWidth: 1366, maxHeight: 1366, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={() => (
      <Layout location={props.location}>
        <TeamPage {...props} />
      </Layout>
    )}
  />
);
