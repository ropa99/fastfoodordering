import React from "react";

function Menu(props) {
  console.log(props);

  return (
    <div className="container-fluid">
      <div className="card" width={5}>
        <img
          className="card-img-top"
          src={props.prod[0].img}
          alt="Food image"
        ></img>
        <div className="card-body">
          <h4 className="card-title">{props.prod[0].title} </h4>
          <p className="card-text">{props.prod[0].description}</p>
          <p>
            {props.prod[0].currency} {props.prod[0].price}
          </p>
          <a href="#" className="btn btn-primary">
            Add to order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
