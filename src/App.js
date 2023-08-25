import './App.css';
import LayoutsApp from "./layouts/LayoutsApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/body/home/HomePage";
import ProductPage from "./components/body/product/ProductPage";
import BlogPage from "./components/body/blog/BlogPage";
import IntroducePage from "./components/body/introduce/IntroducePage";
import ContactPage from "./components/body/contact/ContactPage";
function App() {
  return (
    <div className="App">
        <LayoutsApp></LayoutsApp>
        <BrowserRouter basename="">
            <Routes>
                <Route path="/" element={HomePage}></Route>
                <Route path="/products" element={ProductPage}></Route>
                <Route path="/blog" element={BlogPage}></Route>
                <Route path="/introduce" element={IntroducePage}></Route>
                <Route path="/contact" element={ContactPage}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
