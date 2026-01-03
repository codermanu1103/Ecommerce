import productList from "../productList.json"

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
        <>
            <div>{props.productId}</div>
            <button onClick={add}>+</button>
            <span>{props.quantity}</span>
            <button onClick={Delete}>-</button>
        </>
    );
}

export default Cartproduct;