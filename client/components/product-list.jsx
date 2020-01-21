import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch('/api/disney-products.php', {
      method: 'GET',
      headers: {
        'Content-Type': 'applicaton/json',
        'Accept': 'application/json'
      } })
      .then(data => data.json())
      .then(productsData => {
        this.setState({ products: productsData });
      });
  }
  render() {
    let products = this.state.products;
    if (!products) {
      return (
        <div>
          loading...
        </div>
      );
    } else {
      return (
        <div className="container-fluid px-1 py-5 py-sm-0 py-md-0 py-md-2  mx-auto my-md-2 row">
          <div className="container-fluid row px-1 py-2 py-md-0 py-sm-5 m-auto">
            {products.map(product => (
              <ProductListItem
                key={product.id}
                details={product}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.shortDescription}
                setView={this.props.setView}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default ProductList;
