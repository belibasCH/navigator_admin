import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Navigatoren from "./components/Navigatoren";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="text-gray-600 h-screen">
        <Navbar />
        <main className="h-full flex flex-row border-t-top border-l-left p-12 w-full">
   

            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/Navigatoren" element={<Navigatoren />} />


            </Routes>


        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
