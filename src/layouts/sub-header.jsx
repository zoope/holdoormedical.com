import styles from './index.less';
import { history } from 'umi';

export default function SubHeader({ title, showBack = true }) {
  const handleBack = () => {
    history.goBack();
  };

  return (
    <section className={styles.top}>
      <div className={styles.content}>
        <h1>{title}</h1>
        {showBack && (
          <div className={styles.back} onClick={handleBack}>
            RETURN
          </div>
        )}
      </div>
    </section>
  );
}
