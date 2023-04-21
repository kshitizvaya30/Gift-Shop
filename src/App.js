import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleProduct from "./components/Single Product/SingleProduct";
import Success from "./components/Success/Success";
import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/category/:id" Component={Category} />
          <Route path="/products/:id" Component={SingleProduct} />
          <Route path="/success" Component={Success} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
