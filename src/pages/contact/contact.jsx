import React from 'react';
import styles from './index.less';

const emails = [
  {
    name: 'Sales',
    email: 'sales@holdoormedical.com',
  },
  {
    name: 'Echo',
    email: 'echo@holdoormedical.com',
  },
];

export default function Contact() {
  return (
    <section className={styles.content}>
      <div className={styles.address}>
        Hycel Handelsges.m.b.H
        <br />
        Concorde Business Park 3<br />
        A-2320 Schwechat
        <br />
        AUSTRIA
      </div>
      <div className={styles.tel}>+86 13245638872</div>
      <div className={styles.email}>
        {emails.map((email) => (
          <div>
            <div>{email.name}</div>
            <a href={`mailto:${email.email}`}>{email.email}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
