import React,{useEffect, useState} from 'react';
import ListDocumentCorrelatives from '../../../components/SuperAdmin/DocumentCorrelatives/DocumentCorrelativeList';
import {getDocumentCorrelativesApi} from '../../../api/documentcorrelative';
import {getAccessTokenApi, getSession,getRefreshTokenApi} from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';

export default function DocumentCorrelatives(){
    const{user }=useAuth(); 

    const [documentCorrelatives,setDocumentCorrelatives]=useState([]);
    const [reloadCorrelatives, setReloadCorrelatives]=useState(false);
    const token=getAccessTokenApi();
    

    useEffect(()=>{
        getDocumentCorrelativesApi(user.Company).then(response=>{
            if(response){
                console.log("revisar",response);
                setDocumentCorrelatives(response.docCorrelative);                     
            }
        });  
        setReloadCorrelatives(false);
    }, [token,reloadCorrelatives]);
    console.log(documentCorrelatives);

    // const documentCorrelatives = discount.discount;
    // console.log(documentCorrelatives);

    
    return (
        // console.log(documentCorrelatives);
        <div className="row">
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
        <div className="col-12">    
                  <ListDocumentCorrelatives     
                  documentCorrelatives={documentCorrelatives}
                  setReloadCorrelatives={setReloadCorrelatives}
                  >                     
                  </ListDocumentCorrelatives>
            </div> 
    </div>
    )
}