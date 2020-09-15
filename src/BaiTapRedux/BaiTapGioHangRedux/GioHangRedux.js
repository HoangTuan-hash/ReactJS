import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} style={{ width: 100 }} alt={spGioHang.hinhAnh} />
          </td>
          <td>{spGioHang.tenSP}</td>

          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, true);
              }}
            >
              +
            </button>

            {spGioHang.soLuong}

            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{spGioHang.gia}</td>
          <td>{spGioHang.gia * spGioHang.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.gioHang);
    return (
      <table className="table">
        <thead>
          <th>Mã</th>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Số lượng</th>
          <th>Đơn giá</th>
          <th>Tổng tiền</th>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="5"></td>
            <td>Tổng tiền</td>
            <td>
              {this.props.gioHang
                .reduce((tongTien, spGH, index) => {
                  return (tongTien += spGH.soLuong * spGH.gia);
                }, 0)
                .toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

//Hàm tạo ra 1 props là funtion đưa dữ liệu lên redux store (reducer)
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG",
        maSP: maSP,
      };
      //Gửi dữ liệu lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      dispatch({
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      });
    },
  };
};

//Phương thứ biến đổi stateRedux => props của component
const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
