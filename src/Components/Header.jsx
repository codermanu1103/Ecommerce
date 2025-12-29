import { Link } from 'react-router';
import './Header.css'
function Header(props) {
    const {count}=props;
    return(
        <div className='header'>
            <div className="name">
                <Link to="/">
                    <img src="public\images\logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="search">
                <input type="text" placeholder='Search' />
                <button><img id="search-image" src="public\images\icons\search-icon.png" alt="Search" /></button>
            </div>
            <div>
                <Link to="/orders">Orders</Link>
            </div>
            <div className="cart">
                <Link to="/checkout">
                    <img id="cart-image" src="public\images\icons\cart-icon.png" alt="Cart" />
                    {count>0 && <span id='cart-count'>{count}</span>}
                    <span id='cart-text'>Cart</span>
                </Link>
            </div>

        </div>
    );
}

export default Header;