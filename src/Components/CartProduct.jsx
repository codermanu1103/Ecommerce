import productList from "../productList.json"
import "./ComponentsCSS/CartProduct.css"
function Cartproduct(props) {
    console.log(props);
    console.log(productList[0]);
    const add=()=>{
        props.updateCartQuantity(props.productId,props.quantity+1)
        props.updateCartCount(1);
        console.log("Add")
    }
    const Delete=()=>{
        props.updateCartQuantity(props.productId,props.quantity-1)
        props.updateCartCount(-1);
        console.log("Delete");
    }
    return (
        <div id="CheckoutItem">
            <div id="deliveryDate">Tuesday, February 05</div>
            <div className="itemDetails">
                <div className="productDetails">
                    <div className="product">
                        <div className="productImage"> <img className="productImage" src={productList[props.productId-1].image} alt="product image" /></div>
                        <div id="productdetails">
                            <div id="name">{productList[props.productId-1].name}</div>
                            <div id="price">{productList[props.productId-1].price}</div>
                        </div>
                    </div>
                    <div className="quantity">
                        <span id="quantityText">Quantity: </span>
                        <button id="addButton" className="addButton" onClick={add}> + </button>
                        <span id="quantity"> {props.quantity} </span>
                        <button id="deleteButton" className="addButton" onClick={Delete}> - </button>
                    </div>
                </div>
                <div className="deliveryOptions">

                </div>
            </div>
            
            
        </div>
    );
}

export default Cartproduct;