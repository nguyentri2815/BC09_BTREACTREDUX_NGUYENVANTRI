import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  setSelectedProduct=(item)=>{
    this.props.dispatch({
      type: "SET_SELECT_PRODUCT",
      payload: {
        item
      },
    });
  }
  addToCart=(item)=>{
    this.props.dispatch({
      type:"ADD_TO_CART",
      payload: {...item},
    })
  }
  render() {
    const { name, img } = this.props.prod;
    return (
      <div className="card">
        <img style={{ height: 250, width: "100%" }} src={img} alt="product" />
        <div className="card-body">
          <h4>{name}</h4>
          <button
            onClick={() => this.setSelectedProduct(this.props.prod)}
            className="btn btn-info"
          >
            Chi tiết
          </button>
          <button
            onClick={() => this.addToCart(this.props.prod)}
            className="btn btn-danger"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(ProductItem);
