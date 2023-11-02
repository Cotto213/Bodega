import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import Modal from '../../Others/Modal/Modal';
import AddProducts from '../AddProducts/AddProducts';
import { getMeasure } from '../../../api/Products.Api';
import { SWTAlertToast } from '../../Others/Alerts/Toast/Alerts';

export default function ListPageExample(props) {

    const { data, setResetList} = props;

    const [modalShow, setModalShow] = useState(false);  
    const [modalTitle, setModalTitle] = useState("");   
    const [fullWidth, setFullWidth] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const addProducts =()=>{
      
        setModalShow(true)
        setModalTitle("ESTAMOS AGREGANDO VEHICULOS")
        setFullWidth(false)
        setModalContent(
            <AddProducts
            setModalShow={setModalShow}
            setResetList={setResetList}
            
           />
    
        )

    }
//     const EditVehicle=(row)=>{
//         setModalShow(true)
//         setModalTitle("ESTAMOS EDITANDO VEHICULOS")
//         setFullWidth(false)
//         setModalContent(
//             <EditVehiculos
//             setModalShow={setModalShow}
//             user={user}
//             setResetList={setResetList}
//             row={row}
//            />
    
    
//         )
    
//     }

//     const DeleteInfo=async (row)=>{

//         const Result= await ucontrol_Delete_Autos_Api(row)
//         if (Result.message) {
//             SWTAlertToast("error", Result.message);
    
//         }
//         else{
//             SWTAlertToast("success", `Datos Eliminado con exito`);
//             setModalShow(false)
//             setResetList(true)
//         }
      
       
//     }

//     const EditInfo=(row)=>{


//         const edit = (
//             <>
//                 <button id="editar" type="button"
//                     onClick={() => { EditVehicle(row) }}
//                     className="btn btn-warning btn-circle"style={{color:'white', backgroundColor:'blue', borderColor:"blue"}}><i class="fa fa-edit"></i>
//                 </button>
//             </>
//         );
//         const deleteinfo = (
//             <>
//                 <button id="editar" type="button"
//                     onClick={() => { DeleteInfo(row) }}
//                     className="btn btn-info btn-circle" style={{backgroundColor:'red', borderColor:"red"}}><i class="fas fa-trash" ></i>
//                 </button>
//             </>
//         );
//         return (
//             <div className="row">
//                 <>{edit}</>
//                 <> {deleteinfo}</>
//             </div>
//         )
// }


const columns = [

    {
        name: "Nombre",
        selector: "product_Name"
    },
    {
        name: "Precio",
        selector: "BuyPrice"
    },
    {
        name: "Active",
        selector: "Active",
        cell: row => row.Inventariable ? "Si" : "No"
    },
    {
        name: "Inventariable",
        selector: "Inventariable",
        cell: row => row.Inventariable ? "Si" : "No"
    }
   
    
   

]

let tableData = {
    columns,
    data
}
return (
    <div>
        <div className='row'>
            <div className='col-12'>
                <button  onClick={()=>{addProducts()}}  >Agregar</button>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>

                <DataTableExtensions
                    {...tableData}
                    filterPlaceholder="Buscar"
                    export={false}
                    print={false}

                >
                    <DataTable
                        pagination
                    />
                </DataTableExtensions>

            </div>

        </div>
        <Modal
            setModalShow={setModalShow}
            modalShow={modalShow}
            modalTitle={modalTitle}
            fullWidth={fullWidth}
        >
            {modalContent}

        </Modal>

    </div>
)
}