import React, { Component } from "react";
import ProductItem from "./productItem";
import { connect } from "react-redux";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.products.map((item) => {
      return (
        <div key={item.id} className="col-3">
          <ProductItem
            addToCart={this.props.addToCart}
            setSelectedProduct={this.props.products}
            prod={item}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.shopping.products,
  };
};

export default connect(mapStateToProps)(ProductList);
