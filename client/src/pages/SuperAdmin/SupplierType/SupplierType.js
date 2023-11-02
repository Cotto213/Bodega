import React,{useState,useEffect}from 'react';

//componetes
//import ListSupplierType from '../../../components/CRM/SupplierType/ListSupplierType';
import {getSupplierTypeApi} from '../../../api/suppliertype';
import  {getAccessTokenApi, getRefreshTokenApi, getSession} from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';


export default function SupplierType(){
    const{user }=useAuth(); 

    const [supplierType,setSupplierType]=useState([]);
    const [reloadSupplierType, setReloadSupplierType]=useState(false);
    const token=getAccessTokenApi();
    

    useEffect(()=>{
        getSupplierTypeApi(user.Company).then(response=>{
            if(response){
                setSupplierType(response.supplierType);         
            }
        });  
        setReloadSupplierType(false);
    }, [token,reloadSupplierType]);

    console.log(supplierType);

    return(

       <div className="row">
         <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
         <div className="col-12">    
                   {/* <ListSupplierType     
                    supplierType={supplierType}
                    setReloadSupplierType={setReloadSupplierType}
                   >                     
                   </ListSupplierType> */}
                   <div>dasdasda</div>
             </div>      
      </div>
    )
}