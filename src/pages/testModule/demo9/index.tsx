// useRef的作用：
// 获取DOM元素的节点
// 获取子组件的实例
// 渲染周期之间共享数据的存储（state不能存储跨渲染周期的数据，因为state的保存会触发组件重渲染）

// 一获取DOM元素的节点
// import React, { useEffect, useRef } from 'react';
// function Example9() {
//   const h1Ref = useRef();
//   useEffect(() => {
//     console.log('useRef')
//     console.log(h1Ref.current)
//   }, [])
//   return <h1 ref={h1Ref}>Hello World!</h1>
// }
// export default Example9;

// 二获取DOM元素的节点
// import React, { Component, useEffect, useRef } from 'react';
// function Example9() {
//   const childRef = useRef();
//   useEffect(() => {
//     console.log('useRef')
//     console.log(childRef.current)
//     childRef.current.handleLog();
//   }, [])
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <Child ref={childRef} count="1"/>
//     </div>
//   )
// }
// // 因为函数组件没有实例，如果想用ref获取子组件的实例，子组件组要写成类组件
// class Child extends Component {
//   handleLog = () => {
//     console.log('Child Component');
//   }
//   render() {
//     const { count } = this.props;
//     return <h2>count: { count }</h2>
//   }
// }
// export default Example9;


// 三渲染周期之间共享数据的存储
// 类组件中，state不能存储跨渲染周期的组件，因为state的参数每一次保存都会触发组件的重渲染。
// 场景：声明一个参数为count = 0 ，组件初始化时count每秒钟加1，直到count > 5时停止增加，清除定时器
// 把定时器设置成全局变量使用useRef挂载到current上
import React, { useState, useEffect, useRef } from "react";
function App() {
  const [count, setCount] = useState(0);
  // 把定时器设置成全局变量使用useRef挂载到current上
  const timer = useRef();
  // 首次加载useEffect方法执行一次设置定时器
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);
  // count每次更新都会执行这个副作用，当count > 5时，清除定时器
  useEffect(() => {
    if (count > 4) {
      clearInterval(timer.current);
    }
  });
  return <h1>count: {count}</h1>;
}
export default App;