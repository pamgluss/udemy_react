import React from 'react';
import Layout from '../../components/Layout'

const Login = () => (
    <Layout>
        <h1>Login Page</h1>
        <p>This is where you'd login</p>
        <style jsx>{`
            h1 {
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
                text-align: center;
                width: 75%;
                margin: 0 auto;
            }
        `}</style>
    </Layout>
)
  
  export default Login;
  