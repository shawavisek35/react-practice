import React , {Component} from "react";

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    render() {
        
            
            if(this.props.selectedDish!=null){
                const comments = this.props.selectedDish.comments.map((comment,index) => {
                    return (
                        <div key={index} className="mb-5">
                            <li key={index}>
                                {comment.comment}
                            </li>
                            <p>--{comment.author} , {comment.date}</p>
                        </div>
                        
                    )
                });
                return (
                    <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div class="card mb-5" style={{width: "25rem"}}>
                            <img src={this.props.selectedDish.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">{this.props.selectedDish.name}</h4>
                                <h5>Price : ${this.props.selectedDish.price}</h5>
                                <p class="card-text">{this.props.selectedDish.description}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h4 className="mb-4 text-center">Comments</h4>
                        <ul>
                            {comments}
                        </ul>
                    </div>
                    </div>
                )
            }
            else{
                return (
                    <div></div>
                )
            }
            
        
    }
}



export default DishDetail;