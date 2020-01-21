import React from 'react';
import $ from 'jquery';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: '',
      customerName: '',
      customerCreditCard: '',
      customerShippingAddress: '',
      modalDisplayed: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
  }
  componentDidMount() {
    $('#button').click();
    if (!this.state.totalPrice) {
      this.setState({ totalPrice: this.props.totalPrice });
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleCardChange(event) {
    let number = event.target.value;
    if (number.length > 16) return;
    this.setState({
      customerCreditCard: number
    });
  }
  handleSubmit(event) {
    if (!this.state.customerName) {
      alert('please enter your name');
      event.preventDefault();
    } else if (!this.state.customerCreditCard) {
      alert('please enter your credit card information');
      event.preventDefault();
    } else if (this.state.customerCreditCard.length !== 16) {
      alert('Incorrect Credit Card Information - Please enter 16 characters');
      event.preventDefault();
    } else if (!this.state.customerShippingAddress) {
      alert('please enter your shipping address');
      event.preventDefault();
    } else {

      this.props.placeOrder(this.state);
      event.preventDefault();
    }

  }
  render() {
    let modalElement;

    if (this.state.modalDisplayed === false) {
      modalElement =
        <div>
          {/* MODAL CONTENT */}
          <div className="container">
            {/* TRIGGER */}
            {<button style={{ display: 'none' }} id="button" type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>}
            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title text-danger">WARNING</h3>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body text-danger">
                    <h5>DO NOT ENTER CREDIT CARD INFORMATION!</h5>
                    <h5>THIS IS A DEMO WEBSITE!</h5>
                  </div>
                  <div className="modal-footer">
                    <button onClick={() => this.setState({ modalDisplayed: true })} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
    }
    return (
      <div className="container-fluid m-auto  p-3 row">
        {modalElement}
        <div className="container-fluid mx-auto mt-5 mt-md-3  text-danger text-center">
          <h5>DO NOT ENTER REAL CREDIT CARD INFORMATION!!</h5>
        </div>
        <div className="container-fluid shadow-lg p-3 my-3 mx-auto bg-light text-muted col-md-10 col-lg-8 || border ">
          <div className="container-fluid text-center ">
            <h3>Billing Information</h3>
          </div>
          <form className="container-fluid row p-3 mx-auto" onSubmit={this.handleSubmit}>
            <div className="container-fluid p-0 mx-auto mb-3 ml-md-0 col-sm-12 col-md-8">
              <label>Name:</label>
              <input className="form-control"
                type="text"
                placeholder="Full Name"
                name="customerName"
                value={this.state.customerName}
                onChange={this.handleChange}/>
            </div>
            <div className="container-fluid p-0 mx-auto mb-3 ml-md-0 col-sm-12 col-md-8">
              <label >Credit Card:</label>
              <input className="form-control"
                type="number"
                pattern="[0-9-]*\d"
                name="customerCreditCard"
                value={this.state.customerCreditCard}
                onChange={text => this.handleCardChange(text)}/>
            </div>
            <div className="container-fluid p-0 mx-auto mb-3 ml-md-0 col-12">
              <label>Shipping Address:</label>
              <textarea className="form-control"
                name="customerShippingAddress"
                placeholder="Home Address"
                value={this.state.customerShippingAddress}
                cols="50"
                rows="2"
                onChange={this.handleChange}></textarea>
            </div>
            <div className="container-fluid p-0 mx-auto mb-3 ml-md-0 col-12 row ">
              <input className="btn btn-danger btn-block col-12 col-md-4 mx-auto" type="submit" value={'Place Order of $' + this.props.totalPrice}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
