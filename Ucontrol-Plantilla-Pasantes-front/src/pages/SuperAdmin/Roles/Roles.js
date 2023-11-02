import React, { useState, useEffect } from 'react';

import useAuth from '../../../hooks/useAuth';

//componetes
import ListRoles from '../../../components/SuperAdmin/Roles/ListRoles';
import { getRolesSystemApi } from '../../../api/roles';
import { getAccessTokenApi, getRefreshTokenApi } from '../../../api/auth';



export default function Roles() {
    const { user } = useAuth();

    const [roles, setRoles] = useState([]);
    const [reloadRoles, setReloadRoles] = useState(false);
    const token = getAccessTokenApi();


    useEffect(() => {
        getRolesSystemApi().then(response => {
            if (response) {
                setRoles(response.roles);
            }
        });
        setReloadRoles(false);
    }, [token, reloadRoles]);

    return (

        <div className="row">
            <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
            <div className="col-12">
                <ListRoles
                    roles={roles}
                    setReloadRoles={setReloadRoles}
                >
                </ListRoles>
            </div>
        </div>
    )
}