import React, { useState } from 'react';
import { BottomArrow, NoNameLogo, QuestionMark } from 'assets/svg';
import Link from 'next/link';
import styles from 'styles/host/homes.module.scss';

const HostHome = () => {
  const headerItems = [
    { name: 'setup' },
    { name: 'safety' },
    {
      name: 'financials',
    },
    {
      name: 'hosting services',
    },
  ];

  const [active, setActive] = useState(true);

  return (
    <>
      <div className={styles['header__wrapper--mobile']}>
        <div>
          <button
            className={styles['header__logo--mobile']}
            onClick={() => {
              // switchMenuModal();
              console.log('hello');
            }}>
            <div>
              <NoNameLogo fill='black' />
            </div>
            <div>
              <BottomArrow fill='black' />
            </div>
          </button>
        </div>
      </div>
      <div className={styles['header__wrapper']}>
        <div className={styles['header__content']}>
          <div>
            <Link href='/'>
              <a>
                <div className={styles['header__logo']}>
                  <NoNameLogo fill='#008489' />
                </div>
              </a>
            </Link>
          </div>
          <div className={styles['header__nav']}>
            <div
              className={
                active
                  ? `${styles['header__item']} ${styles['selected']}`
                  : `${styles['header__item']}`
              }>
              <p>Overview</p>
            </div>
            {headerItems.map((item, index) => (
              <div key={index} className={styles['header__item']}>
                <Link href={`/host/${item.name}`}>
                  <a>{item.name}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['content']}>
        <div className={styles['content__inner']}>
          <img
            src='/img/host-home.jpg'
            className={styles['content__background']}
          />
          <div className={styles['content__title']}>
            <h3>Earn money as an Airbnb host</h3>
          </div>
        </div>
        <div className={styles['banner-card']}>
          <div className={styles['banner-card__inner']}>
            <div className={styles['banner-card__title']}>
              <h3>Earn money as an Airbnb host</h3>
            </div>
            <div className={styles['banner-card__subtitle']}>
              <p>Find out what you could earn</p>
            </div>
            <div className={styles['banner-card__input--location']}>
              <input type='text' placeholder='Location' />
            </div>
            <div className={styles['banner-card__input--others']}>
              <div className={styles['banner-card__input--place']}>
                <select id='guests'>
                  <option value='1'>Entire place</option>
                  <option value='2'>Private room</option>
                  <option value='3'>Shared room</option>
                </select>
                <div>
                  <svg viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              </div>
              <div className={styles['banner-card__input--guest']}>
                <select id='guests'>
                  <option value='1'>1 guest</option>
                  <option value='2'>2 guests</option>
                  <option value='3'>3 guests</option>
                  <option value='4'>4 guests</option>
                  <option value='5'>5 guests</option>
                  <option value='6'>6 guests</option>
                </select>
                <div>
                  <svg viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles['banner-card__price']}>
              <div>
                <h3>$1,162</h3>
              </div>
              <div>
                <p>per month</p>
              </div>
              <div>
                <div className={styles['banner-card__icon--question']}>
                  <QuestionMark fill='#484848' />
                </div>
              </div>
            </div>
            <button className={styles['banner-card__button']}>
              <p>Get started</p>
            </button>
          </div>
        </div>
        <div className={styles['characteristics']}>
          <div className={styles['characteristics__why']}>
            <div className={styles['characteristics__title']}>
              <h3>Why host on Airbnb?</h3>
            </div>
            <div className={styles['characteristics__description']}>
              <p>
                No matter what kind of home or room you have to share, Airbnb
                makes it simple and secure to host travellers. You’re in full
                control of your availability, prices, house rules, and how you
                interact with guests.
              </p>
            </div>
          </div>
          <div className={styles['characteristics__back']}>
            <div className={styles['characteristics__title']}>
              <h3>We have your back</h3>
            </div>
            <div className={styles['characteristics__description']}>
              <p>
                To keep you, your home, and your belongings safe, we cover every
                booking with $1M USD in property damage protection and another
                $1M USD in insurance against accidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostHome;
