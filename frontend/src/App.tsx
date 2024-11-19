import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

// Components
import Navbar from "./components/Navbar"; // Chakra UI Navbar
import Header from "./components/Header"; // React Bootstrap Header

const App: React.FC = () => {
  return (
    <Box className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Chakra UI Navbar */}
      <Navbar />

      {/* React Bootstrap Header converted to Tailwind */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">My App Header</h1>
      </header>

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Main Content */}
      <main className="my-2 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </main>
    </Box>
  );
};

export default App;
