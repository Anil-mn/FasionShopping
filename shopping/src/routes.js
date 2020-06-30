import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from './component/mainPage'
import Signin from './user/singnin'
import Signup from './user/Signup'
import Shop from './user/shop'
import PrivateRoute from './auth/PrivateRoutes'
import AdminRoute from './auth/AdminRoutes'
import User from './component/user'
import Admin from './component/adminDash'


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/shop/:cataId" exact component={Shop} />
        <PrivateRoute path="/user" exact component={User} />
        <AdminRoute path="/admin" exact component={Admin} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;