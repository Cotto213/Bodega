import { basePath } from "./config";

export function addProducts(data) {
    const url = `${basePath}/addProducts`;

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

export function getProducts(data) {
    const url = `${basePath}/getProducts`;

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

export function getMeasure(data) {
    const url = `${basePath}/getMeasure`;

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

export function editProducts(data) {

    const url = `${basePath}/editProducts`;

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
export function deleteProducts(data) {

    const url = `${basePath}/deleteProducts`;

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
export function getInventory(data) {

    const url = `${basePath}/getInventory`;

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
export function editInventory(data) {

    const url = `${basePath}/getInventory`;

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
export function addSaleOrderInvoice(data) {

    const url = `${basePath}/addSaleOrderInvoice`;

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
