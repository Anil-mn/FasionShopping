import React,{Fragment} from 'react'
import {isAutheticated, signout} from '../auth/index'
import { Redirect } from 'react-router-dom'
import   '../component/css/style.css'
import   '../component/css/bootstrap.min.css'


// import   '../component/css/jquery-ui.min.css'
// import   '../component/css/nice-select.css'
// import   '../component/css/owl.carousel.min.css'
import   '../component/css/slicknav.min.css'




const submit = () => {
    signout(()=>{
        alert('as');
        return (
            <Redirect to='./'></Redirect>
        )
    })
}

const Header = ({
    name = 'Fassion Shopping',

}) => {
    return (
        <header >
         <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope"></i>
                        {name}
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"></i>
                        +65 11.188.888
                    </div>
                </div>
                <div className="ht-right">
                    <a href="#" className="login-panel"><i className="fa fa-user"></i>Login</a>
                    <div className="lan-selector">
                        
                    </div>
                    <div className="top-social">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"><i className="ti-twitter-alt"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>

          
        <div className="container">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                            <a href="./index.html">
                                <img src="img/logo.png" alt=""></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="advanced-search">
                            <button type="button" className="category-btn">All Categories</button>
                            <div className="input-group">
                                <input type="text" placeholder="What do you need?"></input>
                                <button type="button"><i className="ti-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right col-md-3">
                        <ul className="nav-right">
                            <li className="heart-icon">
                                <a href="#">
                                    <i className="icon_heart_alt"></i>
                                    <span>1</span>
                                </a>
                            </li>
                            <li className="cart-icon">
                                <a href="#">
                                    <i className="icon_bag_alt"></i>
                                    <span>3</span>
                                </a>
                                <div className="cart-hover">
                                    <div className="select-items">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="si-pic"><img src="img/select-product-1.jpg" alt=""></img></td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="si-pic"><img src="img/select-product-2.jpg" alt=""></img></td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="select-total">
                                        <span>total:</span>
                                        <h5>$120.00</h5>
                                    </div>
                                    <div className="select-button">
                                        <a href="#" className="primary-btn view-card">VIEW CARD</a>
                                        <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </li>
                            <li className="cart-price">$150.00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>



        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu"></i>
                        <span>All departments</span>
                        <ul className="depart-hover">
                            <li className="active"><a href="#">Women’s Clothing</a></li>
                            <li><a href="#">Men’s Clothing</a></li>
                            <li><a href="#">Underwear</a></li>
                            <li><a href="#">Kid's Clothing</a></li>
                            <li><a href="#">Brand Fashion</a></li>
                            <li><a href="#">Accessories/Shoes</a></li>
                            <li><a href="#">Luxury Brands</a></li>
                            <li><a href="#">Brand Outdoor Apparel</a></li>
                        </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        <li className="active"><a href="./">Home</a></li>
                        <li><a href="./shop">Shop</a>
                        <ul className="dropdown">
                                <li><a href="#">Men's</a></li>
                                <li><a href="#">Women's</a></li>
                                <li><a href="#">Kid's</a></li>
                            </ul></li>
                        <li><a href="#">Collection</a>
                            <ul className="dropdown">
                                <li><a href="#">Men's</a></li>
                                <li><a href="#">Women's</a></li>
                                <li><a href="#">Kid's</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        {!isAutheticated() && (
                            <Fragment>
                            <li><a href="./signup">signup</a></li>
                             <li><a href="./signin">Signin</a></li>
                             </Fragment>
                        )
                        }
                        {isAutheticated() && (<li onClick={submit}><a>signout</a></li>
                     )
                        }
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>


        </header>
    )
} 


export default Header;