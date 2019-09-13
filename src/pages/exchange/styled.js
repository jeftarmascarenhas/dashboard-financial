import styled from 'styled-components'

import { Color } from 'styles/variables'

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  .maring-left {
    margin-left: 1rem;
  }
`

export const DateTitle = styled.h4`
  font-size: 2rem;
  padding: 0.6rem;
`

export const TimesLabel = styled.span`
  font-size: 1.6rem;
  padding: 0.5rem;
  color: ${Color.textMuted};
  font-weight: 600;
`

export const TimesValue = styled.span`
  padding: 0.5rem;
  font-size: 1.6rem;
`
