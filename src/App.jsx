import Checkout from './Components/Checkout';
import Orders from './Components/Orders';
import Home from './Components/Home';
import React from 'react';
import { Routes,Route } from 'react-router';
function App() {
  const [count,setCount]=React.useState(0);
  const [checkoutItems,setCheckoutItems]=React.useState([]);
  const updateCartQuantity=(id,quantity)=>{
    if(quantity>0) {
      setCheckoutItems(prevItems=>
        prevItems.map(item=>
          item.productId===id?{...item,quantity:quantity}:item
        )
      )
    }
    else if(quantity==0){
      setCheckoutItems(prevItems=>
        prevItems.filter(item=>item.productId!==id)
      )
    }
  }
  const updateCheckoutItems=(item)=>{
    setCheckoutItems(prevItems=>[...prevItems,item])
  }
  const updateCartCount=(quantity)=>{
    if(count+quantity>=0) setCount(count+quantity);
  }
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home 
                  count={count} 
                  updateCartCount={updateCartCount} 
                  items={checkoutItems} 
                  updateCheckoutItems={updateCheckoutItems}
                  updateCartQuantity={updateCartQuantity}
                />}
      />
      <Route 
        path='/checkout' 
        element={<Checkout 
                  count={count} 
                  updateCartCount={updateCartCount} 
                  items={checkoutItems} 
                  updateCheckoutItems={updateCheckoutItems} 
                  updateCartQuantity={updateCartQuantity}
                />}
      />
      <Route path='/orders' element={<Orders />}/>
    </Routes>
  );
}

export default App;