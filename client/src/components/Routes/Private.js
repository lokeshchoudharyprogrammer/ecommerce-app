import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            
            if (auth?.token) {
                setOk(true);
            } else {
                setOk(false);
            }
           
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);
    console.log(auth)
    console.log(ok)

    return ok ? <Outlet /> : <Spinner />;
}