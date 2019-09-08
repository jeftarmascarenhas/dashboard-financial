import styled from 'styled-components'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'

export const Sidebar = styled.div`
  border-right: 1px solid #2f3779;
  width: 6.375rem;
  min-height: calc(100vh);
`

export const IconMenuAltRight = styled(MenuAltRight)`
  color: #7f84b9;
  width: 28px;
  height: 28px;
  &:hover {
    color: #fff;
  }
`

export const ButtonMenu = styled.button`
  border: 0;
  border-bottom: 1px solid #2f3779;
  box-shadow: none;
  outline: none;
  width: 6.375rem;
  min-height: 6.375rem;
  cursor: pointer;
`
