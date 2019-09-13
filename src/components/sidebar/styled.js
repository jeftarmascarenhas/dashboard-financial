import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
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
  min-height: calc(100vh);
  border-right: 1px solid ${Color.iconColor};
  display: none;
  @media (min-width: 968px) {
    display: block;
    width: 6.375rem;
  }
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
