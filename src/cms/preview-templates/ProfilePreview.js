import React from 'react'
import PropTypes from 'prop-types'
import { TeamPageTemplate } from '../../templates/team-page'

const ProfilePreview = ({ entry, getAsset }) => {
  
  // const entryImages = entry.getIn(['data','images'])
  // const images = entryImages ? entryImages.toJS() : []

  return(
  <TeamPageTemplate
  image={entry.getIn(['data', 'image'])}
  firstname={entry.getIn(['data', 'firstname'])}
  lastname={entry.getIn(['data', 'lastname'])}
  nickname={entry.getIn(['data', 'nickname'])}
  content={entry.getIn(['data', 'content'])}
  expertise={entry.getIn(['data', 'expertise'])}
  position={entry.getIn(['data', 'position'])}
  />
)



}



export default ProfilePreview
