import React , {useEffect, useState } from 'react';
import {DatePicker, Select, Table, Tooltip} from 'antd';
import styles from './index.less';
const moment = require('moment');
interface IProps {
  deviceId ?: number
  type ?: number
}
const DateChoose= (props:IProps)=>{
    const dateFormat = 'YYYY-MM-DD HH:mm:ss';
    const [startValue,setStartValue] = useState(moment().subtract(30, 'days')); // 开始日期默认是结束日期往前推30天
    const [endValue,setEndValue] = useState(moment());  // 结束日期默认是当天

    console.log('111', startValue)
    console.log('222', endValue)

    useEffect(()=>{ // 筛选条件改变 触发请求
      console.log('getTableData')
     },[endValue,startValue])
    
    // 首先打开时间面板，此方法被调用
  const disabledStartDate = (startVal) => {
   if (!startVal || !endValue) {
      // 如果没有选择结束日期，则选择开始日期时，开始日期不能大于今天
      return startVal.valueOf() > new Date().getTime();// 大于今天的日期一律返回true，禁止选择
    }
    // 如果选择了结束日期，则结束日期和开始日期之差大于30天（24*60*60*1000*30是30天的毫秒数）,还需要开始日期小于结束日期，返回true，禁止选择
    const minus = endValue.clone().subtract(30, "days");
    return  startVal.valueOf() < minus.valueOf() || endValue.valueOf() <= startVal.valueOf();
  }

  // 控制结束日期
  const disabledEndDate = (endVal) => {
    if (!endVal || !startValue) {
      // 如果没有选择开始日期，则结束日期时大于今天
      return endVal.valueOf() > new Date().getTime();// 大于今天的日期一律返回true，禁止选择
    }
    //如果选择了开始日期，则结束日期和开始日期除了不能超过30个自然日之外，还需要结束日期不能小于开始日期，还需要不能超过今天，返回true为不能选择
    const minus = endValue.clone().add(30, "days");
    return endVal.valueOf() <= startValue.valueOf() || endVal.valueOf() > moment().endOf('day') || endVal.valueOf() > minus.valueOf();
  }

  // 时间组件fn 选中时间后赋值
  const onStartChange = value => {
    setStartValue(value);
  };

  const onEndChange = value => {
    setEndValue(value);
  };

  // 下拉列表框选择回调
  const changeSelect = val =>{
    console.log('val',val)
    setSelectedVal(val)
  }

return (
     <div>
                  <DatePicker
                    disabledDate={disabledStartDate}
                    format={dateFormat}
                    value={startValue}
                    placeholder="开始日期"
                    onChange={onStartChange}
                    showTime={true}
                  />
                  {/* <span className={styles.lines}>~</span> */}
                  <DatePicker
                    disabledDate={disabledEndDate}
                    format={dateFormat}
                    value={endValue}
                    placeholder="结束日期"
                    onChange={onEndChange}
                    showTime={true}
                  />




                  <div style={{marginTop: 50}}>
                    <div className={styles.blogContentBox}>
                      <div className={styles.articleHeaderBox}>
                        <div className={styles.articleHeader}>
                          <div className={styles.articleTitleBox}>
                            <h1 className={styles.titleArticle} id="articleContentId">React,Hooks中useMemo的使用</h1>
                          </div>
                          <div className={styles.articleInfoBox}>
                            <div className={styles.articleBarTop}>
                              <img className={styles.articleTypeImg} src="https://csdnimg.cn/release/blogv2/dist/pc/img/original.png" alt="" />
                              <div className={styles.barContent}>
                                <a className={styles.foolowNickName}>进阶的巨人001</a>
                                <span className={styles.time}>2020-07-29 23:14:50</span>
                                <img className={styles.articleReadImg} src="https://csdnimg.cn/release/blogv2/dist/pc/img/articleReadEyes.png" alt="" />
                                <span className={styles.num}>444</span>
                                <a className={styles.unCollection}>
                                  <img className={styles.articleCollectImg} style={{display: 'inlineBlock'}} src="https://csdnimg.cn/release/blogv2/dist/pc/img/tobarCollect.png" alt="" />
                                  <span className={styles.num1}>收藏</span>
                                  <span className={styles.num1}>1</span>
                                </a>
                              </div>
                            </div>
                            <div className={styles.blogTagesBox}>
                              <div className={styles.tagsBox}>
                                  <span className={styles.label}>文章标签：</span>
                                  <a className={styles.tagsLink}>react</a>
                                  <a className={styles.tagsLink}>Hooks</a>
                                  <a className={styles.tagsLink}>UserMemo</a>
                              </div>
                            </div>
                            <div className={styles.operating}>
                                <a className={styles.bq}>版权</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
)
}

export default DateChoose;