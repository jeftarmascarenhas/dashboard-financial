import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const { CardBody } = S

const Card = ({ children, shadow, borderTop, gutterBottom }) => {
  return (
    <S.Card borderTop={borderTop} gutterBottom={gutterBottom} shadow={shadow}>
      {children}
    </S.Card>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  borderTop: PropTypes.bool,
}

Card.defaultProps = {
  shadow: false,
  borderTop: false,
  gutterBottom: false,
}

export default Card
