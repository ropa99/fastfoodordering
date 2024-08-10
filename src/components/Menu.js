function Menu(prod) {
  console.log(prod);
  
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {prod.prod.map((prod, index) => {
          const cardElement = (
            <div className="col">
              <div className="card h-100">
                <img
                  src={process.env.PUBLIC_URL + prod.img}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body" key={index}>
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p>
                    {prod.currency} {prod.price}
                  </p>
                  <a href="#" className="btn btn-dark">
                    Add to order
                  </a>
                </div>
              </div>
            </div>
          );
          return cardElement;
        })}
      </div>
    </div>
  );
}

export default Menu;
