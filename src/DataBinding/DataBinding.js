import React, { Component } from 'react'

export default class DataBinding extends Component {
    //thuộc tính
    product = {
        id: 1,
        name: 'iphone X',
        price: 17500
    }
    //Phương Thức
    renderCard = () => {
        return <div className="card text-left">
            <img className="card-img-top" src="http://picsum.photos/180/100" alt />
            <div className="card-body">
                <h4 className="card-title">{this.product.name}</h4>
                <p className="card-text">{this.product.price}</p>
            </div>
        </div>
    }
    render() {
        //Binding data
        let title = 'Hello FE49';
        let photo = 'http://picsum.photos/200/200'
        //Binding function
        let renderImg = () => {
            return <img src="http://picsum.photos/200/200" />
        }
        return (
            <div>
                <div className="text-center">
                    <h1 id="title">{title}</h1>
                    <img src={photo}></img>
                    <img src="./img/logo.jpg"></img>
                    <div>
                        {renderImg()}
                    </div>
                    <div className="col-5 m-auto">
                        {this.renderCard()}
                    </div>
                </div>

                <div className="card text-left">
                    <img className="card-img-top" src="http://picsum.photos/100/100" alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.product.name}</h4>
                        <p className="card-text">{this.product.price}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}
