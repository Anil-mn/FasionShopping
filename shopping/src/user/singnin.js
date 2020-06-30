import React,{useState} from 'react';
import Header from '../component/header'
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAutheticated } from "../auth/index";

const Siginin = () =>{

     const [values, setValues] = useState({
            email: "anil@anil.com",
            password: "anil123",
            error: "",
            loading: false,
            didRedirect: false
        
     });
     const { email, password, error, loading, didRedirect } = values;
     const { user } = isAutheticated();
   
     const handleChange = name => event => {
       setValues({ ...values, error: false, [name]: event.target.value });
     };
     const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
          .then(data => {
            if (data.error) {
              setValues({ ...values, error: data.error, loading: false });
            } else {
                console.log(data);
              authenticate(data, () => {
                setValues({
                  ...values,
                  didRedirect: true
                });
              });
            
            }
          })
          .catch(console.log("signin request failed"));
          performRedirect()
      };
      const performRedirect = () => {
         
        if (didRedirect) {
         
          if (user && user.role === 1) {
            return <Redirect to="/user" />;
          } else {
            return  <Redirect to="/" />;
          }
        }
        if (isAutheticated()) {
          return <Redirect to="/" />;
        }
      };
   
    return (
        
      <div>
          <Header></Header>
          
    <div class="register-login-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="login-form">
                    <h2>Login</h2>
                    <form action="#">
                    
                        <div class="group-input">
                            <label for="username">Username or email address *</label>
                            <input type="text" id="username"
                             onChange={handleChange("email")}
                                 
                                 value={email}></input>
                        </div>
                        <div class="group-input">
                            <label for="pass">Password *</label>
                            <input type="password"
                             onChange={handleChange("password")}
                                 
                                 value={password}
                             id="pass"></input>
                        </div>
                        <div class="group-input gi-check">
                            <div class="gi-more">
                                <label for="save-pass">
                                    Save Password
                                    <input type="checkbox" id="save-pass"></input>
                                    <span class="checkmark"></span>
                                </label>
                                <a href="#" class="forget-pass">Forget your Password</a>
                            </div>
                        </div>
                        
                        <button type="submit" onClick={ onSubmit} class="site-btn login-btn">Sign In</button>
                        <p className="text-black text-center">{JSON.stringify(values)}</p>
                        
                    </form>
                    <div class="switch-login">
                        <a href="./register.html" class="or-login">Or Create An Account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

 </div>
    )
    
}


export default Siginin