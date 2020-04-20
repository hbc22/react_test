import React from 'react'
import { Map, Marker, Markers } from 'react-amap';
import { Input } from 'antd';
import style from './index.less'
class mapDemo extends React.Component {
    constructor(props) {
        super(props);
        const _this = this;
        this.map = null;
        this.marker = null;
        this.geocoder = null;
        this.mapEvents = {
            created(map){
                console.log('111', map)
                console.log('222', AMap)
                console.log('333', AMap.Geocoder)
                _this.map = map;
               AMap.plugin('AMap.Geocoder',() => {
                _this.geocoder = new AMap.Geocoder({
                    city: "010"//城市，默认：“全国”
                });
               })
               console.log('44', _this.geocoder)
            },
            click(e){
                console.log('555', e)
                const lnglat = e.lnglat;
                _this.setState({
                  position: lnglat,
                currentLocation: 'loading...'
              });
              _this.geocoder && _this.geocoder.getAddress(lnglat, (status, result) => {
                  console.log('result', result);
                  if (status === 'complete'){
                    if (result.regeocode){
                    _this.setState({
                      currentLocation: result.regeocode.formattedAddress || '未知地点'
                    });
                  } else {
                    _this.setState({
                      currentLocation: '未知地点'
                    });
                  }
                } else {
                  _this.setState({
                      currentLocation: '未知地点'
                  });
                }
              })
            }
        },
        this.markerEvents = {};
        this.state = {
            position: {longitude: 120, latitude: 30},
            currentLocation: '点击地图'
        }
    }
    render() {
        return (
            <div>
              <div style={{ width: '100%', height: '300px' }}>
                <Map
                    amapkey={'890a767d081509d935fa884a92da44c2'}
                    zoom={13}
                    center={this.state.position}
                    plugins={['ToolBar']}
                    events={this.mapEvents}
                >
                    <Marker position={this.state.position} events={this.markerEvents} />
                    <div style={{ padding: 4,
                                  background: '#000', 
                                  color: '#fff',
                                  position: 'absolute',
                                  top: '10px',
                                  left: '10px'}}>
                        {this.state.currentLocation}
                    </div>
                </Map>
                </div>
            </div>
        )
    }
}

export default mapDemo;