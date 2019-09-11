import styled from 'styled-components'
import { lighten, rgba } from 'polished'

import { Color } from 'styles/variables'

export const Tag = styled.span`
  display: inline-block;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  background: ${({ type }) =>
    ((type === 'primary' || !type) && lighten(0.04, Color.bgSecondary)) ||
    (type === 'success' && Color.success) ||
    (type === 'secondary' && rgba(Color.secondary, 0.4))};
  color: ${({ type }) =>
    ((type === 'primary' || !type) && Color.primary) ||
    (type === 'success' && lighten(0.2, Color.success)) ||
    (type === 'secondary' && Color.secondary)};
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0.78rem 0.96rem;
`

export const Box = styled.div`
  padding: 1.5rem;
  border: ${({ borderColor }) =>
    borderColor ? `thin solid ${Color.bgSecondary}` : 'none'};
  margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '2rem' : 'auto')};
`
