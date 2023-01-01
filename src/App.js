import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { ColorContext, useMode } from "./theme";
import { TopBar } from "./scenes/global/TopBar";
import {SideBar} from './scenes/global/SideBar'
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./scenes/dashboard";
import { Team } from "./scenes/team";
import { Contacts } from "./scenes/contacts";
import { Invoices } from "./scenes/invoices";
// import { Form } from "./scenes/form";
import { Calendar } from "./scenes/calendar";
import { FAQ } from "./scenes/faq";
import { Bar } from "./scenes/bar";
import { Pie } from "./scenes/pie";
import { Line } from "./scenes/line";
import { Geography } from "./scenes/geography";
import { Mobile } from "./components/Mobile";



function App() {
  const isNoMobile=useMediaQuery('(min-width:600px)');
  const isLookingGood=useMediaQuery('(min-width:1100px)');
  console.log(isNoMobile)
  const [theme, colorMode] = useMode();
  
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          
         
          {isLookingGood && <SideBar />}
          <main className="content">
          {isLookingGood? <>
            <TopBar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              {/* <Route path="/form" element={<Form/>}/> */}
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/geography" element={<Geography/>}/>
            </Routes>
            </>:<Mobile/>}
          </main>
        </div>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
