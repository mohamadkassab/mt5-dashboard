import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Menu } from "./utils/constants/Constants";
import ControlCenter from "./pages/ControlCenter";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: "#020817",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#020817",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path={Menu[0].path} element={<Dashboard />} />
            <Route path={Menu[1].path} element={<ControlCenter />} />
            <Route path={Menu[2].path} element={<ControlCenter />} />
            <Route path={Menu[3].path} element={<ControlCenter />} />
            <Route path={Menu[4].path} element={<ControlCenter />} />
            <Route path={Menu[5].path} element={<ControlCenter />} />
            <Route path={Menu[6].path} element={<ControlCenter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
