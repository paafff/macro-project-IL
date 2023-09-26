import React from 'react'
import Layout from './Layout'

import CardProfileDashboard from '../components/CardProfileDashboard'
import BiodataDashboard from '../components/BiodataDashboard'
import LaporanDashboard from '../components/LaporanDashboard'
import Footer from '../components/Footer'

const Dashboard = () => {
    return (
        <Layout>
            <div className='min-h-screen md:min-h-[600px] lg:min-h-fit lg:items-start xl:px-64 p-5 pt-24 flex flex-col items-center md:px-16'>

                <div className='w-full lg:flex'>
                    <CardProfileDashboard />
                    <BiodataDashboard />
                </div>
                <div className='w-full min-h-screen bg-slate-600 mt-8 rounded-md'>

                    <LaporanDashboard />
                </div>
            </div>
            <Footer />
            {/* <div className='min-h-screen md:min-h-[600px] lg:min-h-screen p-5 pt-20 flex flex-col items-center'>
                <p>text navbar</p>
            </div> */}
        </Layout>

    )
}

export default Dashboard