import React, { useEffect, useState } from 'react'

import { getProducts } from '../../../api/Products.Api';
import ListPageExample from '../../../components/CRM/ListPageExample/ListPageExample';


export default function PageExample() {
  
  const [listProducts, setListProducts] = useState([])
  const [inicial, setinicial] = useState(false)

  const [ResetList, setResetList] = useState(true)
  

  useEffect(() => {
    const Info =
    {
      Company: "ucontrol",
    }
   
    getProducts(Info).then(response => {
      if (response) {
        console.log(response);
        setListProducts(response)
        setinicial(true)
      }
    });
    setResetList(false)
  }, [ResetList]);


  
  return (
    <div>
      {inicial ?
        <ListPageExample
          
          data={listProducts}
          setResetList={setResetList}
        />
        :
        <p>La pagina esta cargando.......</p>
      }
    </div>
  )
}