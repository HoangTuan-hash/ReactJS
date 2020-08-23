import React, { Component } from 'react'

export default class RenderWithState extends Component {
    //Quản ;ý những giá trị thay đổi trên giao diện
    state = {
        login:false
    }
     //Thuoc tinh
     userName = "ABC";
     renderLogin = () =>{
         if(this.state.login){
             return <p>Hello {this.userName}</p>;
         }
         else {
             return <div><button className="btn btn-success" onClick={()=>{
                 this.handlelogin();
             }}>
                 Dang Nhap
                 </button></div>;
         }
     }
     handlelogin = () =>{
        // this.state.login = true;//Không dược gán state trực tiếp
        //Phuong thức setState => 
        //Làm thay đổi giá trị state
        //gọi lại hàm render chạy lại
        // setState là phương thức bất đồng bộ
        // let newState = {login:true};
        this.setState({login:true},()=>{
            console.log('state khi đã set',this.state.login);
        })
        console.log('state khi chưa set',this.state.login);
     }
    render() {
        return (
            <div>
                {/* //cach 1: dung khi noi dung it, neu noi dung dai kho quan ly code
                {this.login ? <p>Hello {this.userName}</p> : <div><button className="btn btn-success">Dang Nhap</button></div>} */}

                {/* Các 2 dùng phương thức để render */}
                {this.renderLogin()}
            </div>
        )
    }
}
