import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory for routing
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search.png'; // Import your search button image
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';

const Header = ({ cartItems }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Initialize useHistory

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu((showMenu) => !showMenu);
    };

    // Function to handle search
    const handleSearch = () => {
        // Redirect to search page with the search query as a parameter
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>NutriNudge</span>
            </div>

            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars />
                </div>

                <div className={css.menu}>
                    <ul className={css.menu} style={{ display: showMenu ? 'inherit' : 'none' }}>
                        <li onClick={() => { setShowMenu("Products") }}>Products{showMenu === "Collections" ? <hr /> : <></>}</li>
                        <li onClick={() => { setShowMenu("Contact") }}>Contact{showMenu === "Contact" ? <hr /> : <></>}</li>
                        <li onClick={() => { setShowMenu("About Us") }}>About Us{showMenu === "About Us" ? <hr /> : <></>}</li>
                        <li onClick={() => { setShowMenu("Login") }}>Login{showMenu === "Login" ? <hr /> : <></>}</li>
                        <li onClick={() => { setShowMenu("Profile") }}>Profile{showMenu === "Profile" ? <hr /> : <></>}</li>
                    </ul>
                </div>

                <div className={css.searchContainer}>
                    <div className={css.searchBox}>
                        <input
                            type="text"
                            className={css.search}
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <img src={SearchIcon} alt="Search" className={css.searchIcon} onClick={handleSearch} />
                    </div>
                </div>

                <Link to="/cart" className={css.cart}> {/* Link to cart page */}
                    <CgShoppingBag />
                    <span className={css.cartItemCount}>{cartItems.length}</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
