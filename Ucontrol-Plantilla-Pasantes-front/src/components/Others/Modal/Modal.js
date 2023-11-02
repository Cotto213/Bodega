import React from 'react';
import { Button, Modal as ModalUser, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';


export default function Modal(props){
    
    const { setModalShow, modalShow,modalTitle,fullWidth}=props;
    const toggle = () => setModalShow(!modalShow);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
   
    return (
        <ModalUser
        isOpen={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        className={fullWidth? "modal-dialog modal-full-width" : "modal-dialog modal-lg"}
          >
        <ModalHeader close={closeBtn} className="modal-header modal-colored-header bg-success text-center">    
            <h3 className="modal-title text-white text-center" id="info-header-modalLabel"> {modalTitle}</h3>
        </ModalHeader>
        <ModalBody  style={{'max-height': 'calc(500vh - 210px)', 'overflow-y': 'auto'}}>
           {props.children}
        </ModalBody>
        <ModalFooter>
          {/* <Button onClick={toggle} className="btn btn-danger" >Cerrar</Button> */}
        </ModalFooter>
      </ModalUser>
    );
}