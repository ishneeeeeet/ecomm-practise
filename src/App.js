import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
