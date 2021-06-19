import React from 'react'
import logo from './../assets/images/noon-black-en.svg';

// header color #feee00

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav-color">
                <div className="container-fluid">
                    <a className="navbar-brand me-4" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="input-group input-group-md">
                            <input type="text" className="form-control me-5" placeholder="What are you looking for?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">العربية</a>
                            </li>
                            <li className="nav-item dropdown custom-dropdown">
                                <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="country" />
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ship to
                                    <span>UAE</span>
                                </a>
                                <span className="dropdown-arrow"></span>
                                <div></div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Sign In</a>
                                <img className="nav-img" src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="Open Login Modal" />
                            </li>
                            <li className="nav-item custom-border">
                                <a className="nav-link custom-font" aria-current="page" href="#">Cart</a>
                                <img alt="cart" src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" class="cartIcon" />
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            
            {/* <div className="__nav-caty">
                <div className="container-fluid">
                    <h5>Faizan Khan</h5>
                </div>
            </div> */}
        </>
    )
}

export default Navbar
