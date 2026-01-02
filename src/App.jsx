import Checkout from './Components/Checkout';
import Orders from './Components/Orders';
import Home from './Components/Home';
import React from 'react';
import { Routes,Route } from 'react-router';
function App() {
  const [count,setCount]=React.useState(0);
  const [checkoutItems,setCheckoutItems]=React.useState([]);
  const updateCheckoutItems=(item)=>{
    setCheckoutItems(prevItems=>[...prevItems,item])
  }
  const updateCartCount=(quantity)=>{
    setCount(count+quantity);
  }
  return (
    <Routes>
      <Route path="/" element={<Home count={count} updateCartCount={updateCartCount} updateCheckoutItems={updateCheckoutItems}/>}/>
      <Route path='/checkout' element={<Checkout count={count} updateCartCount={updateCartCount} items={checkoutItems} updateCheckoutItems={updateCheckoutItems}/>}/>
      <Route path='/orders' element={<Orders />}/>
    </Routes>
  );
}

export default App;