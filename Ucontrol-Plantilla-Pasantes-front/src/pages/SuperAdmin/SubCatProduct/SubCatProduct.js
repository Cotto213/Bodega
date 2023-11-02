import React, { useState, useEffect } from 'react'
//importando la lista de subcategorias
import SubCatProductListComponent from '../../../components/SuperAdmin/SubCatProduct/SubCatProductList/'

import useAuth from '../../../hooks/useAuth';
import { getAccessTokenApi } from '../../../api/auth';

import { getSubCatProductsApi } from '../../../api/catproduct';

//exportando la pagina
export default function SubCatProductPage() {
    const { user } = useAuth();
    const token = getAccessTokenApi();

    const [reloadSubCats, setReloadSubCats] = useState(false)
    const [subCatsProducts, setSubCatProducts] = useState([])
    useEffect(() => {
        getSubCatProductsApi(user.Company).then(result => {
            setSubCatProducts(result.CatProduct)
        })
        setReloadSubCats(false)
    }, [token, reloadSubCats])

    //exportando la pagina
    return (
        <div>
            <SubCatProductListComponent
                setReloadSubCats={setReloadSubCats}
                subCatsProducts={subCatsProducts}
            />
        </div>
    )
}