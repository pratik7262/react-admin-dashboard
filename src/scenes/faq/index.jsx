import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Header } from "../../components/Header";
import { tokens } from '../../theme';


export const FAQ = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
  return (
    <Box m='20px'>
        <Header title="FAQ" subTitle='Frequently Asked Questions Page '/>
        <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis ipsum? Quibusdam iure dignissimos possimus!
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis ipsum? Quibusdam iure dignissimos possimus!
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis ipsum? Quibusdam iure dignissimos possimus!
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis ipsum? Quibusdam iure dignissimos possimus!
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}
