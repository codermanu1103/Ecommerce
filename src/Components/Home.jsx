import Header from "./Header";
import Product from "./Product";
import productList from '../productList.json';
function Home(props) {
    const print=()=>{
        console.log("hello");
        productList.map(product=>(
            console.log(product.id)
        ));
    }
    return (
        <>
            <button onClick={print}>Click</button>
            <Header count={props.count}/>
            <Product image="public\images\products\athletic-cotton-socks-6-pairs.jpg" name="Black and Grey Socks" ratingImage="public\images\ratings\rating-45.png" ratingCount="87" price="10.90" updateCartCount={props.updateCartCount}/>
            Home Page
        </>
    );
}
export default Home;