import 'cropperjs/dist/cropper.css'; // 引入Cropper对应的css

import React, { Component } from 'react';
import { Radio } from 'antd';

import Cropper from 'react-cropper'; // 引入Cropper
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class ClassCropperModal extends Component {
  static propTypes = {
    uploadedImageFile: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      src: null,
      value: -1,
      aspectRatio: 0,
    };
  }

  componentDidMount() {
    const fileReader = new FileReader();
    fileReader.onload = e => {
      const dataURL = e.target.result;
      this.setState({ src: dataURL });
    };
    fileReader.readAsDataURL(this.props.uploadedImageFile);
  }

  handleSubmit = () => {
    // TODO: 这里可以尝试修改上传图片的尺寸
    this.cropper.getCroppedCanvas().toBlob(async blob => {
      this.props.onSubmit(blob);
    });
  };

  onChange = e => {
    const checked = this.props.cropperOptions.filter(item => item.value === e.target.value);
    this.setState({
      value: e.target.value,
      aspectRatio: this.props.cropperOptions.length > 0 ? checked[0].width / checked[0].height : 1,
    });
  };

  render() {
    const { aspectRatio } = this.state;

    const previewContainerStyle = {
      float: 'left',
      width: 230,
      height: 200,
      marginLeft: 85,
      marginTop: 50,
    };

    const previewStyle = {
      width: 230,
      height: 200,
      overflow: 'hidden',
    };

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <div className={styles.cropperContainer}>
        <Modal
          maskClosable="false"
          wrapClassName="cropperModal"
          title="图片裁剪"
          centered
          width="900px"
          bodyStyle={{ width: 900, height: 500 }}
          style={{ top: 20 }}
          visible
          onOk={this.handleSubmit}
          onCancel={this.props.onClose}
        >
          <div style={{ float: 'left' }}>
            <Cropper
              style={{ width: 500, height: 400 }}
              src={this.state.src}
              ref={cropper => {
                this.cropper = cropper;
              }}
              viewMode={1}
              zoomable={false}
              aspectRatio={aspectRatio} // 固定为1:1  可以自己设置比例, 默认情况为自由比例
              guides={false}
              preview=".cropperPreview"
            />
          </div>
          <div style={previewContainerStyle}>
            <div className="cropperPreview" style={previewStyle}></div>
          </div>
          <div style={{ float: 'left', marginLeft: 100, marginTop: 20 }}>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              {this.props.cropperOptions &&
                this.props.cropperOptions.map((item, idx) => (
                  <Radio style={radioStyle} value={item.value} key={idx}>
                    {item.label}
                  </Radio>
                ))}
            </Radio.Group>
          </div>
        </Modal>
      </div>
    );
  }
}
