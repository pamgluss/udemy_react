import React, { Component } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/Layout'

class App extends Component {
    static async getInitialProps(context){
        console.log(context)

        return { appName: 'This is coming from getInitialProps'}
    }

    render() {
        return(
            <Layout>
                <Head>
                    <title>Pam Next.js Learning</title>
                </Head>
                <h1>Next.js Learning</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <p>Go to <Link href="/auth/login"><a>Login</a></Link></p>

                <Image
                    src="/images/arches-np.png" // Route of the image file
                    height={555} // Desired size with correct aspect ratio
                    width={800} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
            </Layout>
        )
    }
}
  
export default App;
  