import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Button = ({ children, variant, disabled, onClick, type }) => {
  return (
    <S.Button
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  disabled: false,
  onClick: () => {},
}

export default Button
