import styled from 'styled-components'

import { Color } from 'styles/variables'

export const Tag = styled.span`
  background: ${({ type }) =>
    type === 'success' ? `${Color.success}` : `${Color.bgSecondary}`};
  color: ${Color.primary};
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.9rem;
`

export const Box = styled.div`
  padding: 1.5rem;
  border: ${({ borderColor }) =>
    borderColor ? `thin solid ${Color.bgSecondary}` : 'none'};
`
