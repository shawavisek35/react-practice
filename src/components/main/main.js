import React , { Component } from "react";
import {Switch , Route , Redirect } from "react-router-dom";
import Home from "../home/home.js";
import Navbar from "../Navbar/navbar.js";
import Register from "../register/register.js";
import Login from "../login/login.js";
import Contact from "../contact/contact.js";
import About from "../About/about.js";
import { DISHES } from "../../shared/dishes.js";
import Menu from "../menuComponent/menuComponent.js";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes : DISHES
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Switch>
                    <Route path="/home" component={()=> <Home />} />
                    <Route path="/contact" component={()=> <Contact />} />
                    <Route path="/about" component={()=> <About />} />
                    <Route path="/register" component={()=> <Register />} />
                    <Route path="/login" component={()=> <Login />} />
                    <Route path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
                    
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default Main;