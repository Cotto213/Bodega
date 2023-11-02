import React,{useState,useEffect} from 'react';
import {getProductsApi,getProductAssociateApi} from '../../../api/product';
import  {getAccessTokenApi, getSession} from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';


export default function Product(){
    const{user }=useAuth(); 

    const [products,setProducts]=useState([]);
  
    const [reloadProducts, setReloadProducts]=useState(false);

    const token=getAccessTokenApi();

    
    useEffect(()=>{
        getProductsApi(user.Company).then(response=>{
            if(response){
                setProducts(response.product);                            
            }
        });  
        setReloadProducts(false);
    }, [token,reloadProducts]);

   

    return (
        <div className="row">
            <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
            <div className="col-12">    
                     dferrr
                </div>      
        </div>
        
    );
}