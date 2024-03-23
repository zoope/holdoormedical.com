import { Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function UploadComponet(props) {
  const [loading, setLoading] = useState(false);

  const uploadButton = (
    <button
      style={{
        border: '1px dashed #eee',
        background: 'none',
        height: '100px',
        width: '100px',
        cursor: 'pointer',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const handleUploadChange = ({ file }) => {
    if (file.status === 'done') {
      props.onChange(file.response.data);
    }
  };
  return (
    <Upload
      name="file"
      action="http://admin.zoope.cn:3000/upload"
      data={{ project: window.project }}
      showUploadList={false}
      onChange={handleUploadChange}
    >
      {props.value ? (
        <img
          src={props.value}
          alt="avatar"
          style={{
            width: '100px',
            height: '100px',
            cursor: 'pointer',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
}
