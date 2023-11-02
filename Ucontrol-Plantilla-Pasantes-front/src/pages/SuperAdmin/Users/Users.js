import React,{useEffect, useState} from 'react';


//COMPONENTES
import ListUsers from '../../../components/SuperAdmin/Users/ListUsers';
import {getUsersApi} from '../../../api/user';
import {getAccessTokenApi, /* getRefreshTokenApi */} from '../../../api/auth';
/* import useAuth from '../../../hooks/useAuth'; */

export default function Users(){
    // const{users }=useAuth(); 

    const [users,setUsers]=useState([]);
    const [reloadUsers, setReloadUsers]=useState(false);
    const token=getAccessTokenApi();

    useEffect(()=>{
        getUsersApi().then(response=>{
            if(response){
                setUsers(response.user);
                console.log(response)         
            }
        });  
        setReloadUsers(false);
    }, [token,reloadUsers]);
    
    return (
        <div className="row">
         <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
        <div className="col-12">    
                  <ListUsers     
                  users={users}
                  setReloadUsers={setReloadUsers}
                  >                     
                  </ListUsers>
            </div>       
    </div>
    )
}