import { Routes, Route } from "react-router-dom";


import AdminOrders from "../pages/Admin/AdminOrders";
import CartPage from "../pages/CartPage";
import CategoryProduct from "../pages/CategoryProduct";
import Categories from './../pages/Categories';
import ProductDetails from './../pages/ProductDetails';
import Search from './../pages/Search';
import UpdateProduct from './../pages/Admin/UpdateProduct';
import Products from './../pages/Admin/Products';
import Profile from './../pages/user/Profile';
import Orders from './../pages/user/Orders';
import Users from './../pages/Admin/Users';
import CreateProduct from './../pages/Admin/CreateProduct';
import CreateCategory from "../pages/Admin/CreateCategory";
import AdminDashboard from './../pages/Admin/AdminDashBoard';
import AdminRoute from "../components/Routes/AdminRoute";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Policy } from "../pages/Policy";
import { Pagenotefound } from "../pages/Pagenotefound";
import { Register } from './../pages/Register';
import { Login } from './../pages/Login';
import PrivateRoute from "../components/Routes/Private";
import { ForgetPassword } from './../pages/ForgetPassword';
import Dashboard from "./../pages/user/DashBoard"
const AllRouter = () => {
    return (

        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:slug" element={<ProductDetails />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/category/:slug" element={<CategoryProduct />} />
                <Route path="/search" element={<Search />} />

                <Route path="/dashboard" element={<PrivateRoute />} >
                    <Route path="user" element={<Dashboard />} />
                    <Route path="user/orders" element={<Orders />} />
                    <Route path="user/profile" element={<Profile />} />

                </Route>
                <Route path="/dashboard" element={<AdminRoute />}>
                    <Route path="admin" element={<AdminDashboard />} />
                    <Route path="admin/create-category" element={<CreateCategory />} />
                    <Route path="admin/create-product" element={<CreateProduct />} />
                    <Route path="admin/product/:slug" element={<UpdateProduct />} />
                    <Route path="admin/products" element={<Products />} />
                    <Route path="admin/users" element={<Users />} />
                    <Route path="admin/orders" element={<AdminOrders />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="*" element={<Pagenotefound />} />
            </Routes >
        </>

    )
}

export default AllRouter

