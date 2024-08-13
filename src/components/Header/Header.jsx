import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search.png'; // Import your search button image
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';

const Header = ({ cartItems }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    // Function to handle search
    const handleSearch = () => {
        // Redirect to search page with the search query as a parameter
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <div className={css.headerContainer}>
            <div className={css.container}>
                <div className={css.logo}>
                    <img src={Logo} alt="NutriNudge Logo" />
                    <span>NutriNudge</span>
                </div>

                <div className={css.right}>
                    <div className={css.bars} onClick={toggleMenu}>
                        <GoThreeBars />
                    </div>

                    <div className={`${css.menu} ${showMenu ? css.showMenu : css.hideMenu}`}>
                        <ul className={css.menuList}>
                            <li onClick={() => navigate("/home")}>Products</li>
                            <li onClick={() => navigate("/contact")}>Contact</li>
                            <li onClick={() => navigate("/about")}>About Us</li>
                            <li onClick={() => navigate("/login")}>Login</li>
                            <li onClick={() => navigate("/profile")}>Profile</li>
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
        </div>
    );
};

export default Header;
