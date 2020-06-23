import React, {useState,  useMemo, useEffect, useRef} from "react";
function WithMemo() {
      const [count, setCount] = useState(1);    
      const [val, setValue] = useState('');    
      // 缓存了昂贵的计算    
      const expensive = useMemo(() => {        
          console.log('compute');        
          let sum = 0;        
          for (let i = 0; i < count *3; i++) {            
              sum += i;        
            }        
            return sum;    
        }, [count]);   
        console.log('111', expensive)
        // useEffect(() => {
        //     console.log('use effect...',count)
        //     const timer = setInterval(() => setCount(count +1), 1000)
        //     return ()=> clearInterval(timer)
        // })
        const countRef = useRef(0)
        // useEffect(() => {
        //     console.log('use effect...',count)
        //     const timer = setInterval(() => {
        //         console.log('timer...count:', countRef.current)
        //         setCount(++countRef.current)
        //     }, 1000)
        //     return ()=> clearInterval(timer)
        // },[])

        const btnRef = useRef(null)
        useEffect(() => {
            console.log('use effect...')
            const onClick = ()=>{
                setCount(count+1)
            }
            btnRef.current.addEventListener('click',onClick, false)
            return ()=> btnRef.current.removeEventListener('click',onClick, false)
        },[count])
  
         return ( 
            <>
            <div>        
              <h4>{count}-{expensive}</h4>        
              {val}        
              <div>            
                <button onClick={() => setCount(count + 1)}>+c1</button>  
                <input value={val} onChange={event => setValue(event.target.value)}/>   
                <button ref={btnRef}>click me </button>    
              </div>   
            </div>
           </>
        );
    }
export default WithMemo;

// 的时候，就会先根据[name]里面的name值判断一下，因为useMemo 作为一个有着暂存能力的，暂存了上一次的name结果。
// 结果一对比上一次的name，我们发现name值居然没有改变！那么这次data就不重新赋值成新的对象了！
// 没有新的对象，就没有新的内存地址，那么Child就不会重新render


// 1.useMemo 与 useCallback 类似，都是有着缓存的作用。本质的区别可能就是：

// useMemo 是缓存值的

// useCallback 是缓存函数的

// useMemo 解决了值的缓存的问题，那么函数呢？
// const onChange=(e)=>{
//     setText(e.target.value)
// }
// const onChange = useCallback((e)=>{
//     setText(e.target.value)
// },[])


// const initData = async () => {
//     // 发起请求并执行初始化操作
//   }
//   // 执行初始化操作，需要注意的是，如果你只是想在渲染的时候初始化一次数据，那么第二个参数必须传空数组。
//   useEffect(() => {
//     initData();
//   }, []);


// const pollingQueryingStatus = async () => {
// }
// // 取消轮询
// const stopPollingQueryStatus = async() => {
// }

// useEffect(() => {
//   pollingQueryingStatus();

//   return stopPollingQueryStatus;
// }, []);

// 在setState的时候，我们可以只修改state中的局部变量，而不需要将整个修改后的state传进去，举个例子
// 而使用useState后，我们修改state必须将整个修改后的state传入去，因为它会直接覆盖之前的state，而不是合并之前state对象。
// const handleClick = () => {
//     const { count } = data;
//     // 这里必须将完整的state对象传进去
//     setData({
//       ...data,
//       count: count + 1,
//     })
//   };


// 在使用class Component进行开发的时候，我们可以使用shouldComponentUpdate来减少不必要的渲染，那么在使用react hooks后，我们如何实现这样的功能呢？
// 解决方案：React.memo和useMemo
// 对于这种情况，react当然也给出了官方的解决方案，就是使用React.memo和useMemo。

// export const Count = React.memo((props) => {
//     const [data, setData] = useState({
//       count: 0,
//       name: 'cjg',
//       age: 18,
//     });

// function Parent({ a, b }) {
//     // Only re-rendered if `a` changes:
//     const child1 = useMemo(() => <Child1 a={a} />, [a]);
//     // Only re-rendered if `b` changes:
//     const child2 = useMemo(() => <Child2 b={b} />, [b]);
//     return (
//       <>
//         {child1}
//         {child2}
//       </>
//     )
//   }

// 效果：通过调用 useComponentSize 拿到某个组件 ref 实例的宽高，并且在宽高变化时，rerender 并拿到最新的宽高。
// const ref = useRef(null);
// let componentSize = useComponentSize(ref);

// return (
//   <>
//     {componentSize.width}
//     <textArea ref={ref} />
//   </>
// );