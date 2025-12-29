import Checkout from './Components/Checkout';
import Orders from './Components/Orders';
import Home from './Components/Home';
import React from 'react';
import { Routes,Route } from 'react-router';
function App() {
  // const [count,setCount]=React.useState(0);
  // const updateCartCount=()=>{
  //   setCount(count+1);
  // }
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/orders' element={<Orders />}/>
    </Routes>
  );
}

export default App;