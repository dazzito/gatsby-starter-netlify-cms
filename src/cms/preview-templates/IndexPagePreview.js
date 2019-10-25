import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate

      backgroundSectionImage={data.backgroundSectionImage}
      backgroundSectionHeading={data.backgroundSectionHeading}
      backgroundSectionContent={data.backgroundSectionContent}

    
      statementHeader={data.statementHeader}
      visionHeader={data.visionHeader}
      missionHeader={data.missionHeader}
      valueHeader={data.valueHeader}


      visionContent={data.visionContent}
      missionContent={data.missionContent}
      valueContent={data.valueContent}


      serviceHeaderLeft={data.serviceHeaderLeft}
      serviceHeaderRight={data.serviceHeaderRight}
      serviceContentLeft={data.serviceContentLeft}
      serviceContentRight={data.serviceContentRight}


      teamHeader={data.teamHeader}



      gallery={data.gallery}

        // image={data.image}
        // title={data.title}
        // heading={data.heading}
        // subheading={data.subheading}
        // description={data.description}
        // intro={data.intro || { blurbs: [] }}
        // mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
