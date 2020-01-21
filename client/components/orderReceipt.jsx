import React from 'react';

export default class OrderReceipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchasedOrdersArray: [],
      recentOrders: [],
      totalCost: 0
    };
    this.grabRecentPurchase = this.grabRecentPurchase.bind(this);
    this.grabData = this.grabData.bind(this);
    this.returnToCatalog = this.returnToCatalog.bind(this);
  }
  returnToCatalog() {
    this.setState({ totalCost: 0 });
    this.props.setView('catalog', {});
  }
  grabData() {
    fetch('/api/orders.php', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(res => {
        this.setState({ purchasedOrdersArray: res });
        this.grabRecentPurchase();
      });
  }
  grabRecentPurchase() {
    let updatedArray;
    let totalCost = 0;
    for (let i = this.state.purchasedOrdersArray.length - 1; i >= 0; i--) {
      if (this.state.recentOrders.length === 0) {
        updatedArray = this.state.recentOrders.concat(this.state.purchasedOrdersArray[i]);
        this.setState({ recentOrders: updatedArray });
      }
      if (this.state.recentOrders.length !== 0 && this.state.recentOrders[0].purchasedTimeStamp === this.state.purchasedOrdersArray[i].purchasedTimeStamp) {
        updatedArray = this.state.recentOrders.concat(this.state.purchasedOrdersArray[i]);
        this.setState({ recentOrders: updatedArray });
      }
    }

    for (let i = 0; i < this.state.recentOrders.length; i++) {
      if (i === 0 && this.state.recentOrders.length === 2) {
        totalCost += parseFloat(this.state.recentOrders[i].price) * parseFloat(this.state.recentOrders[i].count);
      }
      if (i > 0 && this.state.recentOrders.length > 2) {
        totalCost += parseFloat(this.state.recentOrders[i].price) * parseFloat(this.state.recentOrders[i].count);
      }
    }
    this.setState({ totalCost: totalCost });
  }
  componentDidMount() {
    this.grabData();
  }
  render() {
    if (this.state.recentOrders.length !== 0) {
      return (
        <div className="container-fluid row px-1 py-5 py-md-3 mx-auto mt-2">
          <div className="container-fluid col-11 col-md-8 p-1 m-auto text-center">
            <div className="container-fluid mx-auto text-center p-3 m-5 shadow-lg bg-light">
              <div className="container-fluid mb-4 px-2 text-left">
                <h4>Order Information</h4>
                <div className="container-fluid text-left px-0 mx-auto">
                  <table className="table table-sm table-md-table-lg border-0 mt-0">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>&nbsp;</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.recentOrders.map((orders, index) => {
                          if (index >= 1 && this.state.recentOrders[index].productID) {
                            return (
                              <tr key={index}>
                                <td>{orders.name}</td>
                                <td>x</td>
                                <td>{orders.count}</td>
                              </tr>
                            );
                          }
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="container-fluid px-2 text-left">
                <h4>Payment Information</h4>
                <div className="container-fluid text-left px-0 mx-auto">

                  <div className="container-fluid d-flex justify-content-between px-0 mb-3">
                    <div className="container-fluid text-left">
                      <span>Name:</span>
                    </div>
                    <div className="container-fluid text-left">
                      <span>{this.props.customerInfo.customerName}</span>
                    </div>
                  </div>

                  <div className="container-fluid d-flex justify-content-between px-0 mb-3">
                    <div className="container-fluid text-left">
                      <span>Address:</span>
                    </div>
                    <div className="container-fluid text-left">
                      <span>{this.props.customerInfo.customerShippingAddress}</span>
                    </div>
                  </div>

                  <div className="container-fluid d-flex justify-content-between px-0 mb-3">
                    <div className="container-fluid text-left">
                      Credit Card:
                    </div>
                    <div className="container-fluid text-left">
                      xxxx-xxxx-xxxx-{this.props.customerInfo.customerCreditCard.slice(-4)}
                    </div>
                  </div>

                  <div className="container-fluid d-flex justify-content-between px-0 mb-3">
                    <div className="container-fluid text-left">
                      Total Cost:
                    </div>
                    <div className="container-fluid text-left">
                      ${this.state.totalCost.toFixed(2) / 100}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <h3>THANK YOU FOR SHOPPING</h3>

            <div className="container-fluid">
              <button className="btn btn-danger btn-block mx-auto" onClick={() => this.returnToCatalog()}>
                Click here to continue shopping
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading..
        </div>
      );
    }
  }
}
