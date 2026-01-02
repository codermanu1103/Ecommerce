import './Product.css';
import React from 'react';
function Product(props) {
    const [quantity,setQuantity]=React.useState(1);
    const addItemsToCart=()=>{
        props.updateCartCount(quantity);
        const item={
            productId:props.id,
            quantityadded: quantity, 
        }
        props.updateCheckoutItems(item);
    }
    return (
        <div className="product-container">
            <img id="product-image" src={props.image} alt={props.name} />
            <div id="name">{props.name}</div>
            <div className="rating">
                <img id="rating-image" src={props.ratingImage} alt="rating" />
                <span id="rating-count">{props.ratingCount}</span>
            </div>
            <div className="price">
                ${props.price}
            </div>
            
            <div className="dropdown">
                <select name="quantity" id="quantity" value={quantity} onChange={(e)=>{setQuantity(Number(e.target.value))}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <button id="addtocart" onClick={addItemsToCart}>Add to Cart</button>

        </div>
    );
}

export default Product;