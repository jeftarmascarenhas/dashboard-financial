import styled from 'styled-components'
import { UpArrow } from 'styled-icons/boxicons-solid/UpArrow'
import { DownArrow } from 'styled-icons/boxicons-solid/DownArrow'

import { Color } from 'styles/variables'

export const Content = styled.div`
  padding: 5rem 1rem 5rem 5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
`

export const SpaceLeft = styled.div`
  margin-left: 1rem;
`

export const LabelTitle = styled.h4`
  color: ${Color.white};
  font-size: 1.2rem;
`
export const IconUpArrow = styled(UpArrow)`
  color: ${Color.primary};
  width: 12px;
  height: 12px;
`
export const IconDownArrow = styled(DownArrow)`
  color: ${Color.secondary};
  width: 10px;
  height: 10px;
`
