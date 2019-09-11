import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const { ListGroupItem } = S

const ListGroup = ({ children }) => {
  return <S.ListGroup>{children}</S.ListGroup>
}

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ListGroup