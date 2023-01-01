import { Box } from '@mui/system'
import React from 'react'
import { LineChart } from '../../components/LineChart'
import { Header } from '../../components/Header'


export const Line = () => {
  return (
    <Box m='20px'>
        <Header title='LINE CHART' subTitle='Simple Line Chart'/>
        <Box height='75vh'>
            <LineChart/>
        </Box>
    </Box>
  )
}
