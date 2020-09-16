import React, { Component } from 'react'

export default class ChildComponent extends Component {

    constructor(props){
        super(props)
        console.log('constructors child');
        this.state = {

        }
    }

    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps child');
        
        return currentState
    }

    shouldComponentUpdate(newProps, newState){
        return true
    }

    render() {
        console.log('render child');
        return (
            <div>
                
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child');
    }
    componentDidUpdate(propsCu, stateCu){
        console.log(('componentDidUpdate child'));
    }
}
