import React from 'react'
import { storiesOf } from '@storybook/react'

import Card, { CardBody } from '../src/components/card'

storiesOf('Card', module)
  .add('without CardBody', () => <Card variant="primary">Card</Card>)
  .add('with CardBody', () => (
    <Card variant="primary">
      <CardBody>Card</CardBody>
    </Card>
  ))
  .add('CardBody shadow', () => (
    <Card variant="primary" shadow>
      <CardBody>Card</CardBody>
    </Card>
  ))
