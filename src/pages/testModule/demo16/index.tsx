import React , {useEffect, useState } from 'react';
import {DatePicker, Select, Table, Tooltip} from 'antd';
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
                </div>
)
}

export default DateChoose;