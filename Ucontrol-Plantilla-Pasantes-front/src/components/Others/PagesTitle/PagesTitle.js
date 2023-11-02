import React,{useState} from 'react';

export default function PagesTitle(props){
    const {user}= props
    var URLactual = window.location.pathname;

    //PARA ORDENES DE COMPRA
    const [purchaseThisMonth, setPurchaseThisMonth]=useState([]); 
    const [purchaseLastMonth, setPurchaseLastMonth]=useState([]);



   
   ////////////////////////////////////////////////////////////////////////////////
    if(URLactual==="/admin/purchaswe"){
        return(
           <PurchaseOrderTotales purchaseLastMonth={purchaseLastMonth} purchaseThisMonth={purchaseThisMonth} URLactual={URLactual}/>
        )
    }
    else{
        if (URLactual === "/admin/") {
            return(
                <div className="row page-titles">
                        <div className="col-md-5 col-12 align-self-center">
                            <h3 className="text-themecolor mb-0">{user.CompanyName}</h3>
                            <ol className="breadcrumb mb-0 p-0 bg-transparent">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                {/* <li className="breadcrumb-item active">Dashboard 2</li> */}
                            </ol>
                        </div>
                        <div className="col-md-7 col-12 align-self-center d-none d-md-block">
                            <div className="d-flex mt-2 justify-content-end">
                                <div className="d-flex mr-3 ml-2">
                                    <div className="chart-text mr-2">
                                    <h6 className="mb-0"><small>ESTE MES</small></h6>
                                    <h4 className="mt-0 text-info">$ {purchaseThisMonth.map(item => parseFloat(item.sumAmount).toFixed(2))} </h4>
                                    </div>
                                    {/* <div className="spark-chart">
                                        <div id="monthchart"></div>
                                    </div> */}
                                </div>
                                <div className="d-flex ml-2">
                                    <div className="chart-text mr-2">
                                    <h6 className="mb-0"><small>EL MES PASADO</small></h6>
                                    <h4 className="mt-0 text-primary">$ {purchaseLastMonth.map(item => parseFloat(item.sumAmount).toFixed(2))}</h4>
                                    </div>
                                    {/* <div className="spark-chart">
                                        <div id="lastmonthchart"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            );
        }
        else{
            return (
                
                <div style={{height:"5px"}}>

                </div>
            );
        }
    }
    
}



function PurchaseOrderTotales(props){
   const {purchaseLastMonth,purchaseThisMonth,URLactual}=props;
  
   
    return(
        <div className="row page-titles">
            <div className="col-md-5 col-12 align-self-center">
                <h3 className="text-themecolor mb-0">Dashboard 2</h3>
                <ol className="breadcrumb mb-0 p-0 bg-transparent">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Ordenes de Compra</li>
                </ol>
            </div>
            <div className="col-md-7 col-12 align-self-center d-none d-md-block">
                <div className="d-flex mt-2 justify-content-end">
                    <div className="d-flex mr-3 ml-2">
                        <div className="chart-text mr-2">
                            <h6 className="mb-0"><small>ESTE MES</small></h6>
                            <h4 className="mt-0 text-info">$ {purchaseThisMonth.map(item => item.total_amount)} </h4>
                        </div>
                        <div className="spark-chart">
                            
                        </div>
                    </div>
                    <div className="d-flex ml-2">
                        <div className="chart-text mr-2">
                            <h6 className="mb-0"><small>EL MES PASADO</small></h6>
                            <h4 className="mt-0 text-primary">$ {purchaseLastMonth.map(item => item.total_amount)}</h4>
                        </div>
                        <div className="spark-chart">
                            <div class="ml-auto">
                                <span class="text-orange display-6"><i class="ti-stats-up"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
