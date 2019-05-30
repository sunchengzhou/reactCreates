'use strict'
// context  && context hook   
import React,{Component, createContext, useContext} from "react";
const CountContext = createContext();

// 写法一  Consumer
// class Customer extends Component {
//     render() {
//         return (
//            <CountContext.Consumer>
//                {
//                    count => <p>{count}</p>
//                }
//            </CountContext.Consumer>
//         )
//     }
// }

// 写法二  contextType
// class Customer extends Component {
//     static contextType = CountContext;
//     render() {
//         const count = this.context;
//         return (
//            <div>{count}</div>
//         )
//     }
// }


// 写法三  context hook
function Customer() {
    const count = useContext(CountContext);
    return (<div>{count}</div>)
}

class Middle extends Component{
    render(){
     return   (<div className="middle">
           中间组件，用于插入底层组件
           <Customer />
        </div>)
    }
}
class App extends Component{
    constructor() {
        super();
        this.state = {
            count: 50
        }
        this.countAdd = this.countAdd.bind(this)
    }
    countAdd() {
        console.log('running')
        const {count} = this.state;
        this.setState({
            count: count + 1
        })
    }
    render(){
     const { count } = this.state;
     return   <div className="app">
           <CountContext.Provider value={count}>
                <Middle />
                <button onClick={this.countAdd}>
                    点我增加
                </button>
            </CountContext.Provider>
        </div>
    }
}
export default App;