import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom';

export const Pagenotefound = () => {

    return (
        <Layout>
            <div className="pnf">
                <h1 className="pnf-title">404</h1>
                <h2 className="pnf-heading">Oops ! Page Not Found</h2>
                <NavLink to="/" className="pnf-btn">
                    Go Back
                </NavLink>
            </div>
        </Layout>
    );

}
