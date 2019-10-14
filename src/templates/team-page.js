import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown"
import Layout from "../components/Layout";
import Features from "../components/Features";
import NewsRoll from "../components/NewsRoll";
import ContactForm from "../components/ContactForm";
import Fade from "react-reveal/Fade";
import Masonry from "react-masonry-css";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Avatar from "../img/avatar-placeholder.png";
import linkedin from "../img/social/linkedin.svg";
// import PreviewCompatibleImage from "src/components/PreviewCompatibleImage"
import PreviewCompatibleImage from "src/components/PreviewCompatibleImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

// import Avatar from '../img/avatar-placeholder.png'

const Modal = styled.div`
  margin-top: 126px;
`;

const CloseButton = styled(Link)`
  float: right;
`;

const ModalContainer = styled.div`
  margin-top: 10rem;
`;

export const TeamPageTemplate = ({
  image,
  firstname,
  lastname,
  content,
  expertise,
  nickname,
  position,
  email
}) => (
  <ModalContainer className="content">
    <div className="container">
      <CloseButton to={"/team"}>
        <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          style={{ color: "#ffffff" }}
        />
      </CloseButton>

      <div className="columns">
        <div className="column is-5">
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <div className="tile is-parent">
                <article className="tile is-child">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image,
                      alt: "title"
                    }}
                  />
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="column is-7">
          {/* <h3 className="has-text-weight-semibold is-size-3">{heading}</h3> */}
          <h5 className="has-text-weight-semibold is-size-3 text-tone-primary">
            {firstname} {lastname}{" "}
            {(nickname = !"" ? "(" + nickname + ")" : "")}
          </h5>
          <h4 className="has-text-weight-semibold is-size-4">{position}</h4>
          <ReactMarkdown source={content}/>

          <h3 className="has-text-weight-semibold is-size-3">
            Expertise and Experience
          </h3>
          <ReactMarkdown source={expertise}/>

          <h5 className="has-text-weight-semibold is-size-4 text-tone-primary">
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
            {email}
          </h5>
        </div>
      </div>
    </div>
  </ModalContainer>
);

// TeamPageTemplate.propTypes = {
//   images: PropTypes.array
// };

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <>
          {modal ? (
            <Modal>
              <TeamPageTemplate
                image={frontmatter.image}
                firstname={frontmatter.firstname}
                lastname={frontmatter.lastname}
                nickname={frontmatter.nickname}
                content={frontmatter.content}
                expertise={frontmatter.expertise}
                position={frontmatter.position}
              />
            </Modal>
          ) : (
            <Layout>
              <TeamPageTemplate
                image={frontmatter.image}
                firstname={frontmatter.firstname}
                lastname={frontmatter.lastname}
                nickname={frontmatter.nickname}
                content={frontmatter.content}
                expertise={frontmatter.expertise}
                position={frontmatter.position}
              />
            </Layout>
          )}
        </>
      )}
    </ModalRoutingContext>
  );
};
export default TeamPage;

// GalleryPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   })
// };

export const query = graphql`
  query TeamMemberByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        firstname
        lastname
        nickname
        content
        position
        expertise
        image {
          childImageSharp {
            fluid(maxWidth: 1048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

// markdownRemark(frontmatter: { templateKey: { eq: "profile-page" } }) {
//   frontmatter {
//     firstname
//     lastname
//     nickname
//     content
//     position
//     expertise
//     image {
//       childImageSharp {
//         fluid(maxWidth: 1048, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// }
