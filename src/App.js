import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar/Navbar';
import Products from './components/products/Products';
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Products />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/product/:id' element={<SingleItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
