import React, { useState } from 'react';
function RandomList() {
    const [items, setItems] = useState([]);

    // 与 class 组件中的 setState 方法不同，
    // useState 不会自动合并更新对象。
    // 你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。
    const addItem = () => {
      setItems([
        ...items,
        {
          id: items.length,
          value: Math.random() * 100
        }
      ]);
    };
  
    return (
      <>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </>
    );
  }
export default RandomList;