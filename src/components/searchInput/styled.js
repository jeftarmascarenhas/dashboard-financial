import styled, { css } from 'styled-components'
import { Search } from 'styled-icons/evil/Search'
import { Close } from 'styled-icons/evil/Close'
import { Link } from 'react-router-dom'
import { lighten, transitions } from 'polished'

import { Color } from 'styles/variables'

const searchStyle = css`
  background: ${Color.bgSecondary};
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  display: block;
  color: ${Color.white};
  min-height: 6rem;
  display: flex;
  align-items: center;
`

export const SearchContent = styled.div`
  display: flex;
  height: 6.375rem;
  align-items: center;
  padding-left: 1rem;
`

export const SearchData = styled.div`
  background: rgba(0, 0, 0, 0.82);
  position: absolute;
  display: none;
  top: 6.375rem;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  padding-bottom: 2rem;
  overflow-y: hidden;
  z-index: 10;
  &.active {
    display: block;
  }
`

export const SearchInput = styled.input`
  border: 0;
  box-shadow: none;
  outline: 0;
  display: block;
  width: 100%;
  padding: 0.3rem;
  color: ${Color.white};
  height: 100%;
  background: transparent;
  font-size: 1.4rem;
`
export const SearchIcon = styled(Search)`
  color: ${({ color }) => (!color ? `${Color.white}` : `${color}`)};
  width: 25px;
  height: 25px;
`
export const SearchILink = styled(Link)`
  ${searchStyle}
  ${transitions('background .20s ease-in')}
  &:hover {
    background: ${lighten(0.1, Color.bgSecondary)};
  }
`
export const SearchTitle = styled.h3`
  padding: 1rem;
`
export const SearchItemDescription = styled.h4`
  padding: 1rem;
`
export const SearchItemLabel = styled.span`
  font-size: 1.2rem;
  color: #eee;
  display: block;
  margin-bottom: 0.5rem;
`
export const SearchItemEmpty = styled.div`
  ${searchStyle}
`

export const SearchCloseIcon = styled(Close)`
  color: ${({ color }) => (!color ? `${Color.white}` : `${color}`)};
  width: 28px;
  height: 28px;
`
export const SearchHeader = styled.div`
  display: flex;
  padding: 1rem;
  align-items: ${({ alignItems }) => (!alignItems ? 'flex-start' : alignItems)};
  justify-content: ${({ justifyContent }) =>
    !justifyContent ? 'flex-start' : justifyContent};
`
