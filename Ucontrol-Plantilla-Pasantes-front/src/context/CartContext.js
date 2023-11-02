import React from "react";
import { useState, useEffect } from "react";
import { getAccessTokenApi } from "../api/auth";
import { SWTAlertToast } from "../components/Others/Alerts/Toast/Alerts";
import useAuth from "../hooks/useAuth";

export const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
    let fechahoy = new Date().toISOString();
    const token = getAccessTokenApi();
    const { user } = useAuth();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [subtotal, setSubTotal] = useState(0);
    const [comentario, setComentario] = useState("");
    const [fecha, setFecha] = useState(fechahoy.substring(0, 10));
    const [correlativo, setCorrelativo] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [deleteNota, setdeleteNota] = useState();
    const [informacionNotas, setInformacionNotas] = useState([]);
    const [catalogo, setCatalago] = useState(true);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        let doc = "venta"; // tipo de documento al que se hace referencia
        let customer = user.id;
        let datos = {}; // para enviar informacion de la orden de venta

        //si los datos del cliente estan
        datos.proveedor = [];
        datos.total = subtotal;
        // getImpuestosCarrito(doc, user.Company, customer, datos).then(response => {
        //     if (response) {
        //         response.taxes.map(item => {
        //             let auxiliar = 0;
        //             auxiliar = auxiliar + Number(item.percentage / 100);
        //             setCantidad(user.TypeofTaxpayer === "CreditoFiscal" ? auxiliar : 0);
        //         })
        //         setImpuestos(response.taxes);
        //     }
        // });

    }, [token, cart, subtotal]);


    //funcion para afectacion del total
    const afecTotal = () => {
        let totalauxiliar = 0;
        cart.map(item => {
            totalauxiliar = totalauxiliar + (Number(item.Product.SellPrice) * Number(item.Cantidad));
        })

        let totalfinal = totalauxiliar + totalauxiliar * cantidad;

        setTotal(totalfinal.toFixed(2));
        setSubTotal(totalauxiliar.toFixed(2));
    }

    //funcion pra cambiar de fecha de creacion
    const changeDate = (e) => {
        setFecha(e);
    }

    //agregar al carrito
    const addProduct = (item) => {

        let auxiliar = informacionNotas;
        item.Product.Noteproducts.map(item => {
            let objeto = { value: item._id, label: item.Text, Note: item.Text, Product: item.Product, idNote: item._id, chequeado: false }
            auxiliar.push(objeto)
        })

        setInformacionNotas(auxiliar);


        if (item.Cantidad != 0) {
            let bandera = true;
            cart.map(producto => {
                if (producto.Product._id == item.Product._id) {
                    bandera = false;
                }
            })
            if (bandera) {
                //subtotal del carrito
                // setTotal((total + Number(item.Cantidad) * Number(item.Product.SellPrice)));
                // setTotal(subtotal+(user.TypeofTaxpayer=="CreditoFiscal" ? (parseFloat((subtotal*(item.percentage/100))).toFixed(2)):(0)));
                let precio = Number(item.Cantidad) * Number(item.Product.SellPrice);

                let auxiliar = Number(total) + (Number(precio) * cantidad) + Number(precio)
                setTotal(auxiliar.toFixed(2));
                setSubTotal((subtotal + Number(item.Cantidad) * Number(item.Product.SellPrice)));
                setCart([...cart, { ...item, Correlativo: correlativo }]);
                //incrementador del total del carrito
                setCorrelativo(correlativo + 1);
            } else {
                SWTAlertToast("error", `Producto repetido`);
            }
        } else {
            SWTAlertToast("error", `Ingrese una cantidad`);
        }

    }

    //restar por unidad 
    const menos = (prod) => {
        //afectacion de cantidades y carrito
        let auxiliar = cart;
        if (prod.Cantidad == 0) {

        } else {
            prod.Cantidad = Number(prod.Cantidad) - 1;
            auxiliar = auxiliar.filter(item => {
                if (item.Correlativo != prod.Correlativo) {
                    return item;
                }
            })
            auxiliar.sort(function (a, b) {
                if (a.Correlativo > b.Correlativo) return 1;
                if (a.Correlativo < b.Correlativo) return -1;
                return 0;
            });
            auxiliar.push(prod);
            setCart(auxiliar);
        }

        //Afectacion de total
        afecTotal();
    }

    //sumar por unidad
    const sumar = (prod) => {


        //afectacion de cantidades y carrito
        let auxiliar = cart;
        prod.Cantidad = Number(prod.Cantidad) + 1;
        auxiliar = auxiliar.filter(item => {
            if (item.Correlativo != prod.Correlativo) {
                return item;
            }
        })
        auxiliar.sort(function (a, b) {
            if (a.Correlativo > b.Correlativo) return 1;
            if (a.Correlativo < b.Correlativo) return -1;
            return 0;
        });
        auxiliar.push(prod);
        setCart(auxiliar);

        //afectacion del total
        afecTotal();
    }

    //colocar cantidad
    const valordata = (e, item) => {
        let arr = [];
        let cantidadmodifi = cart.map(dataitem => {
            if (item._id == dataitem._id) {
                dataitem.Cantidad = Number(e.target.value);
                arr.push(dataitem)
            }
            else {
                arr.push(dataitem)
            }
        })
        setCart(arr);
        afecTotal();
    }

    //eliminar producto del carrito
    const eliminar = (prod) => {

        let filtrado = informacionNotas.filter(utum => {
            if (prod.Product._id != utum.Product) {
                return utum;
            }
        })

        setInformacionNotas(filtrado);


        setdeleteNota(prod)
        let totalauxiliar = 0;
        //afectacion de cantidades o producto
        let auxiliar = cart.filter(item => {
            if (item.Correlativo !== prod.Correlativo) {
                totalauxiliar = totalauxiliar + (Number(item.Product.SellPrice) * Number(item.Cantidad));
                return item;
            }
        })
        auxiliar.sort(function (a, b) {
            if (a.Correlativo > b.Correlativo) return 1;
            if (a.Correlativo < b.Correlativo) return -1;
            return 0;
        });
        setTotal(totalauxiliar + (totalauxiliar * cantidad))
        setSubTotal(totalauxiliar)
        // setTotal(totalauxiliar);
        setCart(auxiliar);
    }


    //limpiar el carrito
    const clearCart = () => setCart([]);

    //remover el carrito
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            total,
            setTotal,
            subtotal,
            setSubTotal,
            setFecha,
            fecha,
            cart,
            setCart,
            clearCart,
            removeProduct,
            addProduct,
            comentario, setComentario, changeDate,
            catalogo,
            setCatalago,
            setSearch,
            search,


            menos,
            sumar,
            valordata,
            eliminar,
            deleteNota,
            setInformacionNotas,
            informacionNotas
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider