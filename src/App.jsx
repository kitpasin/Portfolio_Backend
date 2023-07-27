/* eslint-disable */
import { useState } from "react";
import "./App.css";

// components
import Navbar from "./components/layouts/navbar/Navbar";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects"
import Contacts from "./pages/contacts/Contacts";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center w-full text-white font-bold overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className="flex flex-col justify-start w-full h-screen">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="bg-gray-300 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
