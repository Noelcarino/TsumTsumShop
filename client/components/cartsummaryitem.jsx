import React from 'react';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.productID,

      cartID: this.props.cartID
    };
  }
  render() {
    return (
      <div className="container-fluid rounded shadow row mx-auto mb-5 py-3">
        <div className="col-md-4 mx-auto">
          <img className="img-fluid m-auto " src={this.props.image} alt=""/>
        </div>
        <div className="col-md-7 mx-auto">
          <div className="container row text-danger">
            <h6>${(this.props.price / 100).toFixed(2)}</h6>
          </div>
          <div className="container-fluid text-left p-0">
            <h5>{this.props.name} - ( {this.props.count} )</h5>
          </div>
          <div className="container-fluid p-1">
            {this.props.description}
          </div>
          <div className="row mx-auto">
            <button onClick={() => this.props.removeFromCart(this.state)}className="btn btn-danger btn-block">
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
