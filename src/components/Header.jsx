import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
export const Header = (props) => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
  return (
    <Box sx={{mb:'30px'}}>
        <Typography variant='h2' color={colors.grey[100]} sx={{mb:'5px'}}>{props.title}</Typography>
        <Typography variant='h5' color={colors.greenAccent[400]}>{props.subTitle}</Typography>
    </Box>
  )
}
