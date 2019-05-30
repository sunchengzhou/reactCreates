import React,{ useState, useEffect } from "react";
import './app3.css'

//自定义的hook 
// 针对某个参数变化，参与周期事件
function useCount(defaultCount) {
    const [count, setCount] = useState(defaultCount)
    useEffect(() => {
        console.log('effect run')
        return () => {
            console.log('effect after')
        }
    }, [count])
    return [count, setCount]
}

// 直接返回结果
function bbb(defaults) {
    return (<div>test:{defaults}</div>)
}

function App(){
    const [count, setCount] = useCount(0)
    const result = bbb('aaa')

     return   (<div className="app" onClick={()=>{setCount(count + 1)}}>
               {count}
               {result}
        </div>)

}
export default App;