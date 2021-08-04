import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  decreaseQuantity=(id)=>{
    this.props.dispatch({
      type:"DECREASE_QUANTITY",
      payload:id
    })
  }
  increaseQuantity=(id)=>{
    this.props.dispatch({
      type:"INCREASE_QUANTITY",
      payload:id
    })
  }
  makePayment=()=>{
    this.props.dispatch({
      type:"MAKE_PAYMENT",
    })
  }
  deleteItemCart=(id)=>{
    this.props.dispatch({
      type:"DELETE_ITEM_CART",
      payload:id
    })
  }
  renderCart = () => {
    return this.props.cart.map((item) => {
      // cart = [{ product: {}, quantity: 1 }];
      const { id, name, img, price } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <img style={{ width: 120 }} src={img} alt="product" />
          </td>
          <td>{name}</td>
          <td>
            <button 
              className="btn btn-info"
              onClick={() => this.decreaseQuantity(id)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => this.increaseQuantity(id)}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{item.quantity * price}</td>
          <td>
            <button 
              className="btn btn-danger"
              onClick={()=>this.deleteItemCart(id)}
            > 
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>

                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <button
                onClick={this.makePayment}
                type="button"
                className="btn btn-primary"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    cart: state.shopping.cart
  }
}

export default connect(mapStateToProps)(Cart);
