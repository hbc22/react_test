import React, { Component } from 'react';
import { Map } from 'react-amap';
import Autocomplete from 'react-amap-plugin-autocomplete';

const pluginProps = {};
const style = {};
const amapkey='890a767d081509d935fa884a92da44c2'; // 请填入自己的amapkey
const mapPlugins = [
    // 'MapType',   切换卫星/地图
    'Scale',
    'OverView',
    'ControlBar', // v1.1.0 新增
];

class AmapAutocomplete extends Component {

    constructor(props){
        super(props);
        this.state={
            center:{
              longitude: 121.46701,
              latitude: 30.81147,
            }
        }
    }
    
    // on select item
    selectfunc = (e) => { 
        console.log('searcheeee', e);
        if(e.poi.location) {
            this.setState({center:{longitude: e.poi.location.lng, latitude: e.poi.location.lat}})
        } 
    }
  
    render() {
        return (
        // render
        <div style={{ width: '100%', height: '350px' }}>
            <Map amapkey={amapkey} center={this.state.center} plugins={mapPlugins} zoom={13}>
                <Autocomplete options={pluginProps} onSelect={(e)=>this.selectfunc(e)} style={style} placeholder='搜索'/>
            </Map>
        </div>
        )
    }
}

export default AmapAutocomplete;