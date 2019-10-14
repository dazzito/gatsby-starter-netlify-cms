import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown"
export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (

  // <ReactMarkdown source={content}/>
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}
 
HTMLContent.propTypes = Content.propTypes

export default Content
