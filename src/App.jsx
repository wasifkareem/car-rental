import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
