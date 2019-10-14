import React from 'react'
import PropTypes from 'prop-types'
import { ServicePageTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, getAsset }) => {
  // const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  // const entryTestimonials = entry.getIn(['data', 'testimonials'])
  // const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  // const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ServicePageTemplate 
      title={entry.getIn(['data', 'title'])}
      body={entry.getIn(['data', 'body'])} 
    />
  ) 
}

// ServicePagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// }

export default ServicePagePreview
