import React, { useState } from "react";
import { Button } from 'antd';
import styles from './index.less';
interface DrawerBasicRightProps {
    tabModelList?: object;
}
const markDemo: React.FC<DrawerBasicRightProps> = ({
    tabModelList,
    getMoveF,
    clickId
  }) => {
    const [openit, setopenit] = useState(false)
    const open = () => {
        setopenit(true)
    }
    const colse = () =>{
        setopenit(false)
    }
    const [isShow, setIshow] = useState(0)  
    const [listInfo] = useState([
        {
            id: '1',
            text: '瓦格纳',
        },
        {
            id: '2',
            text: '瓦格纳a',
        },
        {
            id: '3',
            text: '瓦格纳b',
        },
        {
            id: '4',
            text: '瓦格纳c',
        },
    ])  
    const listStatus = (item, index) => {
        console.log('122', index)
        setIshow(index)
    }
    return (
        <>
            <div className={styles.container}>
            <div>
                  <ul className='list-type'>
                   {listInfo.map((post, index) => {
                   console.log('444', index === isShow)
                   return (

                     <li key={post.id} onClick={(e) =>listStatus(post, index)} style={{color: isShow === index ? 'red' : 'yellow'}}>
                      {post.text}{isShow}
                    </li>
                   )
                    })}
                 </ul>
                </div>
                <Button onClick={open}>openit</Button>
                {
                    openit && (
                        <div className={styles.alteradwarp}>
                        <div className={styles.alterad}>
                          <img className={styles.firimg} src="https://file2.speedtest.cn/images/ff74fda988261b8265747d346bc07ae5.png" alt=""/>
                          <img onClick={colse} className={styles.adimg} src="https://www.speedtest.cn/images/alter-close-other.png?6e453733bb19b52bc2128d7b955bab18" alt=""/>
                        </div>
                      </div>
                    )
                }
            </div>
        </>
    )
  }
// function markDemo () 
// {
//     const [openit, setopenit] = useState(false)
//     const open = () => {
//         setopenit(true)
//     }
//     const colse = () =>{
//         setopenit(false)
//     }
//     const [isShow, setIshow] = useState(0)  
//     const [listInfo] = useState([
//         {
//             id: '1',
//             text: '瓦格纳',
//         },
//         {
//             id: '2',
//             text: '瓦格纳a',
//         },
//         {
//             id: '3',
//             text: '瓦格纳b',
//         },
//         {
//             id: '4',
//             text: '瓦格纳c',
//         },
//     ])  
//     const listStatus = (item, index) => {
//         console.log('122', index)
//         setIshow(index)
//     }
//     return (
//         <>
//             <div className={styles.container}>
//             <div>
//                   <ul className='list-type'>
//                    {listInfo.map((post, index) => {
//                    console.log('444', index === isShow)
//                    return (

//                      <li key={post.id} onClick={(e) =>listStatus(post, index)} style={{color: isShow === index ? 'red' : 'yellow'}}>
//                       {post.text}{isShow}
//                     </li>
//                    )
//                     })}
//                  </ul>
//                 </div>
//                 <Button onClick={open}>openit</Button>
//                 {
//                     openit && (
//                         <div className={styles.alteradwarp}>
//                         <div className={styles.alterad}>
//                           <img className={styles.firimg} src="https://file2.speedtest.cn/images/ff74fda988261b8265747d346bc07ae5.png" alt=""/>
//                           <img onClick={colse} className={styles.adimg} src="https://www.speedtest.cn/images/alter-close-other.png?6e453733bb19b52bc2128d7b955bab18" alt=""/>
//                         </div>
//                       </div>
//                     )
//                 }
//             </div>
//         </>
//     )
// }

export default markDemo;
