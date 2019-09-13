import React, { useState } from 'react'

import exchangeService from 'services/exchangeService'
import * as S from './styled'
import SearchInput from '../searchInput'

const Header = () => {
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchString, setSearchString] = useState('')

  const getExchange = async value => {
    try {
      setLoading(true)
      const response = await exchangeService.getSymbolSearch(
        value.toUpperCase(),
      )
      const { bestMatches } = await response.json()
      const data =
        bestMatches.map(item => ({
          id: item['1. symbol'],
          title: item['1. symbol'],
          description: item['2. name'],
        })) || []
      setSearchData(data || [])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const handleChange = event => {
    const { value } = event.target
    setSearchString(value)
    if (value && value.length >= 3) {
      getExchange(value)
    }
  }

  return (
    <S.Header data-testid="app-header">
      <S.ButtonMenu>
        <S.IconMenuAltRight />
      </S.ButtonMenu>
      <SearchInput
        onChange={handleChange}
        value={searchString}
        loading={loading}
        placeholder="Ex: ITSA4"
        datasource={searchData}
        data-testid="searchSymbol"
      />
    </S.Header>
  )
}

export default Header
