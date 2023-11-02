import React, { useState, useEffect } from "react";

//importando la lista de holdings
import HoldingListComponent from "../../../components/SuperAdmin/Holding/HoldingList/HoldingList";

import useAuth from '../../../hooks/useAuth';
import { getAccessTokenApi } from '../../../api/auth';

//funciones de holding
import { getHoldings } from "../../../api/holding";

//exportamos la pagina del holding
export default function HoldingPage() {
    const token = getAccessTokenApi();

    const [reloadhold, setReloadhold] = useState(false)
    //tomara la lista de holding
    const [holding, setHoldings] = useState([])
    useEffect(() => {
        getHoldings().then(response => {
            setHoldings(response.holding)
        })
        setReloadhold(false)
    }, [token, reloadhold])


    //retornamos la pagina
    return (
        <div>
            <HoldingListComponent
                holding={holding}
                setReloadhold={setReloadhold}
            />
        </div>
    )
}