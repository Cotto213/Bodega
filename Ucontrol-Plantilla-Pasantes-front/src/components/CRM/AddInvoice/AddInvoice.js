import React, { useState, useEffect } from 'react';
import {
    Input,
    Button
} from "reactstrap";
import { SWTAlertToast } from '../../Others/Alerts/Toast/Alerts';

import { getProducts, addSaleOrderInvoice, getInventory } from '../../../api/Products.Api';

export default function AddInvoice(props) {
    const { setModalShow, setResetList } = props;
    const [Data, setData] = useState({
        Company: 'ucontrol', productId: '', quantity: 0, CreationDate: '', total: 0, State:'Creada'
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            console.log(data); // Verifica los datos que recibes de la API
            setProducts(data);
        });
    }, []);

    const AddInvoice = async () => {
        const invoiceData = {
            ...Data,
            total: Data.total,
            state: 'Creada',
            product_alfonso: Data.productId // Include the selected product's _id here
        };
    
        try {
            const Result = await addSaleOrderInvoice(invoiceData);
            console.log(Result);
        } catch (error) {
            console.error(error);
        }
    };
    const handleQuantityChange = (e) => {
        const quantity = e.target.value;
        const product = products.find(product => product._id === Data.productId);
        const total = product ? product.BuyPrice * quantity : 1;
        setData({ ...Data, quantity, total });
    };

    return (
        <>
            <label style={{ color: "red" }} >
                {'ucontrol'}
            </label>
            <div className='row' >
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            Producto
                        </label>
                        <div className='col-md-6'>
                        <select
    style={{ width: '200px' }}
    value={Data.productId}
    onChange={(e) => setData({ ...Data, productId: e.target.value })}
>
    <option value="">Seleccione un producto</option>
    {products.map((product) => (
        <option key={product._id} value={product._id}>
            {product.product_Name}
        </option>
    ))}
</select>

                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            Cantidad
                        </label>
                        <div className='col-md-6'>
                            <Input
                                type='number'
                                placeholder='Ingrese la cantidad'
                                value={Data.quantity}
                                onChange={handleQuantityChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            Fecha
                        </label>
                        <div className='col-md-6'>
                            <Input
                                type='date'
                                value={Data.CreationDate}
                                onChange={(e) => { setData({ ...Data, CreationDate: e.target.value }) }}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            Total
                        </label>
                        <div className='col-md-6'>
                            <Input
                                type='number'
                                value={Data.total}
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <Button
                    style={{ marginLeft: 2 }}
                    onClick={() => { AddInvoice() }}
                >
                    Guardar
                </Button>
                <Button style={{ marginLeft: 2 }} onClick={() => { setModalShow(false) }}>Cancelar</Button>
            </div>
        </>
    );
}