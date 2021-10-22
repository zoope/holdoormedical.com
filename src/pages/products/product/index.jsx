import styles from './index.less';
import SubHeader from '../../../layouts/sub-header';

export default function Product(props) {
  // console.log(props);

  return (
    <div>
      <SubHeader title={props.title} />
      <section className={styles.product}>
        <div className={styles.image}>
          <img src={props.avatar} />
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </section>
      <section className={styles.breadcrumbs}></section>
    </div>
  );
}
