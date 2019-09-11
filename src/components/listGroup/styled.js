import styled from 'styled-components'

import { Color } from 'styles/variables'

export const ListGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const ListGroupItem = styled.li`
  font-size: 1.4rem;
  text-align: ${({ aligText }) => (aligText ? `${aligText}` : 'left')};
  .label {
    font-size: 1.08rem;
    display: block;
    margin-bottom: 0.5rem;
    color: ${Color.textMuted};
  }
`
