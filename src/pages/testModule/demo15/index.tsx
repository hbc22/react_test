import { Upload, message } from 'antd';
import React, { useState, useRef } from "react";
import Cookies from 'js-cookie';
import { InboxOutlined } from '@ant-design/icons';
import CropperModal from '@/components/CropperModal';

const { Dragger } = Upload;

function jiancai () {
    const [imageUrl, setimageUrl] = useState('')
    const [modalVisible, setmodalVisible] = useState(false);
    const [modalFile, setmodalFile] = useState(null);
    const t = useRef(null);
    const props = {
        // name: 'file',
        // showUploadList: false,
        // headers: {
        //   token: Cookies.get('token'),
        // //   token: Cookies.get('token'),
        // },
        // action: 'https://xingye-admin-test.gobestsoft.cn/gbs/admin/sys/oss/upload',
        name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      };
      const beforeUploadImg = (file: { type: string; size: number; uid: string; name: string }) => {
          console.log('1212', file)
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('只能上传.jpeg, .png的图片');
          return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('图片大小不能超过2M');
          return false;
        }
        return new Promise((resolve, reject) => {
          setmodalFile(file);
          setmodalVisible(true);
          let index = setInterval(() => {
            if (t.current) {
              clearInterval(index);
              setmodalVisible(false);
              t.current.uid = file.uid;
              t.current.name = file.name;
              console.log('lalals', t)
              resolve(t.current);
            }
          }, 100);
        });
      };

    const handleChange = (info: any) => {
        console.log('innn', info)
        if (info.file.status === 'done') {
          setimageUrl(info.file.response.url);
          message.success('文件上传成功');
        }
        if (info.file.status === 'error') {
          message.error('文件上传失败');
        }
    };
    const uploadHandler = (blob: any) => {
        t.current = blob;
        console.log('bbblob', t)
      };
    
      const cropperOptions = [
        {
          value: 0,
          label: '轮播图(375*206)',
          width: 375,
          height: 206,
        },
        {
          value: 1,
          label: '资讯列表(110*82)',
          width: 110,
          height: 82,
        },
        {
          value: 2,
          label: '三张多图(105*70)',
          width: 105,
          height: 70,
        },
        {
          value: 3,
          label: '单张大图(335*172)',
          width: 335,
          height: 172,
        },
      ];
    return (
        <>
          <div>
              functin hook 剪裁

              <div>
              {modalVisible && (
                <CropperModal
                    uploadedImageFile={modalFile}
                    onClose={() => setmodalVisible(false)}
                    onSubmit={uploadHandler}
                    cropperOptions={cropperOptions}
                    />
                )}
              <Dragger
                  {...props}
                  style={{ width: 520, height: 240 }}
                  beforeUpload={beforeUploadImg}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      alt=""
                      src={imageUrl}
                      style={{
                        width: '100%',
                        maxHeight: '100%',
                        cursor: 'pointer',
                        marginTop: -32,
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-hint">支持.jpg .png格式，900×500，限2M以内</p>
                    </>
                  )}
                </Dragger>
              </div>
          </div>
        </>
    )
}

export default jiancai;