import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const SearchInput = ({ onChange, value, placeholder }) => {
  return (
    <S.SearchContent>
      <S.WhiteSearch />
      <S.SearchInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </S.SearchContent>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
  value: '',
  placeholder: 'Search',
}

export default SearchInput
