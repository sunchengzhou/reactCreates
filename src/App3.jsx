import React,{useState, useMemo,memo } from "react";
import './app3.css'

// function Counter(props) {
//     console.log('counter component run')
//     return (<div>counter:{props.count}</div>)
// }

const Counters =memo(function Counter(props) {
    console.log('counter component run')
    return (<div onClick={props.onClick}>counter:{props.count}</div>)
})

function App(){
    const [count, setCount] = useState(0)
    const double = useMemo(() => {
        console.log(count)
        return count * 2
    },[count === 3])
    // [count]  count改变才执行    count===3 特定条件执行
    const clicks = () => {
        console.log('click')
    }

     return   (<div className="app">
               <button onClick={()=> {setCount(count + 1)}}>点击增加</button>
               <div className="text">count: {count} double: {double}</div>
               <Counters count={double}  onClick={clicks} />
        </div>)

}
export default App;