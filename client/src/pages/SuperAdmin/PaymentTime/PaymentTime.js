import React,{useEffect, useState} from 'react';
import ListPaymentTime from '../../../components/SuperAdmin/PaymentTime/ListPaymentTime';
import {getPaymentTimeApi } from '../../../api/paymenttime';
import {getAccessTokenApi, getRefreshTokenApi} from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';

export default function PaymentTimes(){
    const{user }=useAuth(); 

    const [paymentTimes,setPaymentTime]=useState([]);
    const [ReloadPaymentTime, setReloadPaymentTime]=useState(false);
    const token=getAccessTokenApi();
    console.log("hola");

    useEffect(()=>{
        getPaymentTimeApi().then(response=>{
            if(response){
                setPaymentTime(response.paymenttime); 
                    
            }
        });  
        setReloadPaymentTime(false);
    }, [token,ReloadPaymentTime]);
    console.log(paymentTimes);
    return (
        // console.log(paymentTimes);
        <div className="row">
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
        <div className="col-12">    
                  <ListPaymentTime     
                  paymentTimes={paymentTimes}
                  setReloadPaymentTime={setReloadPaymentTime}
                  >                     
                  </ListPaymentTime>
            </div>      
    </div>
    )
}