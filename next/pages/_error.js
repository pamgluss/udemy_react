import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Something Went Wrong</h1>
        <p>Try returning <Link href="/"><a>Home</a></Link></p>
    </div>
)
  
  export default errorPage;
  