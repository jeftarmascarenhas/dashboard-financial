import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import Card, { CardBody } from 'components/card'
import * as T from 'styles/typograph'
import * as C from 'styles/common'
import * as S from './styled'

function Home() {
  return (
    <S.Content>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={8}>
            <S.Header>
              <T.Title>$ 245.09</T.Title>
              <S.SpaceLeft>
                <C.Tag>+13.94%</C.Tag>
              </S.SpaceLeft>
            </S.Header>
            <C.Box borderColor>
              <h4>Customer Visits</h4>
            </C.Box>
            <C.Box>
              <h4>Exchange Listing</h4>
            </C.Box>
          </Col>
          <Col xs={12} sm={4}>
            <Card>
              <CardBody>
                <h4>Current Balance</h4>
                <T.Title>$ 3506.74</T.Title>
              </CardBody>
            </Card>
            <br />
            <br />
            <Card>
              <CardBody>
                <T.Title>$ 1284.04</T.Title>
                <h4>Savings Progress</h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Grid>
    </S.Content>
  )
}

export default Home
