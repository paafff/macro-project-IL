import React from 'react'

import Layout from './Layout'

import ImageNotFound from '../assets/image/notFound.svg'

const PageNotFound = () => {
    return (
        <Layout>
            <div className='min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden'>
                <img src={ImageNotFound} className='' alt="page not found" srcset="" />
                <h1 className='my-8 text-red-700 text-7xl'>Page Not Found</h1>
            </div>
        </Layout>
    )
}

export default PageNotFound