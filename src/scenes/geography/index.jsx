import { useTheme } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { GeographyChart } from '../../components/GeographyChart'
import { Header } from '../../components/Header'
import { tokens } from '../../theme'


export const Geography = () => {
    const theme= useTheme()
    const colors=tokens(theme.palette.mode)
  return (
    <Box m='20px'>
        <Header title='GEOGRAPHY CHART' subTitle='Simple Geo Chart'/>
        <Box height='75vh' border={`1px solid ${colors.grey[100]}`}>
            <GeographyChart/>
        </Box>
    </Box>
  )
}
