import React, { useEffect, useState } from 'react'

//importando grafica de barras
import { Bar } from 'react-chartjs-2'

//importando para obtener el token de usuario
import { getAccessTokenApi } from '../../../api/auth';

//importando la api para tomar las cuentas de banco
import { getBankAccountsCompanyApi } from '../../../api/bankaccount';
//importando la api para tomar las cuentas por pagar de los proveedores
import { getpayssppliersApi, getCategoryProducsApi, getInventoryProducts } from '../../../api/charts';
//importando la api para tomar las cuentas por cobrar
import { getChargestoCustomersApi, } from '../../../api/customerpayment';
//importando api para tomar las cuentas de caja
import { getCashAccountsCompanyApi } from '../../../api/cashaccount';

//hook de usuario para obtener su informacion
import useAuth from '../../../hooks/useAuth';

//funcion que devolvera las graficas 
export default function ChartsComponent() {
    //obteniendo el token de usuario
    const token = getAccessTokenApi();
    //obteniendo informacion de usuario
    const { user } = useAuth();

    /////////////////////////////////////////////////////////////////////// Inicio informacion para grafica cuentas bancarias
    //usando useffect para cargar las cuentas en una variable
    const [bankAccounts, setBankAccounts] = useState([]);
    useEffect(() => {
        getBankAccountsCompanyApi(user.Company).then(response => {
            if (response) {
                setBankAccounts(response.bankAccount);
            }
        })
    }, [token])
    //console.log(bankAccounts);
    //informacion que mostrara la grafica
    const labelsBankAccounts = [];
    const dataBankAccounts = [];
    //recorriendo el arreglo de cuentas y haciendo push para pasar labels al arreglo
    //de labels
    const backgroundBankAccounts = []
    //variables para los colores que se van a generar
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";
    let sumaBankSaldo = 0;
    // console.log(bankAccounts,"ACA ESTA");
    bankAccounts.filter(x => x.Saldo != 0).map(bank => {
        labelsBankAccounts.push(`${bank.Alias}`)
        dataBankAccounts.push(bank.Saldo)

        for (var i = 0; i < 6; i++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        sumaBankSaldo += bank.Saldo;
        backgroundBankAccounts.push(color)
    })
    //console.log(backgroundBankAccounts);
    //añadiendo ultima barra a mostrar en la grafica
    dataBankAccounts.push(sumaBankSaldo)
    //generando ultimo color 
    backgroundBankAccounts.push("#5C5857")
    //agregando ultimo label
    labelsBankAccounts.push("Total Cuentas")

    const dataBankAccountsChart = {
        labels: labelsBankAccounts,
        datasets: [
            {
                label: 'Dolares',
                data: dataBankAccounts,
                backgroundColor: backgroundBankAccounts,
                borderWidth: 1
            },
        ],
    };

    const optionsBankAccounts = {
        scales: {
            //responsive: true,
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    /////////////////////////////////////////////////////////////////////// Fin informacion para grafica de cuentas de banco

    /////////////////////////////////////////////////////////////////////// Inicio informacion para grafica cuentas por cobrar
    const [paysSuppliers, setPaysSuppliers] = useState([]);
    useEffect(() => {
        getpayssppliersApi(user.Company).then(result => {
            if (result) {
                setPaysSuppliers(result.suppliers)
            }
        })
    }, [token])
    //console.log(paysSuppliers);
    //informacion que mostrara la grafica
    const labelsPays = [];
    const dataPays = [];
    //recorriendo el arreglo de cuentas y haciendo push para pasar labels al arreglo
    //de labels
    const backgroundPays = []
    var simbolospays, colorpays;
    simbolospays = "0123456789ABCDEF";
    colorpays = "#";
    let sumaPays = 0;
    paysSuppliers.filter(x => x.DebsToPay != 0).map(pays => {
        labelsPays.push(`${pays.codsupplier}`)
        dataPays.push(pays.DebsToPay)

        for (var i = 0; i < 6; i++) {
            colorpays = colorpays + simbolospays[Math.floor(Math.random() * 16)];
        }

        backgroundPays.push(colorpays)
        sumaPays += pays.DebsToPay;
    })
    labelsPays.push("Deuda Total");
    dataPays.push(sumaPays)
    backgroundPays.push("#5C5857")

    const dataPaysSupplier = {
        labels: labelsPays,
        datasets: [
            {
                label: 'Dolares',
                data: dataPays,
                backgroundColor: backgroundPays,
                borderWidth: 1
            },
        ],
    }

    const optionsPaysSupplier = {
        scales: {
            //responsive: true,
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    /////////////////////////////////////////////////////////////////////// Fin informacion para grafica de cuentas por cobrar

    /////////////////////////////////////////////////////////////////////// Inicio informacion para grafica cuentas por pagar
    const [chargesCustomer, setChargesCustomer] = useState([]);
    useEffect(() => {
        getChargestoCustomersApi(user.Company, user.id).then(response => {
            if (response) {
                setChargesCustomer(response.invoice);
            }
        });
    }, [token])
    //console.log(paysSuppliers);
    //informacion que mostrara la grafica
    const labelsCharges = [];
    const dataCharges = [];
    //recorriendo el arreglo de cuentas y haciendo push para pasar labels al arreglo
    //de labels
    const backgroundCharges = []
    var simbolosCharges, colorCharges;
    simbolosCharges = "0123456789ABCDEF";
    colorCharges = "#";
    let sumaCharges = 0;
    chargesCustomer.map(charges => {
        if (charges.AccountsReceivable != null) {
            dataCharges.push(charges.AccountsReceivable)
        } else {
            dataCharges.push(0)
        }
        labelsCharges.push(`${charges.codCustomer}`)


        for (var i = 0; i < 6; i++) {
            colorCharges = colorCharges + simbolosCharges[Math.floor(Math.random() * 16)];
        }

        backgroundCharges.push(colorCharges)
        sumaCharges += charges.AccountsReceivable;
    })
    labelsCharges.push("Deuda Total");
    dataCharges.push(sumaCharges)
    backgroundCharges.push("#5C5857")
    //console.log(sumaCharges);
    // console.log(labelsCharges);
    const dataChargesCustomer = {
        labels: labelsCharges,
        datasets: [
            {
                label: 'Dolares',
                data: dataCharges,
                backgroundColor: backgroundCharges,
                borderWidth: 1
            },
        ],
    }

    const optionsChargesop = {
        scales: {
            //responsive: true,
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    /////////////////////////////////////////////////////////////////////// Fin informacion para grafica cuentas por pagar

    /////////////////////////////////////////////////////////////////////// Inicio informacion para grafica cuentas por pagar
    // const [productCategori, setProductCategori] = useState([]);
    // //estado para generar nuevo arreglo
    // const newArray = [];
    // useEffect(() => {
    //     getCategoryProducsApi(user.Company).then(response => {
    //         if (response) {
    //             setProductCategori(response.productos);
    //         }
    //     });
    // }, [token])
    // console.log(productCategori);
    // //informacion que mostrara la grafica
    // const labelsProcts = [];
    // const dataProducts = [];
    // //  //recorriendo el arreglo de cuentas y haciendo push para pasar labels al arreglo
    // //  //de labels
    // const backgroundproducts = []
    // var simbolosproducts, colorProducts;
    // simbolosproducts = "0123456789ABCDEF";
    // colorProducts = "#";
    // let sumaProduct = 0;

    // productCategori.map(products => {
    //     //mapeando arreglo para validar despues
    //     newArray.push({ label: `${products.Product.CatProduct.Name}`, totalBuyPrice: products.Product.BuyPrice * products.Stock })

    //     //validando si el label ya existe entonces no hace el push
    //     if (!labelsProcts.includes(`${products.Product.CatProduct.Name}`)) {
    //         labelsProcts.push(`${products.Product.CatProduct.Name}`)
    //     }
    //     //dataProducts.push(products.Product.BuyPrice * products.Stock)

    //     for (var i = 0; i < 6; i++) {
    //         colorProducts = colorProducts + simbolosproducts[Math.floor(Math.random() * 16)];
    //     }
    //     backgroundproducts.push(colorProducts)
    //     //sumaProduct += (products.Product.BuyPrice * products.Stock);
    // })


    // // validando que se sumen los que tienen label repedito
    // const repeditos = newArray.reduce((acumulador, valoractual) => {
    //     const yaexiste = acumulador.find(elemento => elemento.label === valoractual.label);
    //     if (yaexiste) {
    //         return acumulador.map((elemento) => {
    //             if (elemento.label === valoractual.label) {
    //                 return {
    //                     ...elemento,
    //                     totalBuyPrice: elemento.totalBuyPrice + valoractual.totalBuyPrice
    //                 }
    //             }
    //             return elemento
    //         })
    //     }
    //     return [...acumulador, valoractual]
    // }, []);
    // console.log(repeditos);
    // repeditos.map(item => {
    //     dataProducts.push(item.totalBuyPrice);
    //     sumaProduct += item.totalBuyPrice;
    // })
    // dataProducts.push(sumaProduct)
    // backgroundproducts.push("#5C5858")
    // labelsProcts.push("Total")

    // const dataProducstInventori = {
    //     labels: labelsProcts,
    //     datasets: [
    //         {
    //             label: 'Dolares',
    //             data: dataProducts,
    //             backgroundColor: backgroundproducts,
    //             borderWidth: 1
    //         },
    //     ],
    // }

    // const optionsProducstInventor = {
    //     scales: {
    //         //responsive: true,
    //         yAxes: [
    //             {
    //                 ticks: {
    //                     beginAtZero: true,
    //                 },
    //             },
    //         ],
    //     },
    // }
    /////////////////////////////////////////////////////////////////////// Fin informacion para grafica cuentas por pagar

    /////////////////////////////////////////////////////////////////////// informacion de cuentas de caja
    //////////////////////////////////////////informacion para graficas de inventario
    const [invetoriProductsType, setInventoriProductsType] = useState([])

    //tomando los productos de la base de datos
    useEffect(() => {
        getInventoryProducts(user.Company).then(productos => {
            if (productos) {
                setInventoriProductsType(productos.productos)
            }
        })
    }, [token])
    //console.log(invetoriProductsType);

    //mapeando el arreglo para transformarlo 
    //creamos un nuevo arreglo que contendra el corregido
    let invetoriProductsType2 = []
    for (let k = 0; k < invetoriProductsType.length; k++) {
        invetoriProductsType2.push({
            Stock: invetoriProductsType[k].Stock,
            Product: invetoriProductsType[k].products[0],
            typeProduct: invetoriProductsType[k].products[0].typeproduct[0].CodTypeProduct,
            catproduct: invetoriProductsType[k].products[0].catproducts[0].Name
        })
    }
    //console.log(invetoriProductsType2);

    ////////filtrando para informacion de productos categoria tipo 1 y 2
    //arreglo para tipos 1 y 2 
    let type12 = []
    invetoriProductsType2.filter(x => x.typeProduct != 3).map(item => {
        type12.push({ label: `${item.catproduct}`, totalBuyPrice: item.Product.BuyPrice * item.Stock })
    })
    //console.log(type12);
    // validando que se sumen los que tienen label repedito
    const repeditos2 = type12.reduce((acumulador, valoractual) => {
        const yaexiste = acumulador.find(elemento => elemento.label === valoractual.label);
        if (yaexiste) {
            return acumulador.map((elemento) => {
                if (elemento.label === valoractual.label) {
                    return {
                        ...elemento,
                        totalBuyPrice: elemento.totalBuyPrice + valoractual.totalBuyPrice
                    }
                }
                return elemento
            })
        }
        return [...acumulador, valoractual]
    }, []);
    //console.log(repeditos2);
    //informacion que mostrara la grafica
    const labelsProcts2 = [];
    const dataProducts2 = [];
    //  //recorriendo el arreglo de cuentas y haciendo push para pasar labels al arreglo
    //  //de labels
    const backgroundproducts2 = []
    var simbolosproducts2, colorProducts2;
    simbolosproducts2 = "0123456789ABCDEF";
    colorProducts2 = "#";
    let sumaProduct2 = 0;

    repeditos2.map(item => {
        labelsProcts2.push(item.label)
        dataProducts2.push(item.totalBuyPrice);
        sumaProduct2 += item.totalBuyPrice;
        for (var i = 0; i < 6; i++) {
            colorProducts2 = colorProducts2 + simbolosproducts2[Math.floor(Math.random() * 16)];
        }
        backgroundproducts2.push(colorProducts2)
    })
    dataProducts2.push(sumaProduct2)
    backgroundproducts2.push("#5C5858")
    labelsProcts2.push("Total")

    const dataProducstInventori2 = {
        labels: labelsProcts2,
        datasets: [
            {
                label: 'Dolares',
                data: dataProducts2,
                backgroundColor: backgroundproducts2,
                borderWidth: 1
            },
        ],
    }

    const optionsProducstInventor2 = {
        scales: {
            //responsive: true,
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    //fin filtrado graficas tipo 1 y 2

    //filtrado de grarfica tipo 3

    ////////filtrando para informacion de productos categoria tipo 1 y 2
    //arreglo para tipos 1 y 2 
    let type3 = []
    invetoriProductsType2.filter(x => x.typeProduct == 3).map(item => {
        type3.push({ label: `${item.catproduct}`, totalBuyPrice: item.Product.BuyPrice * item.Stock })
    })
    //console.log(type12);
    // validando que se sumen los que tienen label repedito
    const repeditos3 = type3.reduce((acumulador, valoractual) => {
        const yaexiste = acumulador.find(elemento => elemento.label === valoractual.label);
        if (yaexiste) {
            return acumulador.map((elemento) => {
                if (elemento.label === valoractual.label) {
                    return {
                        ...elemento,
                        totalBuyPrice: elemento.totalBuyPrice + valoractual.totalBuyPrice
                    }
                }
                return elemento
            })
        }
        return [...acumulador, valoractual]
    }, []);
    //console.log(repeditos3);
    //informacion que mostrara la grafica
    const labelsProcts3 = [];
    const dataProducts3 = [];
    //  //recorriendo el arreglo de cuentas y haciendo push para pasar labels al arreglo
    //  //de labels
    const backgroundproducts3 = []
    var simbolosproducts3, colorProducts3;
    simbolosproducts3 = "0123456789ABCDEF";
    colorProducts3 = "#";
    let sumaProduct3 = 0;

    repeditos3.map(item => {
        labelsProcts3.push(item.label)
        dataProducts3.push(item.totalBuyPrice);
        sumaProduct3 += item.totalBuyPrice;
        for (var i = 0; i < 6; i++) {
            colorProducts3 = colorProducts3 + simbolosproducts3[Math.floor(Math.random() * 16)];
        }
        backgroundproducts3.push(colorProducts3)
    })
    dataProducts3.push(sumaProduct3)
    backgroundproducts3.push("#5C5858")
    labelsProcts3.push("Total")

    const dataProducstInventori3 = {
        labels: labelsProcts3,
        datasets: [
            {
                label: 'Dolares',
                data: dataProducts3,
                backgroundColor: backgroundproducts3,
                borderWidth: 1
            },
        ],
    }

    const optionsProducstInventor3 = {
        scales: {
            //responsive: true,
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    //fin de filtrado grafica tipo 3
    //////////////////////////////////////////fin informacion para graficas de inventario 



    const [cashAccounts, setCashAccounts] = useState([]);
    //informacion que mostrara la grafica
    const labelsChash = [];
    const dataChash = [];
    //  //recorriendo el arreglo de cuentas y haciendo push para pasar labels al arreglo
    //  //de labels
    const backgroundChash = []
    var simbolosCash, colorCash;
    simbolosCash = "0123456789ABCDEF";
    colorCash = "#";
    let sumaCash = 0;
    useEffect(() => {
        getCashAccountsCompanyApi(user.Company).then(response => {
            if (response) {
                setCashAccounts(response.CashAccount);
            }
        });
    }, [token]);
    //console.log(cashAccounts);
    cashAccounts.filter(x => x.Saldo != 0).map(cash => {
        labelsChash.push(`${cash.Alias}`)
        dataChash.push(cash.Saldo)
        for (var i = 0; i < 6; i++) {
            colorCash = colorCash + simbolosCash[Math.floor(Math.random() * 16)];
        }
        backgroundChash.push(colorCash)
        sumaCash += cash.Saldo;
    })
    dataChash.push(sumaCash)
    backgroundChash.push("#5C5857")
    labelsChash.push("Total")


    const dataChashAccounts = {
        labels: labelsChash,
        datasets: [
            {
                label: 'Dolares',
                data: dataChash,
                backgroundColor: backgroundChash,
                borderWidth: 1
            },
        ],
    }

    const optionsCash = {
        scales: {
            //responsive: true,
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }


    //retornando las graficas
    return (
        <div className="container">
            {/** validando que sea usuario administrador para mostrar las graficas */}
            {
                user.Profile == 'Admin' && (
                    <div>
                        <div className="row">
                            <div className="card col">
                                <div className="card-body">
                                    <h3 className="card-title">Grafica Cuentas Por Cobrar</h3>
                                    <Bar data={dataChargesCustomer} options={optionsChargesop} />
                                </div>
                            </div>
                            {/**grafica de cuentas bancarias */}
                            <div className="card col">
                                <div className="card-body">
                                    <h3 className="card-title">Grafica Cuentas Por pagar</h3>
                                    <Bar data={dataPaysSupplier} options={optionsPaysSupplier} />
                                </div>
                            </div>
                            {/** fin grafica de cuentas por pagar */}
                        </div>
                        <div className="row">
                            {/**grafica de cuentas bancarias */}
                            <div className="card col">
                                <div className="card-body">
                                    <h3 className="card-title">Grafica Cuentas Banco</h3>
                                    <Bar data={dataBankAccountsChart} options={optionsBankAccounts} />
                                </div>
                            </div>
                            {/** fin de grafica cuentas bancarias */}
                            {/**grafica de cajas */}
                            <div className="card col">
                                <div className="card-body">
                                    <h3 className="card-title">Grafica Cuentas Caja</h3>
                                    <Bar data={dataChashAccounts} options={optionsCash} />
                                </div>
                            </div>
                            {/** fin grafica cajas */}
                        </div>
                        <div className="row">
                            {/** fin de grafica inventario */}
                            {/*grafica productos categoria 1 y 2 */}
                            <div className="card col">
                                <div className="card-body">
                                    <h3 className="card-title">Grafica Inventario</h3>
                                    <Bar data={dataProducstInventori2} options={optionsProducstInventor2} />
                                </div>
                            </div>
                            {/** fin grafica productos categoria 1 y 2 */}
                            {/*grafica productos categoria 3 */}
                            <div className="card col">
                                <div className="card-body">
                                    <h3 className="card-title">Grafica Compras</h3>
                                    <Bar data={dataProducstInventori3} options={optionsProducstInventor3} />
                                </div>
                            </div>
                            {/** fin grafica productos categoria 3 */}
                        </div>
                    </div>
                )
            }
        </div>
    )
}