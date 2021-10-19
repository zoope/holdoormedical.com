import styles from './index.less';
import { history } from 'umi';

export default function Homepage(props: any) {
  // console.log(props);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <section className={styles.top}>
        <div className={styles.content}>
          <h1>{props.title}</h1>
          <div className={styles.back} onClick={handleBack}>
            RETURN
          </div>
        </div>
      </section>
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
