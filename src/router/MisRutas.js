import { React, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Principal from '../views/Principal.js';
import Panaderia from '../views/Panaderia.js';
import PasteleriaBolleria from '../views/PasteleriaBolleria.js';
import Empanadas from '../views/Empanadas.js';
import Contacto from '../views/Contacto.js';
import Error404 from '../views/Error404.js';
import HeaderNav from '../components/layout/HeaderNav.tsx';
import Footer from '../components/layout/Footer.js';

const MisRutas = () => {
    return (
        <Suspense fallback="loading">
        <BrowserRouter>
            {/* Header y navegacion */}
            <HeaderNav />
            <hr />
            {/* Contenido central */}
            <Routes>
                <Route path='/' element={<Principal />} />
                <Route path='/Principal' element={<Principal />} />
                <Route path='/Panaderia' element={<Panaderia />} />
                <Route path='/PasteleriaBolleria' element={<PasteleriaBolleria />} />
                <Route path='/Empanadas' element={<Empanadas />} />
                <Route path='/Contacto' element={<Contacto />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            {/* Footer */}
            <hr />
            <Footer />
        </BrowserRouter>
        </Suspense>
    );
};

export default MisRutas;
