import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarcodeScanner from "./components/BarcodeScanner/BarcodeScanner";
import Layout from "./components/Layout/Layout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Scanner from "./pages/Scanner/Scanner";
import { ScanProvider } from "./services/ScannerContext/ScanContext";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <ScanProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/scanner" element={<Scanner />} />
        </Routes>
      </BrowserRouter>
    </ScanProvider>
  );
}

export default App;