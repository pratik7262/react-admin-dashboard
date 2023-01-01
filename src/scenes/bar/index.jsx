import { Box } from '@mui/system'
import React from 'react'
import { BarChart } from '../../components/BarChart'
import { Header } from '../../components/Header'


export const Bar = () => {
  return (
    <Box m='20px'>
        <Header title='BAR CHART' subTitle='Simple Bar Chart'/>
        <Box height='75vh'>
            <BarChart/>
        </Box>
    </Box>
  )
}
