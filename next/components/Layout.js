import React from 'react'
import styles from './layout.module.css'
import Router from 'next/router'

const layout = ({ children }) => (
    <div className={styles.container}>
        <nav>
            <button onClick={() => Router.push('/')}>Go Home</button>
            <button onClick={() => Router.push('/auth/login')}>Login</button>
        </nav>
        {children}
    </div>
)

export default layout;