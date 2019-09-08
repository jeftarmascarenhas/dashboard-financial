import React from 'react'
import { storiesOf } from '@storybook/react'

import TextField from '../src/components/textField'

storiesOf('TextField', module)
  .add('default', () => <TextField />)
  .add('placeholder', () => <TextField placeholder="Username" />)
  .add('helpText and inValid', () => (
    <>
      <TextField placeholder="Username" inValid helpText="Obrigatório" />
      <TextField
        type="password"
        placeholder="Senha"
        inValid
        helpText="Obrigatório"
      />
    </>
  ))
