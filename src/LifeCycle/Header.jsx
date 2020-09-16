import React, { PureComponent,Component } from 'react'

export default class Header extends PureComponent {
    render() {
        console.log('header render');
        return (
            <div>
                <h1>Header render Number: {this.props.sinhVien.name}</h1>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled link</a>
                    </li>
                </ul>

            </div>
        )
    }

    componentWillUnmount(){
        //chạy trước khi component mất khỏi giao diện
        console.log('componentWillUnmount header');
    }
}
