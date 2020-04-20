import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'react-amap';
import styles from './index.less'
import { Input } from 'antd'

const amapkey='890a767d081509d935fa884a92da44c2';
class Amap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // 设置坐标点，就会在地图上显示一个 标记点
      markerPosition: { longitude: 121.46701, latitude: 30.81147 },
    }
    // 高德地图 Marker 实例
    this.markerInstance = undefined
    // 高德地图 Map 实例
    this.mapInstance = undefined

    this.amapEvents = {
      created: mapInstance => {
        console.log('高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：', mapInstance);
        console.log('缩放级别：', mapInstance.getZoom());
        this.mapInstance = mapInstance
        
        AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.CitySearch'], () => {
          // 实例化Autocomplete
          const autoOptions = {
            // city 限定城市，默认全国
            // city: '025',
            // input 为绑定输入提示功能的input的DOM ID
            input: 'amapInput',
          }
          const autoComplete = new AMap.Autocomplete(autoOptions);
          // 无需再手动执行search方法，autoComplete会根据传入input对应的DOM动态触发search

          const placeSearch = new AMap.PlaceSearch({
            // city: '南京',
            map: mapInstance,
          })

          // 监听下拉框选中事件
          AMap.event.addListener(autoComplete, 'select', e => {
              console.log('112', e)
            // TODO 针对选中的poi实现自己的功能
            placeSearch.setCity(e.poi.adcode)
            placeSearch.search(e.poi.name)
          })


          const citySearch = new AMap.CitySearch()
          citySearch.getLocalCity((status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              console.log('当前所在城市：', result)
              if (result && result.city && result.bounds) {
                // 当前城市名称
                // const cityinfo = result.city;

                // 当前城市位置信息
                const citybounds = result.bounds;
                // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                // 地图显示当前城市
                mapInstance.setBounds(citybounds);
                // 需要在设置坐标成功后，重新设置 缩放级别
                // mapInstance.setZoom(15)
              }
            }
          })
        })

        // 实例点击事件
        mapInstance.on('click', e => {
          const lngLat = `${e.lnglat.getLat()},${e.lnglat.getLng()}`
          console.log('坐标位置:', lngLat)
        //   this.props.onChange(lngLat)
        });
      },
    };
    this.markerEvents = {
      created: markerInstance => {
        console.log('高德地图 Marker 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：', markerInstance);
        console.log(markerInstance.getPosition());

        this.markerInstance = markerInstance
      },
    }
    // this.markerPosition = { longitude: 120, latitude: 30 };
  }

  componentDidUpdate(prevProps) {
      console.log('444update', prevProps)
    const { value } = this.props
    if (this.props.value !== prevProps.value) {
      if (value) {
        const temp = value.split(',')

        // 重新设置地图坐标点
        this.setState({ markerPosition: { longitude: temp[1], latitude: temp[0] } }, () => {
          // 需要在设置坐标成功后，重新设置 缩放级别
          if (this.mapInstance) {
              this.mapInstance.setZoom(15)
          }
         
        })
      }
    }
  }

  render() {
    return (
      <>
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
          <Map plugins={['ToolBar']} zoom={13} events={this.amapEvents} amapkey={amapkey} center={this.state.markerPosition}>
            <Marker position={this.state.markerPosition} events={this.markerEvents} />
          </Map>
          {
          <div className={styles.info}>
              <div className={styles.item}>
                <Input id="amapInput" style={{width: '100%'}} type="text" />
              </div>
          </div>
          }
        </div>
      </>
    )
  }
}

export default Amap