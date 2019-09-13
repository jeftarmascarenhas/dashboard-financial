import styled from 'styled-components'

import { Color } from 'styles/variables'

export const ListGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ column }) => (!column ? 'row' : 'column')};
  justify-content: ${({ justifyContent }) =>
    !justifyContent ? 'flex-start' : `${justifyContent}`};
  align-items: ${({ alignItems }) =>
    !alignItems ? 'flex-start' : `${alignItems}`};
`

export const ListGroupItem = styled.li`
  font-size: 1.4rem;
  text-align: ${({ aligText }) => (aligText ? `${aligText}` : 'left')};
  padding: 0.6rem;
  .label {
    font-size: 1.08rem;
    display: block;
    margin-bottom: 0.5rem;
    color: ${Color.textMuted};
  }
`
