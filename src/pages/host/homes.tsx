import React, { useState } from 'react';
import { BottomArrow, NoNameLogo } from 'assets/svg';
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
            {headerItems.map((item) => (
              <div className={styles['header__item']}>
                <Link href={`/host/${item.name}`}>
                  <a>{item.name}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HostHome;
