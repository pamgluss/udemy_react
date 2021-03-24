import React from 'react';

import Head from 'next/head';
import User from '../../components/User'

import Layout from '../../components/Layout'

const Auth = (props) => (
    <Layout>
        <Head>
            <title>Auth Index Page</title>
        </Head>

        <h1>Auth Index Page</h1>
        <User name="Pam" age={props.age} />
    </Layout>
)

Auth.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ age: 27 })
        }, 1000);
    })

    return promise;
}
  
export default Auth;
  