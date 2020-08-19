import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = ()=>{
        alert('Hello');
    }
    showInfo = (name)=>{
        alert(`name ${name}`)
    }
    render() {

        return (
            <div className="container">
                {/* Cách 1: Truyền callback function (hoặc là thông qua thuộc tính) */}
                <button onClick={this.handleClick}>Click me</button>
                <br/>

                <button onClick={this.showInfo.bind(this,'Nguyễn Văn B')}>Show Me</button>
                <br/>

                {/* Cách 2: Dùng arrow function */}
                <button onClick={()=>{
                    alert('hahaha');
                    //Click vào gọi nhiều hàm thực hiện..
                    this.handleClick();
                }}>Show mesage</button>
                <br/>

                <button onClick={()=>{
                    this.showInfo('Nguyên văn a');
                }}>Show Info</button>
            </div>
        )
    }
}
