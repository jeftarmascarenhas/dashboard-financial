import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import moment from 'moment'

import { currencyFormat } from 'utils/numberFormat'
import * as T from 'styles/typograph'
import exchangeService from 'services/exchangeService'
import Card, { CardBody } from 'components/card'
import ListGroup, { ListGroupItem } from 'components/listGroup'
import * as C from 'styles/common'
import * as S from './styled'

function Exchange({ match }) {
  const [loading, setLoading] = useState(false)
  const [seriesMonthly, setSeriesMonthly] = useState({
    metaData: {},
    monthlyTimes: [],
  })

  const getTimesSeriesMonthlyAdjusted = async symbol => {
    try {
      setLoading(true)
      const response = await exchangeService.getSeriesMonthy(symbol)
      const timesSeriesData = await response.json()
      const monthlyTimes = propName => {
        return Object.entries(timesSeriesData[propName]).map(series => {
          const date = series[0]
          const infos = series[1]
          const infosNormalize = {
            open: infos['1. open'],
            high: infos['2. high'],
            low: infos['3. low'],
            close: infos['4. close'],
            dividendAmount: infos['7. dividend amount'],
          }
          return { date, ...infosNormalize }
        })
      }
      const data = {
        metaData: { ...timesSeriesData['Meta Data'] },
        monthlyTimes: monthlyTimes('Monthly Adjusted Time Series'),
      }
      setLoading(false)
      setSeriesMonthly(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const { symbol } = match.params
  useEffect(() => {
    getTimesSeriesMonthlyAdjusted(symbol)
  }, [symbol])

  return (
    <C.Content>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <S.Header>
              <T.Title>Symbol</T.Title>
              <div className="maring-left">
                <C.Tag>{match.params.symbol}</C.Tag>
              </div>
            </S.Header>
          </Col>
          {loading && <h4>Loading</h4>}
          {!!seriesMonthly.monthlyTimes.length &&
            seriesMonthly.monthlyTimes.map(times => (
              <Col key={times.date} xs={12} sm={4}>
                <Card borderTop gutterBottom shadow>
                  <CardBody>
                    <S.DateTitle>
                      {moment(times.date).format('DD [,] MMMM [,] YYYY')}
                    </S.DateTitle>
                    <ListGroup column justifyContent="flex-start">
                      <ListGroupItem>
                        <S.TimesLabel>Open: </S.TimesLabel>
                        <S.TimesValue>
                          {currencyFormat(times.open)}
                        </S.TimesValue>
                      </ListGroupItem>
                      <ListGroupItem>
                        <S.TimesLabel>High: </S.TimesLabel>
                        <S.TimesValue>
                          {currencyFormat(times.high)}
                        </S.TimesValue>
                      </ListGroupItem>
                      <ListGroupItem>
                        <S.TimesLabel>Low:</S.TimesLabel>
                        <S.TimesValue>{currencyFormat(times.low)}</S.TimesValue>
                      </ListGroupItem>
                      <ListGroupItem>
                        <S.TimesLabel>Close:</S.TimesLabel>
                        {currencyFormat(times.close)}
                      </ListGroupItem>
                      <ListGroupItem>
                        <S.TimesLabel>Dividend amount:</S.TimesLabel>
                        <S.TimesValue>{times.dividendAmount}</S.TimesValue>
                      </ListGroupItem>
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Grid>
    </C.Content>
  )
}

Exchange.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
}

export default Exchange
