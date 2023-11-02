import React, { useState } from 'react'
import {
    Input,
    Button
} from "reactstrap";
import { SWTAlertToast } from '../../Others/Alerts/Toast/Alerts';


import { ucontrol_add_Autos_Api } from '../../../api/Autos.Api';


export default function AddVehiculos(props) {
    const { user, setModalShow,setresetList } = props
    const [Data, setData] = useState({Company:user.Company})

    //___________________________almacenamos la informacion______________

    const AddVehiculos = async () =>{
        const Result= await ucontrol_add_Autos_Api(Data)
        if (Result.message) {
            SWTAlertToast("error", Result.message);

        }
        else{
            SWTAlertToast("success", `Datos Almacenado con exito`);
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
                                value={Data.placa}
                                onChange={(e) => { setData({ ...Data, placa: e.target.value }) }}
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
                style={{marginLeft:2}}
                onClick={() => { AddVehiculos() }}
                
                >Guardar</Button>

                <Button style={{marginLeft:2}} onClick={() => { setModalShow(false) }}>Cancelar</Button>
                
            </div>
        </>
    )
}