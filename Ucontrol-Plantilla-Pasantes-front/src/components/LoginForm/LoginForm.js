import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";  //librerias para implementar las alertas

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../utils/constants';
import { signInApi } from "../../api/user";

import Swal from 'sweetalert2';//alertas sweet alert
export default function LoginForm() {
    const [inputs, setInputs] = useState({
        Email: "",
        Password: ""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const Toast = Swal.mixin({ //alertas toast de sweet alert
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const login = async e => {  //async para decirle que separe las funciones y cuando termine una ejecute la otra
        e.preventDefault();
        console.log(inputs, "viendo como le podemos hacer")
        const result = await signInApi(inputs);
        if (result.message) {
            Toast.fire({
                icon: 'error',
                title: result.message
            })
        }
        else {

            const { accessToken, refreshToken } = result;
          
            //codigo agregado para validar que el token existe
            if (!accessToken || accessToken == null || !refreshToken || refreshToken == null) {
                Toast.fire({
                    icon: 'error',
                    title: 'La contraseña es incorrecta.'
                })
                // console.log("Entro a la condicion igual a null");
            } else {
                //console.log("Entro a la condicion diferente de null");
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
                Toast.fire({
                    icon: 'success',
                    title: 'Se inicio sesión con exito'
                })
                window.location.href = "/admin";
            }
            //  window.location.reload();
        }


    };
    if (typeof window !== "undefined") {
        injectStyle();
    }
    return (
        <div className="row">
            <div className="col-12">
                <Form className="form-horizontal mt-3 form-material" id="loginform" onChange={changeForm} onSubmit={login}>
                    <div className="form-group mb-3">
                        <div className="col-xs-12">
                            <Input className="form-control" type="text" required="" placeholder="Username" name="Email" /> </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="col-xs-12">
                            <Input className="form-control" type="password" required="" placeholder="Password" name="Password" /> </div>
                    </div>
     

                    <FormGroup className="form-group text-center mt-3">
                        <Button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light ">Iniciar Sesión</Button>
                    </FormGroup>
           
                </Form>
                <ToastContainer />
            </div>
        </div>

    );
}