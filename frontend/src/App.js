import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<h2>Shop Page</h2>} />
        <Route path="/offers" element={<h2>Offers Page</h2>} />
        <Route path="/categories" element={<h2>Categories Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
         <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
