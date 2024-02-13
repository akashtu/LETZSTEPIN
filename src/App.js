import "./App.css";
import { Health } from "./Health/Health";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";
import { Fitness } from "./Fitness/Fitness";
import { Education } from "./Education/Education";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
