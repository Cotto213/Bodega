import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import Modal from '../../Others/Modal/Modal';
import AddProducts from '../AddProducts/AddProducts';
import EditProducts from '../EditProducts/EditProducts';
import { editProducts, getMeasure, getInventory } from '../../../api/Products.Api';
import { SWTAlertToast } from '../../Others/Alerts/Toast/Alerts';
import { deleteProducts } from '../../../api/Products.Api';

export default function ListPageExample(props) {
    const { data, setResetList } = props;
    const [measures, setMeasures] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [fullWidth, setFullWidth] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [inventoryData, setInventoryData] = useState([]);

    
    useEffect(() => {
        getMeasure().then(data => {
            console.log(data); // Verifica los datos que recibes de la API
            setMeasures(data);
            setIsLoading(false);
        });
        getInventory().then(data => {
            console.log(data); // Verifica los datos que recibes de la API
            setInventoryData(data); // Almacena los datos de inventario en el estado
        });
    }, []);

    const handleActiveChange = async (row) => {
        const newStatus = !row.Active;
        const updatedProduct = { ...row, Active: newStatus };
        const result = await editProducts(updatedProduct);
        if (result.success) {
            setResetList(true);
        } else {
            SWTAlertToast("error", result.message);
        }
    };

    const handleInventariableChange = async (row) => {
        const newStatus = !row.Inventariable;
        const updatedProduct = { ...row, Inventariable: newStatus };
        const result = await editProducts(updatedProduct);
        if (result.success) {
            setResetList(true);
        } else {
            SWTAlertToast("error", result.message);
        }
    };
    const getStock = (productId) => {
        const inventoryItem = inventoryData.find((item) => item.products_Alfonso === productId);
        return inventoryItem ? inventoryItem.Stock : 'N/A';
    };
   

    const getMeasureName = (measureId) => {
        const measure = measures.find((measure) => measure._id.toString() === measureId);
        if (!measure) {
            console.log(`No se encontró ninguna medida con el id ${measureId}`);
            return 'N/A';
        }
        return measure.Name;
    };

    const addProducts = () => {
        setModalShow(true);
        setModalTitle("ESTAMOS AGREGANDO PRODUCTOS");
        setFullWidth(false);
        setModalContent(
            <AddProducts
                setModalShow={setModalShow}
                setResetList={setResetList}
            />
        );
    };

    const EditProduct = (row) => {
        setModalShow(true);
        setModalTitle("ESTAMOS EDITANDO PRODUCTOS");
        setFullWidth(false);
        setModalContent(
            <EditProducts
                setModalShow={setModalShow}
                setResetList={setResetList}
                row={row}
            />
        );
    };

    const DeleteInfo = async (row) => {
        const Result = await deleteProducts(row);
        if (Result.message) {
            SWTAlertToast("error", Result.message);
        } else {
            SWTAlertToast("success", `Datos Eliminado con éxito`);
            setModalShow(false);
            setResetList(true);
        }
    };

    const EditInfo = (row) => {
        return (
            <div className="row">
                <button
                    type="button"
                    onClick={() => EditProduct(row)}
                    className="btn btn-warning btn-circle"
                    style={{ color: 'white', backgroundColor: 'blue', borderColor: "blue" }}
                >
                    <i className="fa fa-edit"></i>
                </button>
                <button
                    type="button"
                    onClick={() => DeleteInfo(row)}
                    className="btn btn-info btn-circle"
                    style={{ backgroundColor: 'red', borderColor: "red" }}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        );
    };

    const columns = [
        {
            name: "Nombre",
            selector: "product_Name"
        },
        {
            name: "Medida",
            selector: "measure_alfonso",
            cell: row => getMeasureName(row.measure_alfonso)
        },
        {
            name: "Precio",
            selector: "BuyPrice"
        },
        {
            name: "Stock (Principal)",
            cell: (row) => getStock(row._id) // Asegúrate de que row._id es el ID del producto
        },
        {
            name: "Active",
            selector: "Active",
            cell: (row) => (
                <input
                    type="checkbox"
                    checked={row.Active}
                    onChange={() => handleActiveChange(row)}
                />
            ),
        },
        {
            name: "Inventariable",
            selector: "Inventariable",
            cell: (row) => (
                <input
                    type="checkbox"
                    checked={row.Inventariable}
                    onChange={() => handleInventariableChange(row)}
                />
            ),
        },
        {
            name: 'Acciones',
            cell: row => EditInfo(row),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        },
    ];

    const tableData = {
        columns,
        data
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <button onClick={() => addProducts()}>Agregar</button>
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
    );
}
