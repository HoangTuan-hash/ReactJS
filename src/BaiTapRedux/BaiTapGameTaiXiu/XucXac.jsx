import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => {
        const { mangXucXac } = this.props;
        return mangXucXac.map((xucXac, index) => {
            return <img key={index} className="ml-5" style={{ width: 50 }} src={xucXac.hinhAnh} atl={xucXac.hinhAnh}></img>

        })
    }
    render() {
        const {banChon} = this.props;
        return (
            <div className="containe-fluid">
                <div className="row mt-5 ">
                    <div className="col-3">
                        <button style={{ fontSize: 30, border: banChon ? '10px solid red':'none'  }} className="btn display-4 text-white bg-primary p-5 ml-5" onClick={() => {
                            this.props.datCuocTaiXiu(true)
                        }}>Tài</button>
                    </div>
                    <div className="col-6">
                        <div style={{ margin: "auto", width: "max-content" }}>
                            {this.renderXucXac()}

                        </div>
                    </div>
                    <div className="col-3">
                        <button style={{ fontSize: 30, margin: "auto", display: "block", border: !banChon ? '5px solid yellow':'none' }} className="btn display-4 text-white bg-primary p-5" onClick={() => {
                            this.props.datCuocTaiXiu(false)
                        }}>Xỉu</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac,
        banChon : state.stateGameXucXac.banChon
    }
}
//tạo dữ liệu đưa lên trên redux store
const mapDispatchToProps = (dispatch) => {
    return {
        datCuocTaiXiu: (ketQuaChon) => {
            dispatch({
                type: 'DAT_CUOC_TAI_XIU',
                ketQuaChon
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XucXac)
