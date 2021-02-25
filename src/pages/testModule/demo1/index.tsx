import { T } from "antd/lib/upload/utils";
import React, {useState, useCallback, useRef} from "react";

import styles from './index.less'
const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];
const formatDateTime = (date) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(date);

const formatMonth = (date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(date);

  const month = formatMonth(new Date());
  const day = formatDateTime(new Date());
console.log('1212month', month)
console.log('2323day', day)
function MeasureExample() {
    const [height, setHeight] = useState(0);

   //获取一个随机的布尔值
    // const [randomBoolean, setRandomBoolean] = useState(false);
    const randomBoolean = () => Math.random() >= 0.5;
    console.log(randomBoolean());
    console.log(randomBoolean);
    // setRandomBoolean(randomBoolean1)



    //判断某一个日期是否是工作日
    const isWeekday = (date) => date.getDay() % 6 !== 0;
    console.log('dddd', isWeekday(new Date(2021, 0, 11)));
    // Result: true (Monday)
    console.log('ddaa', isWeekday(new Date(2021, 0, 28)));
    // Result: false (Sunday)


    const reverse = str => str.split('').reverse().join('');
    reverse('hello world');
    console.log(reverse('hello world'))
    // Result: 'dlrow olleh'，，，，,


    const isBrowserTabInView = () => document.hidden;
    isBrowserTabInView();
    // Result: returns true or false depending on if tab is in view / focus



    // 获取年日期当中的时间
    const timeFromDate = date => date.toTimeString().slice(0, 8);
    console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
    // Result: "17:30:00"
    console.log(timeFromDate(new Date()));
    // Result: will log the current time



    //保留到某一位小数点
    const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
    // Examples
    toFixed(25.198726354, 1);       // 25.1
    toFixed(25.198726354, 2);       // 25.19
    toFixed(25.198726354, 3);       // 25.198
    toFixed(25.198726354, 4);       // 25.1987
    toFixed(25.198726354, 5);       // 25.19872
    toFixed(25.198726354, 6);       // 25.198726
    

    [1,2,3,4].map((item, index) => {
      console.log('index', item)
      getComputedStyle[index] = item;
      caches[index] = item;
    })

    const t = useRef(null)
    console.log('111', t) //可以很快获取到数据的

    // 就显示class里面的,修改数据之后的调用callback函数一样的功能
    // this.setstate(
    //   {},
    //   ()=>{}
    // )

    // const elementIsInFocus = (el) => (el === document.activeElement);
    // elementIsInFocus(anyElement)
    // Result: will return true if in focus, false if not in focus  50 + 2 60 + 3 陈若沐   陈悦怿， 陈思齐，陈显荣， 陈承宇， 陈翰飞。
    //陈家沐 陈沐凡，陈沐阳 陈怿沐  陈沐君  陈沐希


    // 一下的一组li代码可以写成组件， app和数据list一块，listItem一块https://www.robinwieruch.de/react-folder-structure
    const App = () => <List list={list} />;
    const List = ({ list }) => (
      <ul>
        {list.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
    const ListItem = ({ item }) => (
      <li>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    );
    const measuredRef = useCallback(node => {
      console.log('1111', node)
      if (node !== null) {
        setHeight(node.getBoundingClientRect().height);
        t.current = node.getBoundingClientRect().top
      }
    }, []);
  
    return (
      <>
        <h1 ref={measuredRef}>Hello, world</h1>
        <h2>The above header is {Math.round(height)}px tall</h2>
        <div className={styles.mark}></div>

        <div className={styles.toobll}>
          秋风的技能王者风范
        </div>
        <App/>
        <div style={{marginTop: 100}}>
          <div>1111获取一个随机的布尔值
          </div>
        </div>
      </>
    );
  }

  export default MeasureExample;