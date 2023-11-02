import React from 'react';
import LoginForm from '../components/LoginForm';


export default function LayoutLogin() {
     
    return (
     <div class="main-wrapper">
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center"
         style={{background:"url(../assets/images/background/fondo.png) no-repeat  center center" }} >
            <div style={{ backgroundColor: "rgba(255,255,255,0.9)", padding: "70px", borderRadius:"20px" }}>
            <div id="loginform">
            <div className="logo text-center">
                <span className="db">
                    <img src="../assets/images/Asset 3.png" alt="logo" /><br/>
                </span>
            </div>
                <LoginForm />
                </div>
            </div>
        </div>
    </div>
    );
    
}
