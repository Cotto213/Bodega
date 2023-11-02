import React,{useState} from "react";

export default function TopBar(){
    return (
        <header  className="topbar">
              <nav className="navbar top-navbar navbar-expand-md navbar-dark">
              <div className="navbar-header">
                   
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="#"><i
                            className="ti-menu ti-close"></i></a>
                   
                    <a className="navbar-brand" href="index.html">
                       
                        <b className="logo-icon">
                             <i className="wi wi-sunset"></i> 
                           
                            <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                              
                        </b>
                        
                        <span className="logo-text">
                           
                            <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                            
                            <img src="../assets/images/logo.png" className="light-logo" alt="homepage" />
                            
                        </span>
                    </a>
                    
                    <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="#)"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                            className="ti-more"></i></a>
                </div>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> 
                        <a className="nav-link sidebartoggler d-none d-md-block waves-effect waves-dark"   href="#">
                               <i className="ti-menu"></i>
                               </a>
                                </li>
                    
                        <li className="nav-item d-none d-md-block search-box"> <a
                                className="nav-link d-none d-md-block waves-effect waves-dark" href="#"><i
                                    className="ti-search"></i></a>
                            <form className="app-search">
                                <input type="text" className="form-control" placeholder="Search & enter"/> 
                                <a className="srh-btn"><i className="ti-close"></i></a> 
                            </form>
                        </li>
                       
                        <li className="nav-item dropdown mega-dropdown"> <a
                                className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-view-grid"></i></a>
                            <div className="dropdown-menu scale-up-left">
                                <ul className="mega-dropdown-menu row p-0 m-0 list-inline">
                                    <li className="col-lg-3 col-xlg-2 mb-4">
                                        <h4 className="mb-3">CAROUSEL</h4>
                                     
                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <div className="container"> <img className="d-block img-fluid"  src="../assets/images/big/img1.jpg" alt="First slide"/></div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container"><img className="d-block img-fluid" src="../assets/images/big/img2.jpg" alt="Second slide"/>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container"><img className="d-block img-fluid" src="../assets/images/big/img3.jpg" alt="Third slide"/></div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleControls"
                                                role="button" data-slide="prev"> <span
                                                    className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span> </a>
                                            <a className="carousel-control-next" href="#carouselExampleControls"
                                                role="button" data-slide="next"> <span
                                                    className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span> </a>
                                        </div>
                                      
                                    </li>
                                    <li className="col-lg-3 mb-4">
                                        <h4 className="mb-3">ACCORDION</h4>
                                        
                                        <div id="accordion" className="nav-accordion" role="tablist"
                                            aria-multiselectable="true">
                                            <div className="card mb-1">
                                                <div className="card-header" role="tab" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <a data-toggle="collapse" data-parent="#accordion"
                                                            href="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            Collapsible Group Item #1
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" role="tabpanel"
                                                    aria-labelledby="headingOne">
                                                    <div className="card-body"> Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high. </div>
                                                </div>
                                            </div>
                                            <div className="card mb-1">
                                                <div className="card-header" role="tab" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse"
                                                            data-parent="#accordion" href="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            Collapsible Group Item #2
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" role="tabpanel"
                                                    aria-labelledby="headingTwo">
                                                    <div className="card-body"> Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high life accusamus terry richardson ad squid. </div>
                                                </div>
                                            </div>
                                            <div className="card mb-0">
                                                <div className="card-header" role="tab" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse"
                                                            data-parent="#accordion" href="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            Collapsible Group Item #3
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" role="tabpanel"
                                                    aria-labelledby="headingThree">
                                                    <div className="card-body"> Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high life accusamus terry richardson ad squid. </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3  mb-4">
                                        <h4 className="mb-3">CONTACT US</h4>
                                       
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputname1"
                                                    placeholder="Enter Name"/> </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Enter email"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleTextarea" rows="3"
                                                    placeholder="Message"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-info">Submit</button>
                                        </form>
                                    </li>
                                    <li className="col-lg-3 col-xlg-4 mb-4">
                                        <h4 className="mb-3">List style</h4>
                                      
                                        <ul className="list-style-none">
                                            <li><a href="#"><i className="fa fa-check text-success"></i>
                                                    You can give link</a></li>
                                            <li><a href="#"><i className="fa fa-check text-success"></i>
                                                    Give link</a></li>
                                            <li><a href="#"><i className="fa fa-check text-success"></i>
                                                    Another Give link</a></li>
                                            <li><a href="#"><i className="fa fa-check text-success"></i>
                                                    Forth link</a></li>
                                            <li><a href="#"><i className="fa fa-check text-success"></i>
                                                    Another fifth link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        </ul>
                        <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/users/1.jpg" alt="user" width="30" className="profile-pic rounded-circle" />
                            </a>
                            <div className="dropdown-menu mailbox dropdown-menu-right scale-up">
                                <ul className="dropdown-user list-style-none">
                                    <li>
                                        <div className="dw-user-box p-3 d-flex">
                                            <div className="u-img"><img src="../assets/images/users/1.jpg" alt="user" className="rounded" width="80"/></div>
                                            <div className="u-text ml-2">
                                                <h4 className="mb-0">Steave Jobs</h4>
                                                <p className="text-muted mb-1 font-14">varun@gmail.com</p>
                                                <a href="pages-profile.html" className="btn btn-rounded btn-danger btn-sm text-white d-inline-block">View
                                                    Profile</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" className="dropdown-divider"></li>
                                    <li className="user-list"><a className="px-3 py-2" href="#"><i className="ti-user"></i> My Profile</a></li>
                                    <li className="user-list"><a className="px-3 py-2" href="#"><i className="ti-wallet"></i> My Balance</a></li>
                                    <li className="user-list"><a className="px-3 py-2" href="#"><i className="ti-email"></i> Inbox</a></li>
                                    <li role="separator" className="dropdown-divider"></li>
                                    <li className="user-list"><a className="px-3 py-2" href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                    <li role="separator" className="dropdown-divider"></li>
                                    <li className="user-list"><a className="px-3 py-2" href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>               
              </nav>
        </header>

    );

};