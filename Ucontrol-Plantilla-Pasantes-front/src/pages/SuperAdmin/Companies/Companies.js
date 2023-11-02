import React, { useState, useEffect } from 'react';
import ListCompanies from '../../../components/SuperAdmin/Companies/ListCompanies';
import { getCompaniesApi } from '../../../api/company';
import { getProductsApi } from '../../../api/product';
import { getAccessTokenApi, getRefreshTokenApi } from '../../../api/auth';
import { getIdCompany } from '../../../api/analyticstop10';

import useAuth from '../../../hooks/useAuth';

export default function Companies() {
    
    const [companiesList, setCompaniesList] = useState([]);
    const [reloadCompanies, setReloadCompanies] = useState(false);
    const [idcompany, setidcompany] = useState([]);
    const token = getAccessTokenApi();
    const {user} =useAuth();

    useEffect(async () => {
        const data= await getIdCompany();
        console.log(data);
        setidcompany(data);
        

      await  getCompaniesApi().then(response => {
            if (response) {
                console.log(user);
                setCompaniesList(response.company);
            }
        });
        setReloadCompanies(false);
    }, [token, reloadCompanies]);


    return (
        <div className="row">
            <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
            <div className="col-12">
                <ListCompanies
                    companiesList={companiesList}
                    idcompany={idcompany}
                    user={user}
                    setReloadCompanies={setReloadCompanies}
                >
                </ListCompanies>
            </div>
        </div>
    )


}