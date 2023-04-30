import React, { useState } from 'react'
import Layout from '../components/Layout'
// import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
export const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [number, setnumber] = useState("")
    const [address, setaddress] = useState("")
    const submitData = async (e) => {

        e.preventDefault()
        try {



            await axios.post(`http://localhost:8080/api/v1/auth/register`,
                {
                    name, email, password, phone: number, address

                }).then((res) => {
                    if (res.data.success === true) {
                        toast.success("Registration Done")
                        navigate("/login")
                    } else {

                        toast.error("Registration Error")
                    }
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

                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => setemail(e.target.value)} type="email" placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder='Password' className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => setnumber(e.target.value)} type="number" placeholder='Phone Number' className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => setaddress(e.target.value)} type="text" placeholder='Address' className="form-control" id="exampleInputPassword1" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </Layout>
        </>
    )
}
