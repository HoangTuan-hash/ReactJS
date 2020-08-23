import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    producList = [
        {id:1,name:'Ipone X', price:1000},
        {id:2,name:'Samsung Note 10Plus', price:3000},
        {id:3,name:'HTC m10', price:2000}
    ]

    renderProducts = () =>{
        //Cách 1:

        // let content = [];
        // for (let index = 0; index < this.producList.length; index++) {
        //     let product = this.producList[index];
        //     let cardProduct = <div key="{1}">
        //         <div className="card text-left">
        //             <img className="card-img-top" src="holder.js/100px180/" alt />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>
        //     content.push(cardProduct);
        // }
        // return content;

        //Cách 2 dùng hàng map
        let arrJSXProduct = this.producList.map((product,index)=>{
            return <div className="col-4" key={index}>
                <div className="card text-left">
                     <img className="card-img-top" src="picsum.photos/200/200" alt={product.name} />
                     <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                     </div>
                 </div>
            </div>
        })
        return arrJSXProduct;
    }
    render() {
        return (
            <div className="container">
                {this.renderProducts()}
            </div>
        )
    }
}
