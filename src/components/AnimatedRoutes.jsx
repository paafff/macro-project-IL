import React from 'react'

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

import Home from "../pages/Home";
import About from "../pages/About";
import Report from "../pages/Report";
import Authentication from "../pages/Authentication";
import Dashboard from "../pages/Dashboard";
import Pengaduan from "../pages/Pengaduan";
import DetailReport from "../pages/DetailReport";
import PageNotFound from "../pages/PageNotFound";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (

        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/auth" element={<Authentication />} />
                <Route path="/report" element={<Report />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pengaduan" element={<Pengaduan />} />
                <Route path="/report/info/:index" element={<DetailReport />} />
                <Route path="/404" element={<PageNotFound />} />
            </Routes>

        </AnimatePresence>
    )
}

export default AnimatedRoutes