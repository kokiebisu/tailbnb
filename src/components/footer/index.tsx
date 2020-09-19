import React, { Fragment } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

import {
  NoNameLogo,
  Facebook,
  Globe,
  Instagram,
  Twitter,
} from '../../assets/svg';

export const Footer = () => {
  const footerLink = [
    {
      name: 'about',
      items: [
        { url: '#', name: 'Diversity & Belonging' },
        { url: '#', name: 'Accessibility' },
        { url: '#', name: 'Trust & Safety' },
        { url: '#', name: 'Airbnb Citizen' },
        { url: '#', name: 'Newsroom' },
      ],
    },
    {
      name: 'community',
      items: [
        { url: '#', name: 'Airbnb Magazine' },
        { url: '#', name: 'Airbnb for Work' },
        { url: '#', name: 'Invite friends' },
        { url: '#', name: 'Careers' },
      ],
    },
    {
      name: 'host',
      items: [
        { url: '#', name: 'Host your home' },
        { url: '#', name: 'Host an experience' },
        { url: '#', name: 'Responsible hosting' },
        { url: '#', name: 'Refer hosts' },
        { url: '#', name: 'Open homes' },
        { url: '#', name: 'Olympics' },
        { url: '#', name: 'Responsible hosting' },
      ],
    },
    {
      name: 'support',
      items: [
        { url: '#', name: 'Help Centre' },
        { url: '#', name: 'Neighbourhood Support' },
      ],
    },
  ];

  const aboutLinks = [
    { url: '#', name: 'Privacy' },
    { url: '#', name: 'Terms' },
    { url: '#', name: 'Sitemap' },
  ];

  const socialMedia = [<Facebook />, <Twitter />, <Instagram />];

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__inner']}>
        <div className={styles['content']}>
          {footerLink.map(({ name, items }, index) => (
            <div key={index} className={styles['content__section']}>
              <h3>{name}</h3>
              <ul>
                {items.map(({ url, name }, index) => (
                  <li key={index}>
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles['etc']}>
          <div className={styles['etc__about']}>
            <div className={styles['etc__about--logo']}>
              <NoNameLogo fill='#222222' />
            </div>
            <div className={styles['etc__about--rights']}>
              <p>2020 Airbnb, Inc. All rights reserved</p>
            </div>
            <div className={styles['etc__about--links']}>
              {aboutLinks.map(({ url, name }, index) => (
                <>
                  <p>&nbsp;·&nbsp;</p>
                  <Link href={url}>
                    <a>{name}</a>
                  </Link>
                </>
              ))}
            </div>
          </div>
          <div className={styles['etc__options']}>
            <div className={styles['etc__options--inner']}>
              <div className={styles['etc__option']}>
                <div>
                  <Globe fill='#222222' />
                </div>
                <div>
                  <p>English (CA)</p>
                </div>
              </div>
              <div className={styles['etc__option']}>
                <div>
                  <p>$</p>
                </div>
                <div>
                  <p>CAD</p>
                </div>
              </div>
            </div>
            <div className={styles['etc__socialmedia']}>
              {socialMedia.map((icon, index) => {
                return <div key={index}>{icon}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
