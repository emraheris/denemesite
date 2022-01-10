import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: <a href = {"https://www.eczacibasi.com.tr/tr/anasayfa#NewPage"}>Haberler</a>,
    Svg: require('../../static/img/undraw_medical_1.svg').default,
    description: (
      <>
        Eczacıbaşı Topluluğu, Dünya Ekonomik Forumu tarafından oluşturulan 
        “Paydaş Kapitalizmi Göstergeleri”ni kurumsal raporlamalarında kullanmayı 
        taahhüt etti.
      </>
    ),
  },
  {
    title: <a href = {"https://www.eczacibasi.com.tr/tr/anasayfa#ProductsPage"}>Kuruluşlar ve Markalar</a>,
    Svg: require('../../static/img/undraw_medical_2.svg').default,
    description: (
     <>
        Yapı Ürünleri, Tüketim Ürünleri, Sağlık, Diğer Ürün ve Hizmetler
     </>
    ),
  },
  {
    title: <a href = {"https://www.eczacibasi.com.tr/tr/toplumsal-sorumluluk"}>Toplumsal Sorumluluk</a>,
    Svg: require('../../static/img/undraw_medical_3.svg').default,
    description: (
      <>
        Kurucusunun, yaşamı boyunca savunduğu ve uyguladığı görüşler, Eczacıbaşı Topluluğu'nun 
        toplum hizmetleri konusundaki temel ilke ve geleneğini oluşturur.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
