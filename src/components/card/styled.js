import styled from 'styled-components'

import { Color } from 'styles/variables'

export const Card = styled.div`
  background-color: #181757;
  color: #fff;
  box-shadow: ${({ shadow }) =>
    shadow ? `0 0 2rem ${Color.shadow} ` : 'none'};
  border-radius: ${({ radius }) => (radius ? '0.3rem' : '0')};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid #fff' : '0')};
`
export const CardBody = styled.div`
  padding: 1.5rem;
`
