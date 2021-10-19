import homeCfg from '@/config/home.json';

import style from './index.less';

export default function Homepage() {
  return (
    <div>
      <section className={style.banner}></section>
      <section className={style.contact}>
        <div className={style.container}>
          <div>
            We provide high quality medical instruments worldwide. <a>more</a>
          </div>
          <div>
            Have a question? Call us today!
            <br />
            <a>+43 650 630 76 70</a>
          </div>
          <div>
            Need support? Send us an E-mail
            <br />
            <a>support@hycel-medical.com</a>
          </div>
        </div>
      </section>
      <section className={style.category}>
        {homeCfg.category.map((item, index) => (
          <a className={style.item} key={index}>
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
