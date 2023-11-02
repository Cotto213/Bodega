import {basePath} from "./config";


export function signInApi(data){
    const url=`${basePath}/sign-in`;
   
    const params={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    };

    return fetch(url,params)
    .then(response=>{
        return response.json();
        
    })
    .then(result=>{
        console.log(result);
        return result;
    })
    .catch(err=>{
        return err.message;
    });
}

export function getUsersApi(){ //se recibe el token para validar que solo usuarios logueados tengan acceso
    const url=`${basePath}/get-users`;
    const params={
        method:"GET",
        headers:{
            "Content-Type":"applicaction/json"
        }
    };
 
    return fetch(url,params)
    .then(response=>{
        return response.json();
    })
    .then(result=>{
        return result;
    })
    .catch(err=>{
        return err.message;
    });
}



//funcion para tomar un usuario por su correo
export function getUserEmail(){
    const url=`${basePath}/get-users`;
    const params={
        method:"GET",
        headers:{
            "Content-Type":"applicaction/json"
        }
    };
 
    return fetch(url,params)
    .then(response=>{
        return response.json();
    })
    .then(result=>{
        return result;
    })
    .catch(err=>{
        return err.message;
    });
}

export function getUsersLineApi(companyId){ //se recibe el token para validar que solo usuarios logueados tengan acceso
    const url=`${basePath}/get-usersline/${companyId}`;
    const params={
        method:"GET",
        headers:{
            "Content-Type":"applicaction/json"
        }
    };
 
    return fetch(url,params)
    .then(response=>{
        return response.json();
    })
    .then(result=>{
        return result;
    })
    .catch(err=>{
        return err.message;
    });
}
