import { Header } from '../components/header/index';
import { Footer } from '../components/footer/index';
import styles from '../styles/index.module.scss';
import Link from 'next/link';

const LandingPage = () => {
  const explores = [
    {
      img: '/img/explore1.jpg',
      title: 'Stay',
    },
    {
      img: '/img/explore2.jpg',
      title: 'Experience',
    },
    {
      img: '/img/explore3.jpg',
      title: 'Adventure',
    },
  ];
  return (
    <>
      <Header
      // switchMenuModal={() => {
      //   //   setMenuModal(!menuModal);
      //   console.log('hello');
      // }}
      />
      <div className={styles['wrapper']}>
        <div className={styles['frontlines']}>
          <div className={styles['frontlines__header']}>
            <h3>
              Host a hero: help us house front line responders around the world
            </h3>
            <div>
              <button>Get involved</button>
            </div>
          </div>
          <div className={styles['frontlines__content']}>
            <div>
              <p>
                With front line stays, Airbnb is partnering with our hosts to
                connect 100,000 healthcare providers, relief workers, and first
                responders with places to stay that allow them to be close to
                their patients and safely distanced from their own families.
              </p>
            </div>
            <div>
              <Link href='#'>
                <a>Host or donate</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['notice']}>
        <div className={styles['notice__inner']}>
          <div>
            <div className={styles['notice__card--label']} />
          </div>
          <div>
            <div>
              <h3>Latest info about cancellations</h3>
            </div>
            <div>
              <p>
                For travel impacted by the coronavirus, we’re offering updated
                cancellation options to help guests and hosts during this
                difficult time. &nbsp;
                <Link href='/#'>
                  <a>Learn more</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['explore']}>
        <div className={styles['explore__title']}>
          <h3>Explore Airbnb</h3>
        </div>
        <div className={styles['explore__cards']}>
          <div>
            <div>
              <div>
                {explores.map(({ img, title }, index) => {
                  if (index == explores.length - 1) {
                    return (
                      <div key={index} className={styles['explore__card']}>
                        <Link href={`/${title.toLowerCase()}`}>
                          <a>
                            <div className={styles['explore__card--content']}>
                              <img
                                src={img}
                                className={styles['explore__card--img']}
                              />
                              <p className={styles['explore__card--text']}>
                                {title}
                              </p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className={styles['explore__card__last']}>
                      <Link href={`/${title.toLowerCase()}`}>
                        <a>
                          <div
                            className={styles['explore__card__last--content']}>
                            <img
                              src={img}
                              className={styles['explore__card__last--img']}
                            />
                            <p className={styles['explore__card__last--text']}>
                              {title}
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
