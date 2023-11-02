import React from 'react';
import { Button, Form, FormGroup, Label, Input,div,Container } from 'reactstrap';
import { Redirect } from "react-router-dom";

import LoginForm from '../../components/LoginForm';
import {getAccessTokenApi} from '../../api/auth';

export default function   Login() {
 console.log(getAccessTokenApi);
   if(getAccessTokenApi()){
       return <Redirect to="/admin" />
   }
console.log("gola");
    return(
        <Container class="main-wrapper">
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center"
         style={{background:"url(../assets/images/background/login.jpg) no-repeat center center" }} >
            <div className="auth-box on-sidebar p-4 bg-white m-0">
            <div id="loginform">
            <div className="logo text-center">
                <span className="db">
                    <img src="../assets/images/logo.png" alt="logo" /><br/>
                    
                </span>
            </div>
                <LoginForm/>
                </div>
            </div>
        </div>
    </Container>
    );
        

}
