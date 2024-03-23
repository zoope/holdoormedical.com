import styles from './index.less';
import productStyles from '../product/index.less';
import SubHeader from '../../layouts/sub-header';
import { Tree, Form, Button, Input } from 'antd';
import { DownOutlined, ShoppingOutlined } from '@ant-design/icons';
import request from 'umi-request';
import { history } from 'umi';
import { useState, useEffect } from 'react';
import Upload from './upload';

export default function ContactPage() {
  if (!['localhost', 'admin.zoope.cn'].includes(location.hostname)) {
    history.push('/');
  }

  const [category, setCategory] = useState([]);

  const getConfigs = async () => {
    const res = await request('http://admin.zoope.cn:3000/configs', {
      params: { project: window.project },
    });
    if (res && res.code === 200) {
      const { data } = res;
      expendArray(data.category, null, data.products);
      // console.log(data.category);
      setCategory(data.category);
    }
  };
  const expendArray = (arr, parent, products) => {
    const categoryCfg = {};
    arr.forEach((item) => {
      if (parent) {
        if (parent.parent) {
          item.parent = [...parent.parent, parent];
        } else {
          item.parent = [parent];
        }
      }
      categoryCfg[item.code] = item;

      if (item.children) {
        expendArray(item.children, item, products);
      } else {
        const filter = products.filter((project) =>
          project.category.includes(item.code),
        );
        if (filter && filter.length) {
          item.children = filter;
        }
      }
    });
  };

  useEffect(() => {
    if (!category || !category.length) {
      getConfigs();
    }
  });

  const [productData, setProductData] = useState({});
  const [categoryData, setCategoryData] = useState({});
  const onSelect = (selectedKeys, info) => {
    if (info.node.category) {
      if (categoryData.code) {
        setCategoryData({});
      }
      setProductData(info.selectedNodes[0]);
    } else if (info.node.code !== '0') {
      if (productData.code) {
        setProductData({});
      }
      if (categoryData.code) {
        setCategoryData({});
        setTimeout(() => {
          setCategoryData(info.selectedNodes[0]);
        }, 0);
      } else {
        setCategoryData(info.selectedNodes[0]);
      }
    }
  };

  const saveCategory = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.admin}>
      {/* <SubHeader showBack={false} title="Admin" type="products" /> */}
      <div className={styles.content}>
        <div className={styles['tree-wrap']}>
          <Tree
            showLine
            switcherIcon={<DownOutlined />}
            showIcon
            defaultExpandAll
            onSelect={onSelect}
            treeData={category || []}
            fieldNames={{ title: 'title', key: 'code', children: 'children' }}
            icon={(props) => (props.category ? <ShoppingOutlined /> : '')}
          />
        </div>
        <div className={styles['form-wrap']}>
          {productData.code ? (
            <section className={productStyles.product}>
              <div
                className={productStyles.image}
                style={{ backgroundImage: `url(${productData.avatar})` }}
              >
                <Button type="primary">编辑</Button>
              </div>
              <div className={productStyles.text}>
                <div className={productStyles.title}>{productData.title}</div>
                <div
                  className={productStyles.content}
                  dangerouslySetInnerHTML={{ __html: productData.content }}
                ></div>
              </div>
            </section>
          ) : null}
          {categoryData.code ? (
            <Form
              initialValues={categoryData}
              onFinish={saveCategory}
              labelCol={{ span: 4 }}
            >
              <Form.Item
                label="title"
                name="title"
                rules={[{ required: true, message: 'Required!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="image" name="image">
                <Upload />
              </Form.Item>
            </Form>
          ) : null}
        </div>
      </div>
    </div>
  );
}
