import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        //State là giá trị mặc định xe
        imgCar:'./img/CarBasic/products/black-car.jpg'
    }
    handleChangeColorCar = (imgColor) => {
        //Lấy img đc click gắn vào state thông qua Phương thức setState
        this.setState({
            imgCar: `./img/CarBasic/products/${imgColor}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-8">
                        <img style = {{width:'100%'}}src={this.state.imgCar}/>
                    </div>

                    <div className="col-4">
                        <div class="card text-left">
                            <div className="card-header">Exterior Color</div>

                            <div class="card-body">
                                <div onClick={()=>{
                                    this.handleChangeColorCar('black')
                                }} className="row p-2" style = {{border:'1px solid #EEE',cursor:'pointer'}}>
                                    <div className="image col-4">
                                        <img style = {{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-black.jpg" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Crystal Black</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div onClick={()=>{
                                    this.handleChangeColorCar('red')
                                }} className="row p-2" style = {{border:'1px solid #EEE',cursor:'pointer'}}>
                                    <div className="image col-4">
                                        <img style = {{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-red.jpg" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Rallye Red</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                                <div  onClick={()=>{
                                     this.handleChangeColorCar('steel')
                                }} className="row p-2" style = {{border:'1px solid #EEE',cursor:'pointer'}}>
                                    <div className="image col-4">
                                        <img style = {{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-steel.jpg" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Modern Steel</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                                <div onClick={()=>{
                                     this.handleChangeColorCar('silver')
                                }} className="row p-2" style = {{border:'1px solid #EEE',cursor:'pointer'}}>
                                    <div className="image col-4">
                                        <img style = {{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-silver.jpg" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Lunar Silver</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
