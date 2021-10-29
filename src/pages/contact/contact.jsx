import React from 'react';
import styles from './index.less';

const emails = [
  {
    name: 'Sales',
    email: 'sales@holdoormedical.com',
  },
];

export default function Contact() {
  return (
    <section className={styles.content}>
      <div className={styles.address}>
        Room 3-1-2, No.62 Haiwaitan Flower Garden, Ningbo City, China
      </div>
      <div className={styles.tel}>+86 13245638872</div>
      <div className={styles.email}>
        {emails.map((email) => (
          <div key={email.name}>
            <div>{email.name}</div>
            <a href={`mailto:${email.email}`}>{email.email}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
