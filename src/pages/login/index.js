import React, { useState, useContext } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from 'contexts/auth'
import Card, { CardBody } from 'components/card'
import Button from 'components/button'
import TextField from 'components/textField'
import SEO from 'components/seo'
import * as S from './styled'

const validationSchema = yup.object().shape({
  username: yup.string().required('Nome obrigatório'),
})

function Login() {
  const [loading, setLoading] = useState(false)
  const { setUserInfo } = useContext(AuthContext)

  const handleAuth = (values, { setSubmitting }) => {
    console.log(values)
    setLoading(true)
    setTimeout(() => {
      setUserInfo({
        isUserLoggedIn: true,
        user: values.username,
      })
      window.localStorage.setItem('user', values.username)
      setLoading(false)
    }, 1200)
    setSubmitting(false)
  }

  return (
    <>
      <SEO
        title="Finalcial Exchange - Login"
        description="Finalcial Exchange Use your username"
      />
      <S.Container>
        <Card shadow borderTop>
          <CardBody>
            <S.LoginTitle center>Financial Exchange</S.LoginTitle>
            <Formik
              initialValues={{ username: '' }}
              validationSchema={validationSchema}
              onSubmit={handleAuth}
              render={({ handleSubmit, handleChange, values, errors }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    inValid={!!errors.username}
                    helpText={errors.username}
                    label="Username"
                    placeholder="ex: Jeftar Sales"
                  />
                  <Button disabled={loading} type="submit">
                    {!loading ? 'Access' : 'Aguarde...'}
                  </Button>
                </form>
              )}
            />
            <S.DevDescription>By Jeftar Mascarenhas</S.DevDescription>
          </CardBody>
        </Card>
      </S.Container>
    </>
  )
}

export default Login
