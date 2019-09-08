import styled from 'styled-components'

export const Container = styled.section`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
`
export const LoginTitle = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`

export const DevDescription = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
`
