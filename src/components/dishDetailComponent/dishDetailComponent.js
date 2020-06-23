import React , {Component} from "react";

function RenderComments(comments){
    return (
        <div className="mb-5">
            <li>
                {comments.comment}
            </li>
            <p className="h6">--{comments.author} , {comments.date}</p>
        </div>
    )
}

function RenderDish(dish){
    return (
        <div className="col-md-6 col-sm-12">
            <div class="card mb-5" style={{width: "25rem"}}>
                <img src={dish.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title">{dish.name}</h4>
                    <h5>Price : ${dish.price}</h5>
                    <p class="card-text">{dish.description}</p>
                            
                </div>
            </div>
        </div>        
    );
}

const  DishDetail = (props) => {

    if(props.selectedDish!=null){
        const comments = props.selectedDish.comments.map((comment,index) => {
                return (
                    <div key={index} className="mb-5">
                        {RenderComments(comment)}
                    </div>
                        
                );
        });
        return (
            <div className="row">
                {RenderDish(props.selectedDish)}
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



export default DishDetail;