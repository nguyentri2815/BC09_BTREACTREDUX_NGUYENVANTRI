import React, { Component } from "react";
import Cart from "./cart";
import Detail from "./detail";
import ProductList from "./productList";
import { connect } from "react-redux";

class Home extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center">Bài tập giỏ hàng</h1>
        <h4
          data-toggle="modal"
          data-target="#modelId"
          className="text-center text-danger"
        >
          Giỏ Hàng
        </h4>
        <ProductList
        />

        {this.props.selectedProduct && (
          <Detail selectedProduct={this.props.selectedProduct} />
        )}

        <Cart
          increaseQuantity={this.increaseQuantity}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.shopping.selectedProduct,
  };
};

export default connect(mapStateToProps)(Home);
