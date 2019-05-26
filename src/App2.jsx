import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(() => {
        return document.documentElement.clientWidth
    })

    const resizeWindow = () => {
        setWidth(document.documentElement.clientWidth)
    }
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `${count} times`;
    },[count]);

    // Similar to componentDidMount and componentDidMount:
    useEffect(() => {
       console.log("i am  active here!")
      },[]);

      useEffect(() => {
        console.log("width print here!")
        window.addEventListener('resize', resizeWindow, 'false')
        return function remove() {
            console.log('remove event occured')
            window.removeEventListener('resize', resizeWindow, 'false')
        }
       },[width]);
    const Clicks = () => {
        console.log('this is test click')
    }
    useEffect(() => {
        console.log('bind click')
        document.getElementById('test').addEventListener('click', Clicks, 'false')
        return () => {
            console.log('remove click')
            document.getElementById('test').removeEventListener('click', Clicks, 'false')
        }
       },[]);

    return (
      <div>
        <p>You clicked {count} times</p>
        <div>clientWidth:{width}</div>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        {
            count%2 === 0 ? <span id="test">test1</span> : <p id="test">test2</p>
        }
      </div>
    );
  }

  export default Example;