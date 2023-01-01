import { Box } from '@mui/system'
import React from 'react'
import { PieChart } from '../../components/PieChart'
import { Header } from '../../components/Header'


export const Pie = () => {
  return (
    <Box m='20px'>
        <Header title='PIE CHART' subTitle='Simple Pie Chart'/>
        <Box height='75vh'>
            <PieChart/>
        </Box>
    </Box>
  )
}
