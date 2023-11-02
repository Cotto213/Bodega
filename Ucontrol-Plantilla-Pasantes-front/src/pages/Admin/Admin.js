
import { Redirect } from "react-router-dom";
import ExportExcel from 'react-export-excel';
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, UncontrolledTooltip } from 'reactstrap';
import ExportExcelIva from '../../components/Admin/ExporExcelIva';
import ExportExcelPC from '../../components/Admin/ExportExcelPC';
import ExportExcelVentasFinal from '../../components/Admin/ExportExcelVentasFinal';
import ExportExcelLibroCompras from '../../components/Admin/ExportExcelLibroCompras';
import ExportExcelLibroVentas from '../../components/Admin/ExportExcelLibroVenta';
import { getCompaniesApi } from '../../api/company';
import { getProductsApi } from '../../api/product';
import { getAccessTokenApi, getRefreshTokenApi, getSession } from '../../api/auth';
import Modal from '../../components/Others/Modal';
import { ToastContainer, toast } from "react-toastify";
//llamando el componente de graficas
import ChartsComponent from "../../components/Admin/Charts/Charts";

export default function Admin() {
    const [companie, setCompanie] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [reloadAdmin, setReloadAdmin] = useState(false);
    const token = getAccessTokenApi();
    const session = getSession(token);

    const exportIva = () => {
        console.log("entra");
        setModalShow(true);
        setModalTitle("Exportar IVA (F07)");
        setModalContent(
            <ExportExcelIva
                setModalShow={setModalShow}
                setReloadAdmin={setReloadAdmin}
            />
        )
    }

    // const exportPC=()=>{
    //     console.log("entra");
    //     setModalShow(true);
    //     setModalTitle("Exportar IVA (F07)");
    //     setModalContent(
    //         <ExportExcelPC
    //         setModalShow={setModalShow}
    //         setReloadAdmin={setReloadAdmin}
    //         />
    //     )
    // }

    const exportLibroCompras = () => {
        console.log("entra");
        setModalShow(true);
        setModalTitle("Exportar Libro de Compras");
        setModalContent(
            <ExportExcelLibroCompras
                setModalShow={setModalShow}
                setReloadAdmin={setReloadAdmin}
            />
        )
    }

    const exportLibroVentas = () => {
        console.log("entra");
        setModalShow(true);
        setModalTitle("Ventas Contribuyentes");
        setModalContent(
            <ExportExcelLibroVentas
                setModalShow={setModalShow}
                setReloadAdmin={setReloadAdmin}
            />
        )
    }

    const VentasCF = () => {
        console.log("entra");
        setModalShow(true);
        setModalTitle("Ventas Consumidor Final");
        setModalContent(
            <ExportExcelVentasFinal
                setModalShow={setModalShow}
                setReloadAdmin={setReloadAdmin}
            />
        )
    }

    return (
        <div class="row">
            {/* <div class="col-lg-3 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-row">
                    <div
                        class="round round-lg text-white d-inline-block text-center rounded-circle bg-info">
                        <i class="mdi mdi-inbox-arrow-down"></i></div>
                    <div class="ml-2 align-self-center">
                    <h5 class="text" align="center">Formulario Declaracion del IVA (F07)</h5>
                    <div class="" align="center">                    
                  <button type="button" className="btn-rounded m-t-10 mb-2 " style={{color:'green'}}  onClick={exportIva} id="TooltipEditBtn1">
                  Exportar
                      <i class="fas fa-file-excel"></i>
                      </button>
                      <UncontrolledTooltip placement="bottom" target="TooltipEditBtn1">
                              Exportar
                      </UncontrolledTooltip>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="col-lg-3 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-row">
                    <div
                        class="round round-lg text-white d-inline-block text-center rounded-circle bg-success">
                        <i class="mdi mdi-album"></i></div>
                    <div class="ml-2 align-self-center">
                    <h5 class="text" align="center">Libro Venta Consumidor Final</h5>
                    <div class="" align="center">                    
                  <button type="button" className="btn-rounded m-t-10 mb-2 " style={{color:'green'}}  onClick={VentasCF} id="TooltipEditBtn1">
                  Exportar
                      <i class="fas fa-file-excel"></i>
                      </button>
                      <UncontrolledTooltip placement="bottom" target="TooltipEditBtn1">
                              Exportar
                      </UncontrolledTooltip>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-row">
                    <div
                        class="round round-lg text-white d-inline-block text-center rounded-circle bg-primary">
                        <i class="mdi mdi-bullseye"></i></div>
                    <div class="ml-2 align-self-center">
                    <h5 class="text" align="center">Libro Ventas Contribuyentes</h5>
                    <div class="" align="center">
                  <button type="button" className="btn-rounded m-t-10 mb-2 " style={{color:'green'}}  onClick={exportLibroVentas} id="TooltipEditBtn1">
                  Exportar
                      <i class="fas fa-file-excel"></i>
                      </button>
                      <UncontrolledTooltip placement="bottom" target="TooltipEditBtn1">
                              Exportar
                      </UncontrolledTooltip>
                    </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-row">
                    <div
                        class="round round-lg text-white d-inline-block text-center rounded-circle bg-danger">
                        <i class="mdi mdi-cart-outline"></i></div>
                    <div class="ml-2 align-self-center">
                    <h5 class="text" align="center">Libro  de  Compras</h5>
                    <div class="" align="center">
                  <button type="button" className="btn-rounded m-t-10 mb-2 " style={{color:'green'}}  onClick={exportLibroCompras} id="TooltipEditBtn1">
                  Exportar
                      <i class="fas fa-file-excel"></i>
                      </button>
                      <UncontrolledTooltip placement="bottom" target="TooltipEditBtn1">
                              Exportar
                      </UncontrolledTooltip>
                    </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div> */}
            <ChartsComponent />
            <Modal    //se crea el componente modal para poder usarlo en esta pagina
                modalShow={modalShow}
                modalTitle={modalTitle}
                setModalShow={setModalShow}
            >
                {modalContent}
            </Modal>
            <ToastContainer />
        </div>
    );
}