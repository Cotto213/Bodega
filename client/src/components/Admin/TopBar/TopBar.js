import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button,Input} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import useAuth from "../../../hooks/useAuth";
import sinImagen from "../../../assets/images/sinimagen.png";

export default function TopBar(props) {
    const { cart, subtotal, total, menos, sumar, valordata, eliminar, catalogo, setSearch, search } = useContext(CartContext);
    const [none, setNone] = useState(true);
    const [word, setWord] = useState("");
    const { user } = useAuth();

    const listaProductos = cart.sort(function (a, b) {
        if (a.Correlativo > b.Correlativo) return 1;
        if (a.Correlativo < b.Correlativo) return -1;
        return 0;
    }).map(item => {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", height: "90px", width: "92px" }}>
                    <img style={{ maxHeight: "85px", maxWidth: "92px" }} src={item.Product.Logo ? item.Product.Logo : sinImagen} />
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}>
                        <h4>{item.Product.Name}</h4>
                    </div>
                </div>
                <div style={{
                    display: "flex", alignItems: "center", padding: "5px", fontSize: "18px", width: "50%",
                    fontWeight: "bold", width: "92px", justifyContent: "center"
                }}>
                    ${item.Product.SellPrice}
                </div>
                <div style={{
                    display: "flex", alignItems: "center", padding: "5px", fontSize: "18px", width: "50%",
                    fontWeight: "bold", width: "92px", justifyContent: "center"
                }}>
                    Inv: {item.Stock}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                    <div style={{ display: "flex" }}>
                        <Button
                            className="btn waves-effect waves-light btn-info"
                            onClick={() => { menos(item) }}
                            style={{
                                borderTopRightRadius: "50%",
                                borderTopLeftRadius: "50%",
                                borderBottomRightRadius: "50%",
                                borderBottomLeftRadius: "50%",
                            }}
                        >
                            -
                        </Button>
                        <Input type="number" style={{ width: "75px", textAlign: "center" }} value={item.Cantidad}
                            onChange={(eventito) => { valordata(eventito, item) }} /* placeholder={fotitos.Cantidad} value={fotitos.Cantidad} onChange={(e)=>{addQuantity(fotitos,e.target.value)}} */ />
                        <Button
                            className="btn waves-effect waves-light btn-info"
                            onClick={() => { sumar(item) }}
                            style={{
                                borderTopRightRadius: "50%",
                                borderTopLeftRadius: "50%",
                                borderBottomRightRadius: "50%",
                                borderBottomLeftRadius: "50%",
                            }}
                        >
                            +
                        </Button>
                    </div>
                    <div>
                        <Button
                            className="btn"
                            onClick={() => { eliminar(item) }}
                            style={{
                                backgroundColor: "red",
                                borderTopRightRadius: "50%",
                                borderTopLeftRadius: "50%",
                                borderBottomRightRadius: "50%",
                                borderBottomLeftRadius: "50%",
                            }}
                        >
                            x
                        </Button>
                    </div>


                </div>
            </div>
        )
    })

    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" style={{ backgroundColor: "#07C7F2" }}>

                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="#"><i
                        className="ti-menu ti-close"></i></a>

                    <Link className="navbar-brand" to="/admin">

                        <b className="logo-icon">
                            <i className="wi wi-sunset"></i>

                            <img src="../assets/images/logo.png" alt="homepage" className="dark-logo" />

                        </b>

                        <span className="logo-text">

                            <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />

                            <img src="../assets/images/logo.png" className="light-logo" alt="homepage" />

                        </span>
                    </Link>

                    <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="#)"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                            className="ti-more"></i></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{ backgroundColor: "#07C7F2" }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link sidebartoggler d-none d-md-block waves-effect waves-dark" href="#">
                                <i className="ti-menu"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            {/* <MiniaturaUser cart={cart} none={none} setNone={setNone} /> */}
                            <div style={{
                                display: none ? "none" : "flex", minWidth: "150px", position: "absolute", right: "1px", backgroundColor: "white", alignItems: "center", flexDirection: "column"
                                , overflowY: "scroll", height: cart.length == 0 ? "120px" : cart.length <= 2 ? "400px" : "500px", borderLeft: '2px solid #D3D3D3', borderRight: '2px solid #D3D3D3', borderBottom: "2px solid #D3D3D3",
                                width: "280px"
                            }}>
                                <div>
                                    <h3 className="mb-0" style={{ textAlign: "center" }}><b>Total: ${total} </b></h3>
                                    <h4 className="mb-0" style={{ textAlign: "center" }}><b>Subtotal: ${subtotal} </b></h4>
                                    {cart.length > 0 ?
                                        listaProductos : ""}
                                </div>
                                <div>
                                    <nav className="nav-container ">
                                        <Link to="/admin/pedidospreview" style={{ textDecoration: "none", color: "white" }}>
                                            <Button className="btn waves-effect waves-light btn-info"
                                                style={{ marginTop: "8px" }}
                                                onClick={()=>{setNone(true)}}
                                            // onClick={() => { <Funregresar /> }}
                                            >   Crear Pedido
                                            </Button>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* {catalogo ? <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", margin: "auto" }}>
                <input type="text" value={word} className="form-control" onChange={e => {
                    setWord(e.target.value)
                }} style={{ width: "300px" }} onKeyDown={e => { enter(e) }} />
                <div className="input-group-prepend" style={{ marginLeft: "-40px" }}>
                    <button type='button' className="input-group-text" style={{ backgroundColor: "transparent", border: "none" }} onClick={searchs}
                    ><i className="fas fa-search"></i></button>
                </div></div> : null} */}

        </header>

    );

};



function MiniaturaUser(props) {
    const { cart, none, setNone } = props;

    //funcion para aparecer y desaparecer el carrito
    const aparecer = () => {
        setNone(!none);
    }

    return (
        <>
            <div style={{ color: "white", fontSize: "15px", padding: "20px" }} onClick={() => { aparecer() }}>
                <i className="fa fa-shopping-cart"></i>
                <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", textAlign: "center", fontSize: "10px", color: "white", position: "fixed", borderTopRightRadius: "50%",
                    borderTopLeftRadius: "50%",
                    borderBottomRightRadius: "50%",
                    borderBottomLeftRadius: "50%", width: "15px", height: "15px", top: "20px", right: "20px"
                }}>{cart.length}</div>
            </div>
        </>

    )
}