import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// import { TweenLite, Power3 } from 'gsap';
// import {
//   calculateGuests,
//   calculateInfants
// } from '../../util/GuestModalFunctions';
// import { rotateArrow, backRotateArrow } from '../../animations/arrow';

// Modals
// import { CalendarModal } from '../modals/CalendarModal';
// import { GuestPickerModal } from '../modals/GuestPickerModal';

import styles from 'components/header/header.card.module.scss';

export const HeaderCard = () => {
  //   // Check in
  //   const [checkInModal, setCheckInModal] = useState(false);
  //   const [checkInDate, setCheckInDate] = useState(['dd', 'mm', 'yy']);

  //   // Check out
  //   const [checkOutModal, setCheckOutModal] = useState(false);
  //   const [checkOutDate, setCheckOutDate] = useState(['dd', 'mm', 'yy']);

  //   // Guest
  //   const [guestModal, setGuestModal] = useState(false);
  //   const [adultNumber, setAdultNumber] = useState(0);
  //   const [childrenNumber, setChildrenNumber] = useState(0);
  //   const [infantNumber, setInfantNumber] = useState(0);

  //   let guestArrow1 = useRef(null);
  //   let guestArrow2 = useRef(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['notice']}>
        <div className={styles['notice__color']} />
        <div className={styles['notice__content']}>
          <div>
            <p>
              Airbnb is taking steps to support our community in this time of
              need.
            </p>
          </div>
          <div className='mt-2'>
            <Link href='#'>
              <a>Learn more</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles['content']}>
        <div className={styles['content__title']}>
          <h3>
            Book unique places to <br />
            stay and things to do.
          </h3>
        </div>
        <form className={styles['form']}>
          <div>
            <label htmlFor='where'>Where</label>
            <input type='text' id='where' placeholder='Anywhere' />
          </div>
          <div className={styles['form__dates']}>
            <div className={styles['form__date']}>
              <label htmlFor='checkin'>Check-In</label>
              <div className={styles['form__date--input']}>
                {/* {checkInModal ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCheckInModal(!checkInModal);
                      }}
                      style={{ fontFamily: 'airbnb-book' }}
                      className='w-full border border-green-850 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'>
                      dd-mm-yy
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCheckInModal(!checkInModal);
                      }}
                      style={{ fontFamily: 'airbnb-book' }}
                      className='pr-16 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'>
                      {`${checkInDate[0]}/${checkInDate[1]}/${checkInDate[2]}`}
                    </button>
                  )} */}

                {/* {checkInModal ? (
                  <CalendarModal setCheckDate={setCheckInDate} />
                ) : null} */}
              </div>
            </div>
            <div className={styles['form__date']}>
              <label htmlFor='checkout'>Check-Out</label>
              <div className={styles['form__date--input']}>
                {/* {checkOutModal && !checkInModal ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCheckOutModal(!checkOutModal);
                      }}
                      style={{ fontFamily: 'airbnb-book' }}
                      className='w-full border border-green-850 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'>
                      dd-mm-yy
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCheckOutModal(!checkOutModal);
                      }}
                      style={{ fontFamily: 'airbnb-book' }}
                      className='pr-16 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'>
                      {`${checkOutDate[0]}/${checkOutDate[1]}/${checkOutDate[2]}`}
                    </button>
                  )} */}

                {/* {checkOutModal && !checkInModal ? (
                  <div
                    style={{ top: -50, right: 115 }}
                    className='bg-red-550 relative'>
                    <CalendarModal setCheckDate={setCheckOutDate} />
                  </div>
                ) : null} */}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='guests'>Guests</label>
            <div className={styles['form__guests']}>
              {/* {guestModal ? (
                <button
                  style={{ fontFamily: 'airbnb-book' }}
                  onClick={(e) => {
                    e.preventDefault();
                    rotateArrow(guestArrow1);
                    setGuestModal(!guestModal);
                  }}
                  className='appearance-none pl-2 w-full border border-green-850 py-3 text-left rounded placeholder-gray-900 tracking-wide'>
                  {calculateGuests(adultNumber, childrenNumber)}
                  {adultNumber > 0 && infantNumber > 0
                    ? `, ${calculateInfant(adultNumber, infantNumber)}`
                    : null}
                </button>
              ) : (
                <button
                  style={{ fontFamily: 'airbnb-book' }}
                  onClick={(e) => {
                    e.preventDefault();
                    backRotateArrow(guestArrow2);
                    setGuestModal(!guestModal);
                  }}
                  className='appearance-none pl-2 w-full border border-gray-300 py-3 text-left rounded placeholder-gray-900 tracking-wide'>
                  {calculateGuests(adultNumber, childrenNumber)}
                  {adultNumber > 0 && infantNumber > 0
                    ? `, ${calculateInfant(adultNumber, infantNumber)}`
                    : null}
                </button>
              )} */}
              {/* {guestModal ? (
                <div
                  ref={(el) => (guestArrow1 = el)}
                  style={{}}
                  className='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
                  <svg
                    style={{ fill: '#222222' }}
                    className='h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              ) : (
                <div
                  ref={(el) => (guestArrow2 = el)}
                  style={{}}
                  className='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
                  <svg
                    className='h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              )} */}
            </div>
            {/* {guestModal ? (
              <GuestPickerModal
                incrementAdult={() => setAdultNumber(adultNumber + 1)}
                decrementAdult={() => setAdultNumber(adultNumber - 1)}
                incrementChildren={() => setChildrenNumber(childrenNumber + 1)}
                decrementChildren={() => setChildrenNumber(childrenNumber - 1)}
                incrementInfant={() => setInfantNumber(infantNumber + 1)}
                decrementInfant={() => setInfantNumber(infantNumber - 1)}
                adult={adultNumber}
                children={childrenNumber}
                infant={infantNumber}
                resetNumber={() => {
                  setAdultNumber(0);
                  setChildrenNumber(0);
                  setInfantNumber(0);
                }}
                switchModal={() => setGuestModal(false)}
              />
            ) : null} */}
          </div>
        </form>
        <div className={styles['form__search']}>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
