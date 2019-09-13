import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const { ListGroupItem } = S

const ListGroup = ({ children, column, justifyContent, alignItems }) => {
  return (
    <S.ListGroup
      column={column}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </S.ListGroup>
  )
}

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
  column: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
}

ListGroup.defaultProps = {
  column: false,
  justifyContent: '',
  alignItems: '',
}

export default ListGroup
