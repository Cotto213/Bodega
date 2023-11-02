import React,{useState} from "react";



export default function SideBar(){
    return (
        <aside className="left-sidebar">
       
            <div className="scroll-sidebar">
            <div className="user-profile position-relative"  style={{ background: 'url(../assets/images/background/user-info.jpg )' }} >
                        
                        <div className="profile-img"> 
                            <img src="../assets/images/background/user1.jpg" alt="user" className="w-100" /> 
                         </div>           
                            <div className="profile-text pt-1"> 
                                <a href="#" className="dropdown-toggle u-dropdown w-100 text-white d-block position-relative" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe</a>
                                <div className="dropdown-menu animated flipInY"> 
                                    <a href="#" className="dropdown-item"><i className="ti-user"></i>
                                        My Profile</a> 
                                    <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My
                                        Balance</a>
                                    <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                                    <div className="dropdown-divider"></div> 
                                    <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                                    <div className="dropdown-divider"></div> 
                                    <a href="#" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                <nav className="sidebar-nav">
                </nav>
            </div>
            <div className="sidebar-footer">
                
                <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                
                <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
               
                <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
            </div>
        </aside>
    );

};