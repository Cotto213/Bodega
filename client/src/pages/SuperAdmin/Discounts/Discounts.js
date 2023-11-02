import React,{useEffect, useState} from 'react';
//import ListDiscount from '../../../components/CRM/Discount/ListDiscounts';
import {getDiscountsApi} from '../../../api/discount';
import {getAccessTokenApi, getSession,getRefreshTokenApi} from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';

export default function Discounts(){
    const{user }=useAuth(); 

    const [discounts,setDiscountsList]=useState([]);
    const [ReloadDiscount, setReloadDiscount]=useState(false);
    const token=getAccessTokenApi();
    

    useEffect(()=>{
        getDiscountsApi(user.Company).then(response=>{
            if(response){
                setDiscountsList(response.discount); 
                console.log('response'); 

            }
        });  
        setReloadDiscount(false);
    }, [token,ReloadDiscount]);
    console.log(discounts);

    // const discounts = discount.discount;
    // console.log(discounts);

    
    return (
        // console.log(discounts);
        <div className="row">
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
        <div className="col-12">    
                  {/* <ListDiscount     
                  discounts={discounts}
                  setReloadDiscount={setReloadDiscount}
                  >                     
                  </ListDiscount> */}
                  <div>asdasda</div>
            </div> 
    </div>
    )
}