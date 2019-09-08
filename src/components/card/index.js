import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const { CardBody } = S

const Card = ({ children, shadow, borderTop }) => {
  return (
    <S.Card borderTop={borderTop} shadow={shadow}>
      {children}
    </S.Card>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
  borderTop: PropTypes.bool,
}

Card.defaultProps = {
  shadow: false,
  borderTop: false,
}

export default Card
