import React from 'react';
class Header extends React.Component {
  render() {
    let itemTotalCount = 0;
    if (this.props.cartItemCount.length !== 0) {
      for (let productCount in this.props.cartItemCount) {
        itemTotalCount += parseInt(this.props.cartItemCount[productCount].count);
      }
    } else {
      itemTotalCount = 0;
    }
    return (
      <div style={{ position: 'fixed', top: '0', zIndex: '1' }} className="container-fluid row p-2 mx-auto bg-dark justify-content-between text-light ">
        <div className="container-fluid col-md-8  mx-auto text-center text-md-left" onClick={() => this.props.setView('catalog')}>
          <h2>Disney Tsum Tsum</h2>
        </div>
        <div className="container-fluid col-md-4 row mx-auto d-flex ">
          <div className="container-fluid col badge mx-auto d-flex align-items-center" onClick={() => this.props.setView('cart')}>
            <div className="container-fluid mx-auto">
              <h5>View Cart</h5>
            </div>
          </div>
          <div className="container-fluid col badge mx-auto align-middle d-flex align-items-center">
            <div className="container-fluid mx-auto">
              <h4>{itemTotalCount}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
