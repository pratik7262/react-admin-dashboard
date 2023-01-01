import { Box, useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import React from "react";
import { tokens } from "../../theme";
import { Header } from "../../components/Header";

export const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID",flex:0.5 },
    { field: "registrarId", headerName: "Registrar ID",flex:0.5 },
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
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
      },
      {
        field: "zipCode",
        headerName: "Zipcode",
        flex: 1,
      },
  ];
  return (
    <Box margin="20px">
      <Header title="CONTACTS" subTitle="Contacts For The Future" />
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
        '& .MuiDataGrid-toolbarContainer .MuiButton-text ':{
            color:`${colors.grey[100]} !important`
        },
        '& .MuiDataGrid-panelFooter':{
            color:`${colors.grey[100]} !important`
        }

      }}>
        <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar:GridToolbar}}/>
      </Box>
    </Box>
  );
};
