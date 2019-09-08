import React from 'react'
import Helmet from 'react-helmet'
import Proptypes from 'prop-types'

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
}

export default SEO
