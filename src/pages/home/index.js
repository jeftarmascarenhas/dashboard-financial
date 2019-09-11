import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { fundsListing, customerVisits } from 'fake-data/homeData'
import Card, { CardBody } from 'components/card'
import ListGroup, { ListGroupItem } from 'components/listGroup'
import { LineChartData } from 'components/charts'
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
            <C.Box gutterBottom borderColor>
              <h4>Customer Visits</h4>
              <br />
              <LineChartData data={customerVisits} />
            </C.Box>
            <Row>
              <Col xs={12}>
                <T.SubTitle>Funds Listing</T.SubTitle>
                {fundsListing.map(fund => (
                  <Card gutterBottom key={fund.id}>
                    <CardBody>
                      <ListGroup>
                        <C.Tag>{fund.id}</C.Tag>
                        <ListGroupItem>{fund.name}</ListGroupItem>
                        {fund.infos.map(info => (
                          <ListGroupItem aligText="center" key={info.id}>
                            <span className="label">{`${info.year} year`}</span>
                            <span>
                              {info.percent > 0 ? (
                                <S.IconUpArrow />
                              ) : (
                                <S.IconDownArrow />
                              )}
                              {`${info.percent}%`}
                            </span>
                          </ListGroupItem>
                        ))}
                        <ListGroupItem>{fund.coat}</ListGroupItem>
                        <C.Tag type={fund.risk === 'high' && 'secondary'}>
                          {fund.riskName}
                        </C.Tag>
                      </ListGroup>
                    </CardBody>
                  </Card>
                ))}
              </Col>
            </Row>
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
