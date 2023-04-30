import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { AuthContext } from '../ContextApi/ContextApi'
// import { useAuth } from '../ContextApi/ContextApi'
// AuthContext
const HomePage = () => {
    const app = useContext(AuthContext)
    console.log(app)

    return (
        <Layout>
            <h1>Home Page</h1>
            <pre>
                {
                    JSON.stringify(app.auth)
                }
            </pre>

        </Layout>
    )
}

export default HomePage
