import React, { useState, useEffect } from 'react';

//tomando la funcion para tomar token de usuario
import { getAccessTokenApi } from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';

//importando la lista de categorias productos
import ListCatCustomer from '../../../components/SuperAdmin/CatCustomer/ListCatCustomer/ListCatCustomer';

//llamando el metodo para tomar las categorias de clientes
import { getCatCustomerApi } from '../../../api/catcustomers';

//funcion para mostrar la pagina de categorias de clientes
export default function PageCatCustomer() {

    //tomando la informacion del usuario
    const { user } = useAuth()
    //tomando el token de usuario
    const token = getAccessTokenApi()

    //constantes para tomar las categorias y hacer reload
    const [catCustomers, setCatCustomers] = useState([])
    const [reloadCatCustomers, setReloadCatCustomers] = useState(false)

    //tomando las categorias de clientes desde la base
    useEffect(() => {
        getCatCustomerApi(user.Company).then(response =>{
            setCatCustomers(response.catcustomer)
        })
        setReloadCatCustomers(false)
    }, [token, reloadCatCustomers])

    //retornando la pagina de categorias de clientes
    return (
        <div>
            <ListCatCustomer
                catCustomers={catCustomers}
                setReloadCatCustomers={setReloadCatCustomers}
            />
        </div>
    )
}
