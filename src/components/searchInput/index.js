import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { EXCHANGE } from 'routes'
import * as S from './styled'

const renderList = datasource =>
  datasource.length ? (
    datasource.map(item => (
      <S.SearchILink key={item.id} to={`${EXCHANGE}/${item.id}`}>
        <S.SearchTitle>
          <S.SearchItemLabel>Symbol</S.SearchItemLabel>
          {item.title}
        </S.SearchTitle>
        <S.SearchItemDescription>
          <S.SearchItemLabel>Company</S.SearchItemLabel>
          {item.description}
        </S.SearchItemDescription>
      </S.SearchILink>
    ))
  ) : (
    <S.SearchItemEmpty>Empty List</S.SearchItemEmpty>
  )

function SearchInput({
  id,
  name,
  onChange,
  value,
  placeholder,
  datasource,
  loading,
}) {
  const [active, setActive] = useState(false)

  const handleSearchShow = () => {
    setActive(true)
  }
  const handleSearchHide = () => {
    setActive(false)
  }

  return (
    <S.SearchContent>
      <S.SearchIcon />
      <S.SearchInput
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onClick={handleSearchShow}
        autoComplete="off"
      />
      <S.SearchData className={active ? 'active' : ''}>
        <S.SearchHeader alignItems="flex-end" justifyContent="flex-end">
          <S.SearchCloseIcon onClick={handleSearchHide} />
        </S.SearchHeader>
        {loading ? (
          <S.SearchItemEmpty>Loading...</S.SearchItemEmpty>
        ) : (
          renderList(datasource)
        )}
      </S.SearchData>
    </S.SearchContent>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  datasource: PropTypes.arrayOf(PropTypes.object),
}

SearchInput.defaultProps = {
  value: '',
  id: 'search1',
  name: '',
  placeholder: 'Search',
  datasource: [],
  loading: false,
}

export default SearchInput
