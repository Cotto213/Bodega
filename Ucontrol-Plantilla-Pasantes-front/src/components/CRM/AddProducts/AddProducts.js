import React, { useState, useEffect } from 'react'
import {
    Input,
    Button
} from "reactstrap";
import { SWTAlertToast } from '../../Others/Alerts/Toast/Alerts';


import { addProducts } from '../../../api/Products.Api';
import { getMeasure } from '../../../api/Products.Api';

export default function AddProducts(props) {
    const { setModalShow, setresetList } = props
    const [Data, setData] = useState({
        Company: 'ucontrol', measureId: '', Active: false,
        Inventariable: false,
    })
    const [measures, setMeasures] = useState([])



    //___________________________almacenamos la informacion______________
    useEffect(() => {
        getMeasure().then(data => {
            console.log(data); // Agrega esta línea
            setMeasures(data);
        });
    }, []);
    const AddProducts = async () => {
        const Result = await addProducts(Data)
        if (Result.message) {
            SWTAlertToast("error", Result.message);

        }
        else {
            SWTAlertToast("success", `Datos Almacenado con exito`);
            setModalShow(false)
            setresetList(true)
        }


    }

    return (
        <>
            <label style={{ color: "red" }} >
                {'ucontrol'}
            </label>
            <div className='row' >
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            Nombre
                        </label>
                        <div className='col-md-6'>
                            <Input
                                type='text'
                                placeholder='ingrese el nombre del producto'
                                value={Data.product_Name}
                                onChange={(e) => { setData({ ...Data, product_Name: e.target.value }) }}
                            />
                        </div>

                    </div>

                </div>
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            BuyPrice
                        </label>
                        <div className='col-md-6'>
                            <Input
                                type='number'
                                placeholder='ingrese el precio del producto'
                                value={Data.BuyPrice}
                                onChange={(e) => { setData({ ...Data, BuyPrice: e.target.value }) }}
                            />
                            <select
                                style={{ width: '200px' }}
                                value={Data.measureId}
                                onChange={(e) => setData({ ...Data, measureId: e.target.value })}
                            >
                                <option value="">Seleccione una medida</option>
                                {measures.map((measure) => (
                                    <option key={measure._id} value={measure._id}>
                                        {measure.Name}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                </div>

                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }}>
                            Active
                        </label>
                        <div className='col-md-6'>
                            <label>
                                <input
                                    type='radio'
                                    name='active'
                                    value='si'
                                    checked={Data.Active}
                                    onChange={() => { setData({ ...Data, Active: true }) }}
                                />
                                Sí
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    name='active'
                                    value='no'
                                    checked={!Data.Active}
                                    onChange={() => { setData({ ...Data, Active: false }) }}
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }}>
                            Inventariable
                        </label>
                        <div className='col-md-6'>
                            <label>
                                <input
                                    type='radio'
                                    name='inventariable'
                                    value='si'
                                    checked={Data.Inventariable}
                                    onChange={() => { setData({ ...Data, Inventariable: true }) }}
                                />
                                Sí
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    name='inventariable'
                                    value='no'
                                    checked={!Data.Inventariable}
                                    onChange={() => { setData({ ...Data, Inventariable: false }) }}
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>

                < Button
                    style={{ marginLeft: 2 }}
                    onClick={() => { AddProducts() }}

                >Guardar</Button>

                <Button style={{ marginLeft: 2 }} onClick={() => { setModalShow(false) }}>Cancelar</Button>

            </div>
        </>
    )
}