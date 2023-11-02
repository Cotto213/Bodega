import React, { useState, useEffect } from 'react';
//componetes
import ListSystemOptions from '../../../components/SuperAdmin/SystemOptions/ListSystemOptions';
import { /* getOptionsApi ,*/ getGruposApi } from '../../../api/systemOp';
import { getAccessTokenApi, /* getRefreshTokenApi */ } from '../../../api/auth';


import useAuth from '../../../hooks/useAuth';

export default function Roles() {
    const { user } = useAuth();

    const [options, setOptions] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [reloadOptions, setReloadOptions] = useState(false);
    const [reloadGrupos, setReloadGrupos] = useState(false);
    const token = getAccessTokenApi();

    useEffect(() => {
        getGruposApi().then(response => {
            if (response) {
                setGrupos(response.Grupos);
            }
        });
        setReloadOptions(false);
    }, [token, setReloadOptions]);

    return (

        <div className="row">
            <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
            <div className="col-12">
                <ListSystemOptions
                    grupos={grupos}
                    setReloadGrupos={setReloadGrupos}
                    setReloadOptions={setReloadOptions}
                >
                </ListSystemOptions>
            </div>
        </div>
    )
}