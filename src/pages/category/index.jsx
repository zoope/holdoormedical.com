import { history } from 'umi';
import SubHeader from '../../layouts/sub-header';
import styles from './index.less';
import Contact from '../contact/contact';

export default function CategoryPage(props) {
  const {
    location: { pathname },
  } = props;

  const categoryCode = pathname.match(/\/category\/([\d]*)/)?.[1];
  const categoryData = window.categoryCfg[categoryCode];

  const products = window.products;

  const productList = products.filter((product) =>
    product.category.includes(categoryCode),
  );

  const renderProducts = () => {
    return productList.map((item) => (
      <a href={`/product/${item.code}`} className={styles.product}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${item.avatar})` }}
        />
        <div className={styles.name}>{item.title}</div>
      </a>
    ));
  };
  return (
    <div>
      <SubHeader title={categoryData.title} />
      <div className={styles.content}>
        <section className={styles['left-side']}>
          <div className={styles['category-list']}>
            <div className={styles.title}>Category</div>
            {categoryData.children
              ? categoryData.children.map((subCategory) => (
                  <div key={subCategory.code}>
                    <a href={`/category/${subCategory.code}`}>
                      {subCategory.title}
                    </a>
                  </div>
                ))
              : null}
          </div>
          <div>
            <div className={styles.title}>Contact us</div>
            <Contact />
          </div>
        </section>
        <section className={styles['product-list']}>
          <div className={styles.title}>{categoryData.title}</div>
          {renderProducts()}
        </section>
      </div>
    </div>
  );
}
