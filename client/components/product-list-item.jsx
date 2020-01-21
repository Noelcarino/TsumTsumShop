import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div key={this.props.id} className="container-fluid col-lg-3 col-md-4 col-sm-6 col-12 py-1 p-md-2 mx-auto my-2">
        <div className="container-fluid shadow m-auto p-3 py-4 row rounded">
          <div className="container-fluid mb-3">
            <img className="img-fluid col" src={this.props.image} alt=""/>
          </div>
          <div className="container-fluid mx-auto p-0">
            <button className="btn btn-danger btn-block mx-auto px-0 py-1" onClick={() => this.props.setView('details', this.props.id)}>
              View {this.props.name}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
