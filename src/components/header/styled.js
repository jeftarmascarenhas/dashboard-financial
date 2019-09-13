import styled from 'styled-components'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'
import { transitions } from 'polished'

import { Color, Timings } from 'styles/variables'

export const Header = styled.header`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #2f3779;
  height: 6.375rem;
`

export const IconMenuAltRight = styled(MenuAltRight)`
  color: #7f84b9;
  width: 28px;
  height: 28px;
`

export const ButtonMenu = styled.button`
  border: 0;
  border-bottom: 1px solid ${Color.iconColor};
  border-right: 1px solid ${Color.iconColor};
  box-shadow: none;
  outline: none;
  width: 6.375rem;
  height: 6.375rem;
  cursor: pointer;
  > svg {
    ${transitions(`all ${Timings.animationTime} ease-in-out`)}
  }
  &:hover {
    svg {
      color: ${Color.white};
    }
  }
`
