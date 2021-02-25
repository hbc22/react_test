import React from 'react'
// var dragula = require('react-dragula');
import {dragula} from "react-dragula"
import styles from './index.less'
class SubCounter extends React.Component {
    constructor(props) {
        super(props);
       console.log('sonsonson', props)
    }
    componentWillReceiveProps() {
        console.log('9、子组件将要接收到新属性');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('111', newProps)
        console.log('222', newState)
        console.log('10、子组件是否需要更新');
        if (newProps.number < 5) return true;
        return false
    }

    componentWillUpdate() {
        console.log('11、子组件将要更新');
    }

    componentDidUpdate() {
        console.log('13、子组件更新完成');
    }

    componentWillUnmount() {
        console.log('14、子组件将卸载');
    }

    render() {
        console.log('12、子组件挂载中');
        return (
            <p>{this.props.number}</p>
        )
    }

}

class SubCounterA extends React.Component {
    static defaultProps = {
        //1、加载默认属性
        name: 'sls',
        age:23
    };
    constructor(props) {
        super(props);
        //2、加载默认状态
        this.state = {number: 1}
    }

    componentWillMount() {
        console.log('3、父组件挂载之前');
    }

    componentDidMount() {
        console.log('5、父组件挂载完成');
        // let container = document.getElementById('container');
        // var container = React.findDOMNode(this);
        // dragula([container]);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('11', newProps)
        console.log('22', newState)
        console.log('6、父组件是否需要更新');
        if (newState.number<15) return true;
        return false
    }

    componentWillUpdate() {
        console.log('7、父组件将要更新');
    }

    componentDidUpdate() {
        console.log('8、父组件更新完成');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    };

