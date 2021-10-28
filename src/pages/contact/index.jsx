import styles from './index.less';
import SubHeader from '../../layouts/sub-header';
import Contact from './contact';

export default function ContactPage() {
  return (
    <div className={styles.contact_us}>
      <SubHeader showBack={false} title="Contact" />
      <section className={styles.topic}>
        <div className={styles.above}>Contact</div>
        <h2>Get in touch with us</h2>
      </section>
      <div className={styles.wrap}>
        <Contact />
      </div>
    </div>
  );
}
