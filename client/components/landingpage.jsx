import React from 'react';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="container-fluid pt-5 px-2 h-75 bg-dark">
        <div className="container-fluid w-100 my-md-0 my-5 my-md-3 py-3"></div>

        <div className="container-fluid row mx-auto my-3 py-0 ">
          <img className="img-fluid mx-auto col-12  col-lg-12 col-xl-10  p-0" src="/images-tsum-tsum/wicked-sales-landing-page-picture.jpeg" alt=""/>
        </div>

        <div className="container-fluid mx-auto p-0 pt-sm-5 row w-75">
          <button onClick={this.props.onClick} className="btn btn-info btn-block mx-auto">
              Click here to Start Shopping
          </button>
        </div>
      </div>
    );
  }
}
