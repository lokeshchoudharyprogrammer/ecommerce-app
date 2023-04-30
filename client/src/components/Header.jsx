import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi";
import toast from "react-hot-toast"
import { AuthContext } from '../ContextApi/ContextApi';
const Header = () => {


    const app = useContext(AuthContext)
    console.log(app.auth.user)
    const handleLogout = () => {
        app.setAuth({
            ...app.auth,
            user: null,
            token: ""
        })
        sessionStorage.removeItem("auth")
        toast.success("logged out successfully 🙂")

    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link k to="/" className="navbar-brand">
                            🛒 Ecommerce App
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link ">
                                    Category
                                </NavLink>
                            </li>
                            {!app.auth.user ? <>




                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link">
                                        Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">
                                        Login
                                    </NavLink>
                                </li>
                            </> : <li className="nav-item">
                                <NavLink onClick={handleLogout} to="/login" className="nav-link">
                                    Logout
                                </NavLink>
                            </li>


                            }
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">
                                    Cart (0)
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header
