import { basePath } from "./config";

export function ucontrol_get_Autos_Api(data) {
    const url = `${basePath}/ucontrol_get_Autos_Api`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { console.log(result); return result; })
        .catch(err => { return err.message; });
}


export function ucontrol_add_Autos_Api(data) {
    const url = `${basePath}/ucontrol_add_Autos_Api`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { console.log(result); return result; })
        .catch(err => { return err.message; });
}


export function ucontrol_Edit_Autos_Api(data) {
    const url = `${basePath}/ucontrol_Edit_Autos_Api`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { console.log(result); return result; })
        .catch(err => { return err.message; });
}


export function ucontrol_Delete_Autos_Api(data) {
    const url = `${basePath}/ucontrol_Delete_Autos_Api`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { console.log(result); return result; })
        .catch(err => { return err.message; });
}

