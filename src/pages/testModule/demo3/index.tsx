import React from 'react'
import { Map, Marker } from 'react-amap';
import { Input } from 'antd';
class map extends React.Component {
    static defaultProps = {
        //1、加载默认属性
        name: 'sls',
        age:23
    };
    constructor(props) {
        super(props);
        //2、加载默认状态
        this.state = {
            number: 1,
            markerPosition: {
              longitude: 121.46701,
              latitude: 30.81147,
            },
        }
    }
    // const onSearchAddress = e => {
    //     if (e) {
    //       fetch(
    //         'https://restapi.amap.com/v3/geocode/geo?key=f00aa3668b2954b421335d1054bd61f9&address=' + e,
    //       ).then(res => {
    //         if (res.ok) {
    //           res.json().then(data => {
    //             if (data && data.info === 'OK') {
    //               if (data.geocodes.length > 0) {
    //                 const geocodes = data.geocodes[0]['location'].split(',');
    //                 setlongitude(parseFloat(geocodes[0]));
    //                 setlatitude(parseFloat(geocodes[1]));
    //                 setTimeout(() => {
    //                   setmarkerPosition({ longitude: longitude, latitude: latitude });
    //                 }, 0);
    //               }
    //             }
    //           });
    //         }
    //       });
    //     }
    //   };
    onSearchAddress = e => {
        if (e) {
          fetch('https://restapi.amap.com/v3/geocode/geo?key=f00aa3668b2954b421335d1054bd61f9&address=' + e,)
          .then(res => {
            if (res.ok) {
                res.json().then(data => {
                  if (data && data.info === 'OK') {
                    if (data.geocodes.length > 0) {
                      const geocodes = data.geocodes[0]['location'].split(',');
                      this.setState({
                        markerPosition: {
                            longitude: parseFloat(geocodes[0]),
                            latitude: parseFloat(geocodes[1]),
                          },
                      })
                    }
                  }
                })
            }
          })
        }
    };
    render() {
        return (
            <div>
              <Input
                placeholder="请输入服务点详细地址"
                onChange={event => this.onSearchAddress(event.target.value)}
              />
              <div style={{ width: '100%', height: '300px' }}>
                <Map
                    amapkey={'890a767d081509d935fa884a92da44c2'}
                    zoom={13}
                    center={this.state.markerPosition}
                    plugins={['ToolBar']}
                >
                    <Marker position={this.state.markerPosition} />
                </Map>
                </div>
            </div>
        )
    }
}


  export default map;