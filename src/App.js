import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Pengaduan from "./pages/Pengaduan";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DetailReport from "./pages/DetailReport";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/report" element={<Report />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pengaduan" element={<Pengaduan />} />
            <Route path="/report/info/:index" element={<DetailReport />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
