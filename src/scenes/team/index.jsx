import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import React from "react";
import { tokens } from "../../theme";
import { Header } from "../../components/Header";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography sx={{ ml: "5px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box margin="20px">
      <Header title="MANAGE TEAM" subTitle="Manage Your Team Here" />
      <Box m="40px 0 0 0" height="75vh" sx={{
        "& .MuiDataGrid-root":{
            border:'none'
        },
        '& .MuiDataGrid-cell':{
            borderBottom:'none'
        },
        '& .name-column--cell':{
            color:colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeader":{
            backgroundColor:colors.blueAccent[700],
            border:'none'
        },
        "& .MuiDataGrid-virtualScroller":{
            backgroundColor:colors.primary[400],
           
        },
        "& .MuiDataGrid-footerContainer":{
            backgroundColor:colors.blueAccent[700],
            borderTop:'none'
        },

      }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
