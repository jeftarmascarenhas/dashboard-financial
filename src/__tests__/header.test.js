import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Header from 'components/header'

afterAll(cleanup)

describe('<Header />', () => {
  it('rendering', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})
