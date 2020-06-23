
import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from "antd";
 
 
@connect(({ train, loading }) => ({
  planData:train.planData,
  loading: loading.effects['train/fetchList'],
}))
export default class BoatList extends Component {
  state = {
  }
 
  componentDidMount(){
    const { dispatch } = this.props;
    let payload={};
    dispatch({
      type: 'train/fetchList',
      payload
    });
  }
 
 
  render(){
    const { loading,planData} = this.props;
    //loadding only in table
    console.log('123', this.props)
    console.log('loading', loading);//ture <=> false
    console.log('planData', planData);// model里面的state的变量
    
    let columns = [
      {title:"序号",dataIndex:"id"},
      {title:"船名",dataIndex:"name"},
      {title:"入港时间",dataIndex:"inTime"},
      {title:"更新时间",dataIndex:"updateTime"},
    ]
    return(  
        <Table 
          dataSource={planData} 
          columns={columns}
          rowKey="id" 
          loading={loading} /> 
    );
  }
}