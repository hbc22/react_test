import React, {useState, useCallback} from "react";
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
      }
    }, []);
  
    return (
      <>
        <h1 ref={measuredRef}>Hello, world</h1>
        <h2>The above header is {Math.round(height)}px tall</h2>
        <App/>
      </>
    );
  }

  export default MeasureExample;