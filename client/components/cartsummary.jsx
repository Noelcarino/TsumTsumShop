import React from 'react';
import CartSummaryItem from './cartsummaryitem';

export default class CartSummary extends React.Component {
  render() {
    let elementToRender;
    let procceedToCheckoutButton;
    let emptyCartDiv;
    let productCountTotal = 0;
    let totalPrice = this.props.cartArray.reduce((sum, product) => {
      sum += (parseInt(product.price) * product.count);
      return sum;
    }, 0);
    totalPrice = (totalPrice / 100).toFixed(2);

    emptyCartDiv = <React.Fragment>
      <h1 className="mb-5">YOUR CART IS EMPTY!</h1>
      <button className="btn btn-danger btn-block py-0" onClick={() => this.props.setView('catalog')}>
                        Back to Home Page
      </button>
    </React.Fragment>;

    if (this.props.cartArray.length === 0) {
      elementToRender =
            <div className="container-fluid mx-auto text-center px-5 m-5">
              <h1 className="mb-5">
                  Your Cart is Empty !
              </h1>
              <button className="btn btn-danger py-0" onClick={() => this.props.setView('catalog')}>
                        Back to Home Page
              </button>
            </div>;
    } else {
      elementToRender =
      <div className="container-fluid col-md-8 m-auto p-1">
        {this.props.cartArray.map((product, index) => {
          productCountTotal += parseInt(product.count);
          if ((index + 1 === this.props.cartArray.length) && productCountTotal === 0) {
            return (
              <div key={index} className="container-fluid mx-auto text-center px-5 m-5">
                {emptyCartDiv}
              </div>
            );
          }
          if (parseInt(product.count) !== 0) {
            return <CartSummaryItem
              key={product.id}
              count={product.count}
              productID={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.shortDescription}
              cartID={product.cartID}
              removeFromCart={this.props.removeFromCart}
            />;
          }
        }
        )
        }
      </div>;

    }
    if (productCountTotal !== 0) {
      procceedToCheckoutButton =
      <div className="container-fluid rounded text-light col-md-3 mx-auto p-2">
        <div className="container-fluid rounded shadow bg-info p-2 px-md-2 py-2">
          <div className="container-fluid row mx-auto justify-content-center">
            <h6>
                Total Cost: ${totalPrice}
            </h6>
          </div>
          <div className="container-fluid row my-1 mx-auto p-1">
            <button className="btn btn-primary btn-block mx-auto" onClick={() => this.props.setView('checkout', totalPrice)}>
                  Proceed to Checkout
            </button>
          </div>
          <div className="container-fluid row my-1 mx-auto p-1">
            <button className="btn btn-secondary btn-block mx-auto" onClick={() => this.props.setView('catalog')}>
                  Continue Shopping
            </button>
          </div>
        </div>
      </div>;

    }
    return (
      <div className="container-fluid row px-1 py-5 py-md-3 mx-auto mt-2">
        <div className="container-fluid row p-1 m-auto">
          {elementToRender}
          {procceedToCheckoutButton}
        </div>
      </div>
    );
  }
}
