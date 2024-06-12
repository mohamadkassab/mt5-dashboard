import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admins" element={<ControlCenter />} />
            <Route path="users" element={<ControlCenter />} />
            <Route path="mt5Configurations" element={<ControlCenter />} />
            <Route path="managers" element={<ControlCenter />} />
            <Route path="coverageServers" element={<ControlCenter />} />
            <Route path="coverageAccounts" element={<ControlCenter />} />
            <Route path="permissions" element={<ControlCenter />} />
            <Route path="roles" element={<ControlCenter />} />
            <Route path="types" element={<ControlCenter />} />
            <Route path="symbols" element={<ControlCenter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
