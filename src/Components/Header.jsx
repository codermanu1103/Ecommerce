import { Link } from 'react-router';
import './Header.css'
function Header(props) {
    return(
        <div className='header'>
            <div className="name">
                <Link to="/">
                    <img id="logo-image" src="public\images\logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="search">
                <input id="search-bar" type="text" placeholder='Search' />
                <button><img id="search-image" src="public\images\icons\search-icon.png" alt="Search" /></button>
            </div>
            <div id="orders-container">
                <Link id="orders" to="/orders">Orders</Link>
            </div>
            <div>
                <Link className="cart" to="/checkout">
                    <img id="cart-image" src="public\images\icons\cart-icon.png" alt="Cart" />
                    {props.count>0 && <span id='cart-count'>{props.count}</span>}
                    <span id='cart-text'>Cart</span>
                </Link>
            </div>

        </div>
    );
}

export default Header;