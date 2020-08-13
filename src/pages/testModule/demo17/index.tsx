import React, { useState } from "react";
import { Button } from 'antd';
import styles from './index.less';

function markDemo () {
    const [openit, setopenit] = useState(false)
    const open = () => {
        setopenit(true)
    }
    const colse = () =>{
        setopenit(false)
    }
    return (
        <>
            <div className={styles.container}>
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

export default markDemo;
