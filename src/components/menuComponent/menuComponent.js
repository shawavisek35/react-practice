import React , {Component} from "react";
import DishDetail from "../dishDetailComponent/dishDetailComponent";

 class Menu extends Component {

    constructor(props) {
        super(props);

        this.onDishSelect = this.onDishSelect.bind(this);
        this.state = {

            selectedDish : null

        }
        
    }

    onDishSelect(dish){
        this.setState({
            selectedDish : dish
        });
    };

    

    render() {
        const menu = this.props.dishes.map((dish,index)=> {
            return (
                <div className="col-md-6 col-sm-12" key={index} >
                <div class="card mb-5" style={{width: "25rem"}}>
                    <img src={dish.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{dish.name}</h5>
                        <p class="card-text">{dish.description}</p>
                        <button class="btn btn-primary" onClick={()=> this.onDishSelect(dish.id)}>Know More</button>
                    </div>
                </div>
                </div>
            )
        });

       
        return (
            <div className = "container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.props.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>

            </div>
        )
    }
}

export default Menu;