import React from "react"
import AdminHome from "../pages/AdminHomePage/AdminHomePage";
import ApplicationForm from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTrip from "../pages/CreateTripPage/CreateTripPage";
import Home from "../pages/HomePage/HomePage";
import ListTrips from "../pages/ListTripsPage/ListTripsPage";
import Login from "../pages/LoginPage/LoginPage";
import TripDetail from "../pages/TripDetailPage/TripDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RouteList() {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Home />} />
                <Route path="listagem" element={<ListTrips />} />
                <Route path="formulario" element={<ApplicationForm />} />
                <Route path="login" element={<Login />} />
                <Route path="paineladm" element={<AdminHome />} />
                <Route path="detalhes" element={<TripDetail />} />
                <Route path="criar" element={<CreateTrip />} />

            </Routes>
        </BrowserRouter>
    )
}