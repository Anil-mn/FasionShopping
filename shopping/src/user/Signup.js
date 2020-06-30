import React, { useState } from 'react';
import Header from '../component/header'
import {signup} from '../auth/index'
import { Link } from "react-router-dom";
import { API } from "../backend";
const Signup = () =>{
  
   const [values, setValues] = useState({
       name:"",
       email:"",
       phone:"",
       password:"",
       error: "",
       success: false
   })
       
   const { name, email,phone, password, error, success } = values;
   
   const handleChange = name => event => {
    setValues({ ...values, error:false, [name]: event.target.value });
   }
   const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, phone, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            phone:"",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };



  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  
    return (
      <div>
          <Header></Header>
        
          <div class="register-login-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="register-form">
                        <h2>Register</h2>
                        <form action="#">
                            <div class="group-input">
                                <label for="username">Name</label>
                                <input 
                                  id="username"
                                  onChange={handleChange("name")}
                                  type="text"
                                  value={name}
                                 />
                            </div>
                            <div class="group-input">
                                <label for="pass">email</label>
                                <input type="email"
                                 id="email"
                                 onChange={handleChange("email")}
                                 
                                  value={email}
                                 />
                            </div>
                            <div class="group-input">
                                <label for="pass">PhoneNumber</label>
                                <input type="number"
                                  onChange={handleChange("phone")}
                                  
                                  value={phone} id="phone"/>
                            </div>
                            <div class="group-input">
                                <label for="con-pass">Password</label>
                                <input type="password"
                                  onChange={handleChange("password")}
                                  
                                  value={password} id="pass"/>
                            </div>
                            <p className="text-black text-center">{JSON.stringify(values)}</p>
                            <p className="text-black text-center">Api is{API}</p>
                            <button type="submit" onClick={onSubmit} class="site-btn register-btn">REGISTER</button>
                        </form>
                        {successMessage}
                       {errorMessage}
                        <div class="switch-login">
                            <a href="./signin" class="or-login">Or Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
    )
}


export default Signup;