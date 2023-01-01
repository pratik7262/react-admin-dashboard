import { DarkModeOutlined, LightModeOutlined, NotificationAddOutlined, PersonOutline, Search, SettingsOutlined } from '@mui/icons-material';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React,{useContext} from 'react'
import {  ColorContext,tokens } from "../../theme";

export const TopBar = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  const mode=theme.palette.mode
  const ColorMode= useContext(ColorContext)
  return (
    <>
     <Box display='flex' justifyContent='space-between' p={2}>
      <Box display='flex' borderRadius='3px' backgroundColor={colors.primary[400]}>
        <InputBase sx={{flex:1 , ml:2}} placeholder='Search...'/>
        <IconButton type='button' sx={{p:1}}>
        <Search/>
        </IconButton>
      </Box>
      <Box display='flex'>
        <IconButton onClick={ColorMode.toggleColorMode}>
          {
            mode==='dark'?<DarkModeOutlined/>:<LightModeOutlined/>
          }
        </IconButton>
        <IconButton>
          <NotificationAddOutlined/>
        </IconButton>
        <IconButton>
          <SettingsOutlined/>
        </IconButton>
        <IconButton>
          <PersonOutline/>
        </IconButton>
      </Box>
     </Box>
    </>
  )
}
