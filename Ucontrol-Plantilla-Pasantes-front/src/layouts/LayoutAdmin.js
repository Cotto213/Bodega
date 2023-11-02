import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//componetes de diseño de layout
import SideBar from '../components/Admin/SideBar';
import TopBar from '../components/Admin/TopBar';
import Footer from '../components/Others/Footer';
import PagesTitle from '../components/Others/PagesTitle';
import SignIn2 from './LayoutLogin';
import PageExample from '../pages/CRM/PageExample/PageExample';

//para validar las sesiones y evitar que las paginas sean vistas si no esta logueado

import useAuth from '../hooks/useAuth';
import CartProvider from '../context/CartContext';



export default function LayoutAdmin(props) {
    const { routes } = props;

    const { user, isLoading } = useAuth();  //esto servira para validar que no venga vacio
    if ((user === null && !isLoading)) {

        return (
            <>
                <Route path={'/'} component={PageExample} />
                <Redirect exact to={'/'} />
            </>
        )
    }
    if (user && !isLoading) {
        return (
            <div id="main-wrapper" >
                <CartProvider>
                    <TopBar user={user} ></TopBar>
                    <SideBar user={user}></SideBar>
                    <div className="page-wrapper">
                        <PagesTitle user={user} />
                        <div className="container-fluid">
                            <LoadRoutes routes={routes} />
                        </div>
                        <Footer />
                    </div>
                </CartProvider>
                
            </div>
        );
    }

    return null;

    // }
}

function LoadRoutes({ routes }) {

    // const {routes}=props; otra manera de obtener las routes

    return (
        <Switch>
            {
                routes.map((route, index) =>
                (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                )
                )}
        </Switch>
    );
}