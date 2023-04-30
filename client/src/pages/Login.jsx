
import React, { useContext, useState } from 'react'
import Layout from '../components/Layout'
// import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../ContextApi/ContextApi';
export const Login = () => {

    const app = useContext(AuthContext)
    console.log(app)


    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submitData = async (e) => {

        e.preventDefault()
        try {



            await axios.post(`http://localhost:8080/api/v1/auth/login`,
                {
                    email, password

                }).then((res) => {
                    console.log(res)
                    toast.success(res.data.message)
                    app.setAuth(res.data)
                    sessionStorage.setItem("auth", JSON.stringify(res.data))
                    navigate("/")



                })

        } catch (error) {
            console.log("error")
            toast.error("Registration Error")

        }
    }
    return (
        <>
            <Layout>

                <div className='register'>
                    <form onSubmit={submitData}>

                        <div className="mb-3">
                            <input onChange={(e) => setemail(e.target.value)} type="email" placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder='Password' className="form-control" id="exampleInputPassword1" required />
                        </div>


                        <button type="submit" className="btn btn-primary">LOGIN</button>
                    </form>

                </div>
            </Layout>
        </>
    )
}
