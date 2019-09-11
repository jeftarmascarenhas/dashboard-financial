import React from 'react'
import PropTypes from 'prop-types'

import { LineChart, Line, XAxis, Tooltip, Legend } from 'recharts'

const LineChartData = ({ data, strockA, strockB, dataKeyA, dataKeyB }) => {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={dataKeyA}
        stroke={strockA}
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey={dataKeyB} stroke={strockB} />
    </LineChart>
  )
}

LineChartData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  strockA: PropTypes.string,
  strockB: PropTypes.string,
  dataKeyA: PropTypes.string,
  dataKeyB: PropTypes.string,
}

LineChartData.defaultProps = {
  data: [],
  strockA: '#8884d8',
  strockB: '#82ca9d',
  dataKeyA: 'pv',
  dataKeyB: 'av',
}

export default LineChartData