    render() {
        console.log('4、render(父组件挂载)');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                {this.state.number<10?<SubCounter number={this.state.number}/>:null}


                <div style={{height: 400, width: 400, margin: 50}}>
                    <div id='container'>
                    <div>Swap me around</div>
                    <div>Swap her around</div>
                    <div>Swap him around</div>
                    <div>Swap them around</div>
                    <div>Swap us around</div>
                    <div>Swap things around</div>
                    <div>Swap everything around</div>
                    </div>
                </div>


                <div style={{marginTop: 60}}>
                  <div className={styles.div1}>
                    <a className={styles.div2}>
                        <img src="https://lc-gold-cdn.xitu.io/1265c034d36735225ac5.png?imageView2/2/w/42/h/42/q/85/format/webp/interlace/1" alt=""/>
                        <div className={styles.div3}>Docker</div>
                    </a>
                    <a className={styles.div2}>
                        <img src="https://lc-gold-cdn.xitu.io/b49dc843907aa7843a77.png?imageView2/2/w/42/h/42/q/85/format/webp/interlace/1" alt=""/>
                        <div className={styles.div3}>Liux</div>
                    </a>
                  </div>


                  <div style={{marginTop: 50}}>
                      <a>
                          <div className={styles.footerAuthorBlock}>
                            <div>
                                <div className={styles.authorInfoBlock}>  
                                  <a style={{fontSize: 0}}>
                                    <img className={styles.div6} src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/5512fffff169e1820834dcc9a3bbc98e~300x300.image" alt=""/>
                                  </a>
                                  <div className={styles.authorInfoBox}>
                                    <div className={styles.profileBox}>
                                      <a className={styles.ellipsis}>
                                          <span style={{maxWidth: 128}} className={styles.name}>小姐姐味道</span>
                                          <a className={styles.rank}>
                                              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0YzNjI2MiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTggN2gydjRoLTJ6TTE3IDNoMnYyaC0yek0xNSA1aDJ2NmgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTcgNmgzdjJoLTN6TTE2LjMzMyAzLjY2N0wxNyAzdjJoLTJ6TTE3IDloMnYyaC0yeiIvPgogICAgPC9nPgo8L3N2Zz4K" alt=""/>
                                          </a>
                                      </a>
                                      <span style={{maxWidth: 400}} className={styles.ellipsis}>与你通行公众号</span>
                                    </div>
                                    <div className={styles.div12}>
                                      <a>
                                          <span className={styles.div13}>发布了 209 篇专栏</span>
                                          <span className={styles.div13}>获得点赞 11,582 ·</span>
                                          <span className={styles.div13}>获得阅读 817,284</span>
                                      </a>
                                  </div>
                                  </div>
                                  <button className={styles.btn}>
                                      <span>关注</span>
                                  </button>
                                </div>
                            </div>
                          </div>
                      </a>
                  </div>
                 {/* 为什么一件事情我总是想那么多的其他的因素啊。不就是很单独，单纯的一件事情。 */}
                  <div style={{marginTop: 50}}>
                    <div className={styles.subList}>
                      <div className={styles.item}>
                        <div className={styles.subComment}>
                          <div className={styles.subCommentRow}>
                            <div className={styles.subConentBox}>
                              <div className={styles.userBox}>
                                <a>
                                  <img src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/10470479d49bbe02420476eab5c034d3~300x300.image" alt=""/>
                                </a>
                              </div>
                              <div className={styles.userBoxRight}>
                                <div className={styles.profile}>
                                    <div className={styles.userProfile}>
                                        <a>
                                            <span style={{maxWidth: 128}} className={styles.userY}>圣诞节反馈</span>
                                            <a className={styles.rank}>
                                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzU5OURGRiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTUgM2g1djJoLTV6TTE4IDVoMnYxaC0yek0xOCA4aDJ2MWgtMnpNMTYgNmg0djJoLTR6TTE1IDloNXYyaC01eiIvPgogICAgPC9nPgo8L3N2Zz4K" alt=""/>
                                            </a>
                                            <span className={styles.authText}>作者</span>
                                        </a>
                                    </div>
                                    <div className={styles.postion}>叫我菜gou @ 微医</div>
                                </div>
                                <div className={styles.contentBox}>
                                    <span className={styles.content}>
                                    又回去看了下源码，第一次确实不一样，有俩判断if (isUndef(oldStartVnode))。一个根节点的问题，我再研究研究，感谢老哥提醒
                                    </span>
                                </div>
                                <div className={styles.allBox}></div>
                                <div className={styles.subStartBox}>
                                  <time className={styles.subLast}>2天谴</time>
                                  <div className={styles.delete}>删除</div>
                                  <div className={styles.actionBox}>
                                      <div className={styles.linkAction}>
                                      <svg data-v-35801ab3="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20"><g data-v-35801ab3="" fill="none" fill-rule="evenodd"><path data-v-35801ab3="" d="M0 0h20v20H0z"></path> <path data-v-35801ab3="" stroke="#8A93A0" stroke-linejoin="round" d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"></path></g></svg>
                                      <span style={{marginLeft:5}}>2</span>
                                      </div>
                                      <div className={styles.connetAction}>
                                      <svg data-v-35801ab3="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20"><g data-v-35801ab3="" fill="none" fill-rule="evenodd"><path data-v-35801ab3="" d="M0 0h20v20H0z"></path> <path data-v-35801ab3="" stroke="#8A93A0" stroke-linejoin="round" d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"></path></g></svg>
                                      <span style={{marginLeft:5}}>回复</span>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  {/* https://juejin.cn/post/6923060568437817351 */}
                  <div style={{marginTop: 50}}>
                    <div className={styles.listBox}>
                      <div  className={`${styles.commentForm} ${styles.commentFormAll}`}>
                        <div className={styles.avatarBox}>
                            <img className={styles.avatar} src="https://mirror-gold-cdn.xitu.io/16e35e85458fbdc9642?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt=""/>
                        </div>
                        <div className={styles.formBox}>
                            <div className={styles.authCard}>
                                <div className={styles.authCover}>
                                    <span></span>
                                    您需要
                                    <a style={{color: '#007fff'}}>绑定手机好</a>
                                    后才可在掘金社区内发布内容。
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
            </div>
        )
    }
}


  export default SubCounterA;