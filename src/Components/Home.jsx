import Header from "./Header";
import Product from "./Product";
import productList from '../productList.json';
function Home(props) {
    return (
        <>
            <Header count={props.count}/>
            {
                productList.map(product=>(
                    <Product
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        ratingImage={product.ratingImage}
                        ratingCount={product.ratingCount}
                        price={product.price}
                        updateCartCount={props.updateCartCount}
                        updateCheckoutItems={props.updateCheckoutItems}
                    />
                ))
            }
            Home Page
        </>
    );
}
export default Home;