import React from 'react'
import Layout from './Layout'

import BiodataDashboard from '../components/BiodataDashboard'
import BiodataDashboardDisabled from '../components/BiodataDashboardDisabled'
import Footer from '../components/Footer'

const Dashboard = () => {



    return (
        <Layout>
            <BiodataDashboard />
            {/* <BiodataDashboardDisabled /> */}
            <Footer />
        </Layout>

    )
}

export default Dashboard