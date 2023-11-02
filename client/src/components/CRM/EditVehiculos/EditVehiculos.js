import React, { useState } from 'react'
import {
    Input,
    Button
} from "reactstrap";
import { SWTAlertToast } from '../../Others/Alerts/Toast/Alerts';


import { ucontrol_Edit_Autos_Api } from '../../../api/Autos.Api';


export default function EditVehiculos(props) {
    const { user, setModalShow, setresetList, row } = props


    const [Data, setData] = useState(
        {
            Company: user.Company,
            _id: row._id,
            Nomber: row.Name,
            Placa: row.Placa,
            Color: row.Color
        })

    //___________________________almacenamos la informacion______________

    const EditVehiculo = async () => {

        console.log(Data,"datos para editar");



        const Result = await ucontrol_Edit_Autos_Api(Data)
        if (Result.message) {
            SWTAlertToast("error", Result.message);

        }
        else {
            SWTAlertToast("success", `Datos Actualizado con exito`);
            setModalShow(false)
            setresetList(true)
        }


    }

    return (
        <>
            <label style={{ color: "red" }} >
                {user.Company}
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
                                placeholder='ingrese el nombre del carro'
                                value={Data.Nomber}
                                onChange={(e) => { setData({ ...Data, Nomber: e.target.value }) }}
                            />
                        </div>

                    </div>

                </div>
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            Placa
                        </label>
                        <div className='col-md-6'>
                            <Input
                                type='number'
                                placeholder='ingrese el nombre del carro'
                                value={Data.Placa}
                                onChange={(e) => { setData({ ...Data, Placa: e.target.value }) }}
                            />
                        </div>

                    </div>

                </div>
                <div className='col-12'>
                    <div className='form-group row'>
                        <label className='control-label text-right col-md-4' style={{ color: "black" }} >
                            Color
                        </label>
                        <div className='col-md-6'>
                            <Input
                                type='text'
                                placeholder='ingrese el nombre del carro'
                                value={Data.Color}
                                onChange={(e) => { setData({ ...Data, Color: e.target.value }) }}
                            />
                        </div>

                    </div>

                </div>
                < Button
                    onClick={() => { EditVehiculo() }}

                >Actualizar</Button>

            </div>
        </>
    )
}
