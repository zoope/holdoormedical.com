import React, { PropsWithChildren } from 'react';
import products from '../config/products.json';
import { Menu } from 'antd';
import { history } from 'umi';

import style from './index.less';

const productsCfg = {};
products.forEach((item) => {
  // @ts-ignore
  productsCfg[item.code] = item;
});

// @ts-ignore
window.products = products;

export default (props: any) => {
  const { pathname } = props.location;
  const code = pathname.match(/\/product\/([\d]*)/)?.[1];
  const children = code
    ? React.Children.map(props.children, (child) => {
        // @ts-ignore
        return React.cloneElement(child, productsCfg[code]);
      })
    : props.children;

  const pushRoute = (path: string) => history.push(path);
  return (
    <>
      <header className={style.header}>
        <Menu mode="horizontal">
          <Menu.Item key="home" onClick={() => pushRoute('/')}>
            HOME
          </Menu.Item>
          <Menu.Item key="products" onClick={() => pushRoute('/products')}>
            PRODUCTS
          </Menu.Item>
          <Menu.Item key="contact_us" onClick={() => pushRoute('/contact_us')}>
            CONTACT
          </Menu.Item>
        </Menu>
      </header>
      <div className={style.content}>{children}</div>
      <footer className={style.footer}>footer</footer>
    </>
  );
};
