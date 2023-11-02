import React,{useState,useEffect}from 'react';

//componetes
import ListCatProduct from '../../../components/SuperAdmin/CatProduct/ListCatProduct';
import {getCatProductsApi} from '../../../api/catproduct';
import  {getAccessTokenApi, getRefreshTokenApi, getSession} from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';



export default function CatProducts(){
    const{user }=useAuth(); 

    const [catproducts,setCatProducts]=useState([]);
    const [reloadCatProducts, setReloadCatProducts]=useState(false);
    const token=getAccessTokenApi();
   

    useEffect(()=>{
        getCatProductsApi(user.Company).then(response=>{
            if(response){
                setCatProducts(response.CatProduct);         
            }
        });  
        setReloadCatProducts(false);
    }, [token,reloadCatProducts]);

    //console.log(catproducts);

    return(

       <div className="row">
         <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
         <div className="col-12">    
                   <ListCatProduct     
                    catproducts={catproducts}
                    setReloadCatProducts={setReloadCatProducts}
                   >                     
                   </ListCatProduct>
             </div>      
      </div>
    )
}