import CartProduct from "./CartProduct";
import Header from "./Header";
function Checkout(props) {
    const displayAllItems=(items)=>{
        console.log("hello");
        items.map(product=>(
            console.log(product)
        ));
    }
    return (
        <>
            <Header count={props.count}/>
            <button onClick={()=>{displayAllItems(props.items)}}>Show</button>
            <CartProduct items={props.items}/>
            Checkout Page
        </>
    );
}

export default Checkout;