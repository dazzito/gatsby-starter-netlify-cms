import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const GalleryPreview = ({ entry, getAsset }) => {
  
  const entryImages = entry.getIn(['data','images'])
  const images = entryImages ? entryImages.toJS() : []

  return(
  <div>
    Tester
  </div>
)



}

GalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GalleryPreview
