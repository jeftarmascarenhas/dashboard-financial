import styled from 'styled-components'
import { lighten, rgba } from 'polished'

import { Color } from 'styles/variables'

export const Button = styled.button`
  background-color: ${({ variant }) =>
    variant === 'primary' ? Color.primary : Color.secondary};
  border: 1px solid transparent;
  border-radius: 0.3rem;
  padding: 0.675rem 0.95rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  user-select: none;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  width: 100%;
  vertical-align: middle;
  outline: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ variant }) =>
      variant === 'primary'
        ? lighten(0.1, Color.primary)
        : lighten(0.1, Color.secondary)};
  }
  &:focus {
    box-shadow: ${variant =>
      `0 0 0 0.2rem ${
        variant === 'primary'
          ? rgba(Color.primary, 0.2)
          : rgba(Color.secondary, 0.2)
      };}
        `};
  }
`
