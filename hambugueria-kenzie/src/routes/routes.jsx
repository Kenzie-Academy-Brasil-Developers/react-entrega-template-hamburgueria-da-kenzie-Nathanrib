import React from "react"
import { Routes, Route } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage/DashboardPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"

export const RoutesComponents = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}