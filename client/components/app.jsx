import React from 'react';
import Header from './header';
import LandingPage from './landingpage';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';
import CheckoutForm from './checkoutform';
import OrderReceipt from './orderReceipt';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      customerInfo: {}
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.myDivToFocus = React.createRef();
    this.secondDiv = React.createRef();
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick() {
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }
  componentDidMount() {
    this.getCartItems();
  }
  placeOrder(customerInfo) {
    fetch('/api/orders.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(customerInfo) })
      .then(() => {
        this.setState({
          view: {
            name: 'orderreceipt',
            params: customerInfo
          },
          cart: [],
          customerInfo: customerInfo
        });
      });
  }
  addToCart(product) {
    fetch('/api/cart.php',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product) })
      .then(res => res.json())
      .then(() => {
        this.getCartItems();
      });
  }
  removeFromCart(productToRemove) {
    fetch('/api/cart.php',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productToRemove) })
      .then(() => {
        this.getCartItems();
      });
  }
  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(cartItems => {
        this.setState({ cart: cartItems });
      });
  }
  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }
  render() {
    const { name } = this.state.view;
    let element;
    let landingPage;
    switch (name) {
      case 'catalog':
        element = <ProductList
          setView={this.setView}
        />;
        break;
      case 'details':
        element = <ProductDetails
          setView={this.setView}
          addToCart={this.addToCart}
          cart={this.state.cart}
          currentProductId={this.state.view.params}
        />;
        break;
      case 'cart':
        element = <CartSummary
          setView={this.setView}
          cartArray={this.state.cart}
          removeFromCart={this.removeFromCart}
        />;
        break;
      case 'checkout':
        element = <CheckoutForm
          setView={this.setView}
          totalPrice={this.state.view.params}
          placeOrder={this.placeOrder}
        />;
        break;
      case 'orderreceipt':
        element = <OrderReceipt
          setView={this.setView}
          customerInfo={this.state.customerInfo}
        />;
        break;
    }
    if (this.state.view.name === 'catalog') {
      landingPage = <LandingPage onClick={this.handleOnClick}/>;
    }
    return (
      <div className="container-fluid p-0 m-0 row">
        <div >
          <Header setView={this.setView} cartItemCount={this.state.cart} />
        </div>

        <div ref={this.secondDiv} className="container-fluid p-0 m-0">
          {landingPage}
        </div>

        <div ref={this.myDivToFocus} className="container-fluid pt-5 mx-auto row">
          {element}
        </div>
        <div className="container-fluid text-center mb-4">
            © Noel Angelo Carino
        </div>
      </div>
    );
  }
}
