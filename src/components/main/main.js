import React , { Component } from "react";
import {Switch , Route , Redirect } from "react-router-dom";
import Home from "../home/home.js";
import Navbar from "../Navbar/navbar.js";
import Register from "../register/register.js";
import Login from "../login/login.js";
import Contact from "../contact/contact.js";
import About from "../About/AboutComponent";
import { DISHES } from "../../shared/dishes.js";
import { LEADERS } from "../../shared/leaders";
import { PROMOTIONS } from "../../shared/promotions";
import Menu from "../menuComponent/menuComponent.js";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes : DISHES,
            leaders : LEADERS,
            promotions : PROMOTIONS
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Switch>
                    <Route path="/home" component={()=> <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                                                        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                                                        leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>} />
                    <Route path="/contact" component={()=> <Contact />} />
                    <Route path="/about" component={()=> <About leaders={this.state.leaders} />} />
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