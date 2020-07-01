import React from "react";
import styles from './index.less';

function styleList () {
    return (
        <div className={styles.contBox}>
         <div>
            <ul className={styles.justifyext}>
                <li>账号</li>
                <li>密码</li>
                <li>电子邮件</li>
                <li>通讯地址</li>
            </ul>
          </div>
        </div>
    );
}

export default styleList;