import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'
import { User } from 'styled-icons/evil/User'
import { CreditCard } from 'styled-icons/evil/CreditCard'
import { Calendar } from 'styled-icons/evil/Calendar'
import { Envelope } from 'styled-icons/evil/Envelope'
import { transitions } from 'polished'

import { Color, Timings, Metrics } from 'styles/variables'

const iconStyles = css`
  color: #7f84b9;
  width: 28px;
  height: 28px;
`

export const Sidebar = styled.div`
  width: 6.375rem;
  min-height: calc(100vh);
`

export const IconMenuAltRight = styled(MenuAltRight)`
  ${iconStyles}
`
export const IconUser = styled(User)`
  ${iconStyles}
`
export const IconCreditCard = styled(CreditCard)`
  ${iconStyles}
`
export const IconCalendar = styled(Calendar)`
  ${iconStyles}
`
export const IconEnvelope = styled(Envelope)`
  ${iconStyles}
`
export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100%);
  padding-top: ${Metrics.space * 10}rem;
  border-right: 1px solid ${Color.iconColor};
`
export const NavLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem;
  position: relative;
  align-self: stretch;
  text-align: center;
  min-height: 5rem;
  line-height: 5rem;
  svg,
  &::after,
  &::before {
    transform-origin: center;
    ${transitions(`all ${Timings.animationTime} ease-in-out`)}
  }
  &:hover {
    color: ${Color.white};
    svg {
      color: ${Color.white};
    }
    &::after {
      opacity: 1;
      height: 100%;
    }
    &::before {
      opacity: 1;
      visibility: visible;
      z-index: 10;
    }
  }
  .activeNav {
    opacity: 1;
  }
  &::before {
    content: attr(title);
    position: absolute;
    left: 6.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 300;
    font-size: 1.4rem;
    min-width: 15rem;
    padding-left: 0.5rem;
    display: flex;
    opacity: 0;
    visibility: hidden;
    color: ${Color.white};
  }
  &::after {
    content: '';
    background: ${Color.primary};
    position: absolute;
    top: 0;
    right: -1px;
    z-index: 1;
    height: 0;
    width: 0.2rem;
    opacity: 0;
  }
`

export const ButtonMenu = styled.button`
  border: 0;
  border-bottom: 1px solid ${Color.iconColor};
  border-right: 1px solid ${Color.iconColor};
  box-shadow: none;
  outline: none;
  width: 6.375rem;
  min-height: 6.375rem;
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
