import React , {useEffect, useState, useRef } from 'react';
interface IProps {
    deviceId ?: number
    type ?: number
  }
const DateChoose= (props:IProps)=>{
    const [width, setWidth] = useState(window.innerWidth);
    const [hight, setHight] = useState(window.innerHeight);
    const firstLoad = useRef(true);
  useEffect(() => {
    const handler = (event: any) => {
      setWidth(event.target.innerWidth);
      setHight(event.target.innerHeight);
    };
    // 监听浏览器窗口变化
    window.addEventListener('resize', handler);
    // 组件unmount时要解除监听
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

//   场景1：我依赖了某些值，但是我不要在初始化就执行回调方法，我要让依赖改变再去执行回调方法
useEffect(() => {
    console.log('1111', firstLoad)
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    // do something...
    console.log('222')
  }, [width]);


//   场景2：我有一个getData的异步请求方法，我要让其在初始化调用且点击某个按钮也可以调用  https://juejin.cn/post/6895966927500345351
// ...
// const getData = useCallback(async () => {
//     const data = await xxx({ id: 1 });
//     setDetail(data);
//   }, []);

//   useEffect(() => {
//     getData();
//   }, [getData]);

//   const handleClick = () => {
//     getData();
//   };
// ...


  return (
      <div>
          <div>
              {width}<br/>
              {hight}
          </div>
      </div>
  )
}

export default DateChoose;