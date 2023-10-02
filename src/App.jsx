import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";
import PageSix from "./pages/PageSix";
import PageSeven from "./pages/PageSeven";
import PageEight from "./pages/PageEight";
import PageNine from "./pages/PageNine";
import PageTen from "./pages/PageTen";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page/1" element={<PageOne />} />
        <Route path="page/2" element={<PageTwo />} />
        <Route path="page/3" element={<PageThree />} />
        <Route path="page/4" element={<PageFour />} />
        <Route path="page/5" element={<PageFive />} />
        <Route path="page/6" element={<PageSix />} />
        <Route path="page/7" element={<PageSeven />} />
        <Route path="page/8" element={<PageEight />} />
        <Route path="page/9" element={<PageNine />} />
        <Route path="page/10" element={<PageTen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
