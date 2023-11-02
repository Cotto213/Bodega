import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth';
import { ucontrol_get_Autos_Api } from '../../../api/Autos.Api';
import ListPageExample from '../../../components/CRM/ListPageExample/ListPageExample';


export default function PageExample() {
  const { user } = useAuth();
  const [ListAutos, setListAutos] = useState([])
  const [inicial, setinicial] = useState(false)

  const [ResetList, setResetList] = useState(true)


  useEffect(() => {
    const Info =
    {
      Company: "ucontrol",
    }
    ucontrol_get_Autos_Api(Info).then(response => {
      if (response) {
        setListAutos(response)
        setinicial(true)
      }
    });
    setResetList(false)
  }, [ResetList]);



  return (
    <div>
      {inicial ?
        <ListPageExample
          user={user}
          data={ListAutos}
          setResetList={setResetList}
        />
        :
        <p>La pagina esta cargando.......</p>
      }
    </div>
  )
}