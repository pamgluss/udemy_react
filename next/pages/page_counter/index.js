import React from 'react';
import useSWR from 'swr'

import Layout from '../../components/Layout'

const fetcher = (url) => fetch(url).then((res) => res.json());

const PageCounter = () => {
    const { data, error } = useSWR('/api/visitCounter', fetcher);

    console.log(data);

    return (
        <Layout>
            <h1>Visit Counter</h1>
            <p>The count is {data ? data.count : 1}</p>
        </Layout>)
}


export default PageCounter;
