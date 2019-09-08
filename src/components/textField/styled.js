import styled from 'styled-components'

import { Color } from 'styles/variables'

export const TextField = styled.div`
  margin-bottom: 2rem;
  > input {
    border-bottom: ${({ inValid }) =>
      !inValid ? '1px solid #fff' : `1px solid ${Color.error}`}
`

export const Label = styled.label`
  color: #fff;
  font-size: 1.4rem;
`

export const Input = styled.input`
  border: 0;
  outline: none;
  box-shadow: none;
  min-height: 4.6rem;
  display: block;
  background: transparent;
  width: 100%;
  padding: 0.5rem 0rem;
  color: #fff;
  font-size: 1.35rem;
  font-weight: 300;
  &::placeholder {
    color: #f0f0f0;
  }
`

export const HelpText = styled.span`
  margin-top: 0.5rem;
  padding: 0.5rem 0rem;
  font-size: 1.4rem;
  color: ${({ inValid }) => (!inValid ? '#fff' : `${Color.error}`)};
`
