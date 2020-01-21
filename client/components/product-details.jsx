import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    fetch(`/api/disney-products.php?id=${this.props.currentProductId}`)
      .then(data => data.json())
      .then(details => {
        this.setState({ product: details[0] });
      });
  }
  render() {
    let product = this.state.product;
    if (!product) {
      return null;
    } else {
      return (
        <div className="container-fluid row px-2 py-5 m-auto">
          <div className="container-fluid row p-3 m-auto">
            <div className="container-fluid col-md-4 col-12 p-2 mx-auto mb-3">
              <div className="container-fluid p-1 mx-auto text-danger">
                  ${(product.price / 100).toFixed(2)}
              </div>
              <div className="container-fluid p-1 mx-auto mb-3 border-bottom">
                <h3>{product.name}</h3>
              </div>
              <div className="container-fluid p-1 mb-3  mx-auto ">
                <h6 className="font-weight-light">{product.shortDescription}</h6>
              </div>
              <div className="container-fluid row p-0 mb-3 m-auto">
                <button onClick={ () => this.props.addToCart(product)} className="btn btn-warning btn-block m-auto">Add To Cart</button>
              </div>
            </div>
            <div className="container-fluid col-md-7 mx-auto">
              <div className="row">
                {
                  product.images.map((image, index) => (
                    <div key={index} className="container-fluid col-md-4 p-2 m-auto rounded">
                      <img src={image} className="img-fluid shadow  col-md mx-auto rounded" alt=""/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
