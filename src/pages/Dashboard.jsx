import React from 'react'
import Layout from './Layout'

import CardProfileDashboard from '../components/CardProfileDashboard'
import BiodataDashboard from '../components/BiodataDashboard'
import LaporanDashboard from '../components/LaporanDashboard'
import Footer from '../components/Footer'

const Dashboard = () => {
    return (
        <Layout>
            <BiodataDashboard />
            <Footer />
        </Layout>

    )
}

export default Dashboard