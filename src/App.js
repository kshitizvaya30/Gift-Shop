import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AppContext from "./utils/Context";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
