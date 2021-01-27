import React, { useRef, useState } from "react";
import styles from './index.less';
// import {Image} from 'antd';
let xxx2 = undefined;// ....@2
function styleList () {
    let xxx = undefined;    // ....@1
    const xxx3 = useRef(0)  // ....@3
    const [info] = useState({});
    const [age, setAge] = useState(0);
    const onClick = async () => {
        setAge(age + 1)
        xxx = 10;
        xxx2 = 20;
        xxx3.current = 30;
        info.xxx4 = 40;
    }

    console.log(xxx);
    console.log(xxx2);
    console.log(xxx3.current);
    console.log(info.xxx4);
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
          <div style={{marginTop: 50}}>
            <div className={styles.crContent }>
                <div style={{marginTop: 20}}>
                    <div className={styles.hotUtil}>
                        热门工具
                    </div>
                    <div className={styles.tool}>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//8838beddf68a9853b53d604bccb180c2.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A10Z%2F2592000%2F%2F7b84dbe8a83e5c0a865d9fa9147810d9f1dd486b84768bcb09645c369a81a987" />
                              <p className={styles.camp}>历年真题</p>
                              <p className={styles.camp}>历年真题</p>
                            </a>
                        </div>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//98e165b0d4d38f233d246adba25b5c89.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A50Z%2F2592000%2F%2Fe848a6eb9c253f8db7e62826b1db751fb975b6856316da2314736832693c8658" />
                              <p className={styles.camp}>高考作文</p>
                            </a>
                        </div>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//8838beddf68a9853b53d604bccb180c2.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A10Z%2F2592000%2F%2F7b84dbe8a83e5c0a865d9fa9147810d9f1dd486b84768bcb09645c369a81a987" />
                              <p className={styles.camp}>历年真题</p>
                            </a>
                        </div>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//8838beddf68a9853b53d604bccb180c2.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A10Z%2F2592000%2F%2F7b84dbe8a83e5c0a865d9fa9147810d9f1dd486b84768bcb09645c369a81a987" />
                              <p className={styles.camp}>历年真题</p>
                            </a>
                        </div>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//8838beddf68a9853b53d604bccb180c2.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A10Z%2F2592000%2F%2F7b84dbe8a83e5c0a865d9fa9147810d9f1dd486b84768bcb09645c369a81a987" />
                              <p className={styles.camp}>历年真题</p>
                            </a>
                        </div>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//8838beddf68a9853b53d604bccb180c2.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A10Z%2F2592000%2F%2F7b84dbe8a83e5c0a865d9fa9147810d9f1dd486b84768bcb09645c369a81a987" />
                              <p className={styles.camp}>历年真题</p>
                            </a>
                        </div>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//8838beddf68a9853b53d604bccb180c2.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A10Z%2F2592000%2F%2F7b84dbe8a83e5c0a865d9fa9147810d9f1dd486b84768bcb09645c369a81a987" />
                              <p className={styles.camp}>历年真题</p>
                            </a>
                        </div>
                        <div className={styles.spItem}>
                            <a href="#" className={styles.link}>
                              <img className={styles.imgIcon} src="https://search-operate.cdn.bcebos.com//8838beddf68a9853b53d604bccb180c2.png?authorization=bce-auth-v1%2Fc93fe3270045455693596cebb01c566e%2F2020-06-03T08%3A40%3A10Z%2F2592000%2F%2F7b84dbe8a83e5c0a865d9fa9147810d9f1dd486b84768bcb09645c369a81a987" />
                              <p className={styles.camp}>历年真题</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div style={{marginTop: 100}}>
          <div>{age}</div>
            <button onClick={onClick}>
                +
            </button>
          </div>
          <div style={{marginTop: 100}}>
            <h3 className={styles.QxT4hD}>
              <div className={styles._10KzV0}>
                <span>全部评论</span>
                <span className={styles._2R7vBo}>4</span>
                <span className={styles._1DVmvZ}>只看知道</span>
              </div>
              <div className={styles._2zSaYx}>
                <div className={styles._1ekjko}>按时间倒序</div>
                <div className={styles._1ekjko} style={{color: '#2d2d2d'}}>按时间正序</div>
              </div>
            </h3>

            <div className={styles._2gPNSa}>
              <div className={styles._2IUqvs}>
                <a className={styles._1OhGeD}>
                  <img className={styles._1_jhXc} src="https://upload.jianshu.io/users/upload_avatars/18576967/4518776a-54ef-46bb-9235-d708628fcfae?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt=""/>
                </a>
                <div className={styles._1K9gkf}>
                  <div className={styles._23G05g}>
                    <a className={styles._1OhGeD}>毛毛细雨_d1d1</a>
                  </div>
                  <div className={styles._1xqkrI}>
                    <span>2楼 </span>
                    <time>07.02 17:09</time>
                  </div>
                  <div className={styles._2bDGm4}>博主,能说的详细点么,jsObg是从哪里来的,我打印出来的window对象里面内有webkit属性,能解答一下呢</div>
                  <div className={styles._2ti5br}>
                    <div className={styles._3MyyYc}>
                      <span className={styles._1Jvkh4}>
                      123
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    );
}

export default styleList;