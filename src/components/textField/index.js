import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const TextField = ({
  type,
  helpText,
  placeholder,
  value,
  name,
  id,
  inValid,
  label,
  onChange,
}) => {
  return (
    <S.TextField inValid={inValid}>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <S.HelpText inValid={inValid}>{helpText}</S.HelpText>
    </S.TextField>
  )
}

TextField.propTypes = {
  type: PropTypes.string,
  helpText: PropTypes.string,
  label: PropTypes.string,
  inValid: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}
TextField.defaultProps = {
  type: 'text',
  helpText: '',
  label: '',
  inValid: false,
  value: null,
  placeholder: '',
  name: '',
  id: '',
  onChange: () => {},
}

export default TextField
