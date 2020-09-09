import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        const {banChon,tiSoThang,soBanChoi} = this.props;
        
        return (
            <div>
                <div className="display-4 text-center">
                    Tổng điểm: <span className="text-danger">
                       {this.props.mangXucXac.reduce((tongDiem,xucXac,index)=>{
                           return tongDiem += xucXac.ma;
                       },0)}
                    </span>
                </div>
                <div className="display-4 text-center">
                    Bạn chọn: <span className="text-danger">
                        {banChon ? 'Tài' : 'Xỉu'}
                    </span>
                </div>
                <div className="display-4 text-center">
                        Số bàn thắng: <span className="text-success">{tiSoThang}</span>
                </div>
                <div className="display-4 text-center">
                    Tổng số bàn chơi: <span className="text-warning">{soBanChoi}</span>
                </div>
                <div className=" text-center mt-5">
                    <button className="btn btn-success" onClick={()=>{
                        this.props.playgame()
                    }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        banChon : state.stateGameXucXac.banChon,
        tiSoThang : state.stateGameXucXac.soBanThang,
        soBanChoi : state.stateGameXucXac.tongSoBanChoi,
        mangXucXac : state.stateGameXucXac.mangXucXac
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        playgame: () =>{
            dispatch({
                type : 'PLAY_GAME'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(KetQuaTroChoi)
