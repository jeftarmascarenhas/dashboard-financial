import styled from 'styled-components'
import { Search } from 'styled-icons/evil/Search'

export const SearchContent = styled.div`
  display: flex;
  height: 6.375rem;
  align-items: center;
`
export const SearchInput = styled.input`
  border: 0;
  box-shadow: 0;
  outline: 0;
  display: block;
  width: 100%;
  padding: 0.3rem;
  color: #fff;
  background: transparent;
`
export const WhiteSearch = styled(Search)`
  color: #fff;
  width: 25px;
  height: 25px;
`
