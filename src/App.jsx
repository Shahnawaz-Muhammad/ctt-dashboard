import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import Sidebar from "./components/sidebar";
import Navbar from "./navbar";

function App() {
  return (
    <div className="px-2 lg:px-8 h-screen overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <div className="flex space-x-2 lg:space-x-14">
          <Sidebar />
          <Routes>
            <Route>
              {/* <Route index element={<About />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
