import homeCfg from '@/config/home.json';
import categories from '@/config/category.json';
import { history } from 'umi';

import style from './index.less';

export default function Homepage() {
  const categoryCfg = categories[0].children;

  return (
    <div>
      <section className={style.banner}></section>
      <section className={style.contact}>
        <div className={style.container}>
          <div>
            We provide high quality medical instruments worldwide.{' '}
            <a href="/category/0">more</a>
          </div>
          <div>
            Have a question? Call us today!
            <br />
            <a href="tel:+8613245635572">+86 13245635572</a>
          </div>
          <div>
            Need support? Send us an E-mail
            <br />
            <a href="mailto:sales@holdoormedical.com">
              sales@holdoormedical.com
            </a>
          </div>
        </div>
      </section>
      <section className={style.category}>
        {categoryCfg.map((item, index) => (
          <a
            className={style.item}
            key={index}
            onClick={() => history.push(`/category/${item.code}`)}
          >
            <div className={style.img}>
              <img src={item.image} />
            </div>
            <div className={style.title} style={{ color: item.color }}>
              {item.title}
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
