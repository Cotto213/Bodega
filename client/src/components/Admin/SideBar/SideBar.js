import React, { useState, useEffect } from "react";
import classnames from 'classnames';

import { Link } from "react-router-dom"
import { getAccessTokenApi, logout } from '../../../api/auth';

export default function SideBar(props) {
    const { user } = props

    var URLactual = window.location.pathname;
    const token = getAccessTokenApi();

    const [opciones, setOpciones] = useState([]);
    const logoutUser = () => {
        logout();
        window.location.reload();
    };



   /*  opciones.map(item => {
        console.log(item);

    }) */


    return (
        <aside className="left-sidebar">
            <div className="scroll-sidebar">
                {/* <div className="user-profile position-relative"  style={{ background: 'url(../assets/images/background/ucontrol.jpg )' }} >    
        
                            <div className="profile-text pt-1"> 
                                <a className="dropdown-toggle u-dropdown w-100 text-white d-block position-relative" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> {user.Name} </a>
                                <div className="dropdown-menu animated flipInY">  */}
                {/* <a href="#" className="dropdown-item"><i className="ti-user"></i>
                                        My Profile</a> 
                                    <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My
                                        Balance</a>
                                    <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                                    <div className="dropdown-divider"></div> 
                                    <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a> */}
                {/* <div className="dropdown-divider"></div> 
                                    <a  onClick={logoutUser} className="dropdown-item"><i className="fa fa-power-off"></i> Cerrar Sesión</a>
                                </div>
                            </div>
                        </div> */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Menú</span>
                        </li>
                        <Menu opciones={opciones} URLactual={URLactual} user={user} />
                    </ul>
                </nav>
            </div>
            <div className="sidebar-footer">

                {/* <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                
                <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a> */}

                <a href="" className="link" data-toggle="tooltip" title="Cerrar Sesión" onClick={logoutUser} ><i className="mdi mdi-power"></i></a>
            </div>
        </aside>
    );

};



function Menu(props) {
    const { opciones, URLactual, user } = props;

    const [isActiveClass, setIsActiveClass] = useState(false);
    const [isIn, setIsIn] = useState(null);
    const [activeTab, setActiveTab] = useState('1');

    const titulos = opciones.map(item => {

        const opcionesMenu = item.grupos;
        let MenuSelected = []


        MenuSelected = opcionesMenu.filter(x => x.opmenu[0].Checked === true).map(item2 => { return item2 });



        const targetClassName = classnames('sidebar-link', ' has-arrow', 'waves-effect', ' waves-dark', { 'active bg-success': item._id === activeTab });
        const close = classnames('sidebar-link', ' has-arrow', 'waves-effect', ' waves-dark');
        const noIn = classnames('collapse', ' first-level');
        const isInclass = classnames('collapse', ' first-level', { 'in': item._id === activeTab });
        const colorIcontext = classnames('hide-menu', { 'text-white': item._id === activeTab });
        const colorIcontextB = classnames('hide-menu', { 'text-secondary': item._id === activeTab });
        const addClassName = (id) => {
            setIsActiveClass(!isActiveClass);
            if (activeTab !== id) {
                setActiveTab(id);
                setIsActiveClass(true);
            }
        }
        function changeBackground(e) {
            e.target.style.color = 'black';
            e.target.style.fontWeight = "500";
        }
        function changeBackground2(e) {
            e.target.style.color = 'gray';
            e.target.style.fontWeight = null;
        }
        return (
            <div>
                {
                    MenuSelected.length > 0 ?
                        (
                            <li class="sidebar-item">
                                <a className={isActiveClass ? targetClassName : close} onClick={() => addClassName(item._id)}
                                    aria-expanded="false">
                                    <i class={item.icon} style={{ color: item._id === activeTab && isActiveClass ? 'white' : 'gray' }}>
                                    </i><span onMouseOver={changeBackground} onMouseLeave={changeBackground2} className={isActiveClass ? colorIcontext : colorIcontextB}>{item.Name}</span>
                                </a>
                                <ul aria-expanded="true" className={isActiveClass ? isInclass : noIn} tabId={item._id}>
                                    {opcionesMenu.map(item => {
                                        let items = item.opmenu;

                                        let checked = null;

                                        items.map(i => {
                                            item.check = i.Checked;
                                        })

                                        if (item.check) {
                                            return (
                                                <li class="sidebar-item">
                                                    <Link to={`${item.URL}`} class="sidebar-link">
                                                        <i class="mdi mdi-bandcamp"></i><span class="hide-menu">{item.Name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </li>
                        )
                        : (<div></div>)
                }
            </div>
        )
    })
    return (
        <div> {titulos}</div>
    )
}

