import React, { useEffect, useState } from 'react';
//tomando la funcion para tomar token de usuario
import { getAccessTokenApi } from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';

//importando la lista de categorias en caja
import ListCatCustomersBoxes from '../../../components/SuperAdmin/CatCustomersBoxes/ListCatCustomersBoxes'

//importando la funcion para tomar las categorias
import { getCatAndCustomer } from '../../../api/catcustomers';

//funcion que retorna la pagina con las cajas del menu
export default function PageCatCustomerBoxes() {

    //tomando la informacion del usuario
    const { user } = useAuth();
    //tomando el token de usuario
    const token = getAccessTokenApi();

    const [reloadCatCustomers, setReloadCatCustomers] = useState(false)

    //tomando las categorias
    const [catCustomers, setCatCustomers] = useState([])
    useEffect(() => {
        getCatAndCustomer(user.Company,user.id,user.Profile).then(response => {
            if (response) {
                setCatCustomers(response.result)
            }
        })
        setReloadCatCustomers(false)
    }, [token, reloadCatCustomers])

    //retornando la pagina
    return (
        <div>
            <ListCatCustomersBoxes
                catCustomers={catCustomers}
                setReloadCatCustomers={setReloadCatCustomers}
            />
        </div>
    )
}