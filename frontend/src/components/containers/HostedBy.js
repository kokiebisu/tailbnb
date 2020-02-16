import React from 'react';

import detail1 from '../../../public/img/high/staydetail1.jpg';

// Image
import img1 from '../../../public/img/high/medal.png';
import shield1 from '../../../public/img/high/shield.png';

const description =
  'I love living in Cancun , I love hosting guests and I have won certificates and titles for excellence for the quality of my rooms and attention to my guests. I traded Canada (Edmonton) for Cancun when I was 25 because I had a desire to never have to return to " reality" . It works ,we don’t count down to vacation anymore and board 20+ planes internationally each year to see new “ panorámicas” So we understand and are sympathetic to your stress and expectations. Our condominium property is out of our control so we often have to work much harder to ensure guests happiness but I’m almost always touched by the reviews . The rare time there is a negative aspect in a review I spring to action to change or even totally remodel the area in order to prevent it from happening again. For 15 years I worked in all the top luxury hotels as concierge / guest services and I learned many things that can help you have a fabulous experience. I\'m here full time, not an absentee owner. Sincerely , Michelle';
const interactionDescription =
  'The owners of the Seashell house are on the plot of land which is accessible by the fence you use to get in . Raquel and Vanessa are here full time. Please PRINT YOUR AIRBNB ITINERARY and let them know your arrival time and if you wish for a pick up at the marina. Golf cart rental also easily arranged .';
const renderDescription = (description) => {
  const wordArray = description.split(' ');
  if (wordArray.length < 50) {
    return <p className='text-gray-750'>{description}</p>;
  } else {
    const wordArray = description.split(' ');
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(wordArray[i]);
    }
    return (
      <>
        <p style={{ fontFamily: 'airbnb-book' }} className='text-gray-750'>
          {`${newArray.join(' ')}...`}
          <a
            style={{ fontFamily: 'airbnb-book' }}
            className='hover:border-green-850 border-b text-green-850 border-transparent'
            href='/#'>
            Read More
          </a>
        </p>
      </>
    );
  }
};

export default () => {
  return (
    <>
      <div className='py-10 border-b border-gray-300'>
        <div className='flex items-center justify-start mb-8'>
          <div className='flex justify-center'>
            <img className='mr-6 h-16 w-16 rounded-full' src={detail1} />
          </div>
          <div>
            <div className='h-1/2'>
              <h3
                style={{ fontFamily: 'airbnb-medium' }}
                className='text-gray-750 text-xl'>
                Hosted By Maria Henriqueta
              </h3>
              <p
                style={{ fontFamily: 'airbnb-book' }}
                className='text-gray-750 text-sm'>
                Joined in March 2012
              </p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <div className='w-25/31'>
              <div className='flex items-center justify-start'>
                <div className='flex items-center justify-start pr-2'>
                  <div className='pr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-3 w-3'
                      viewBox='0 0 37.286 37.287'
                      style={{ fill: '#E61E4D', marginBottom: 0.5 }}>
                      <g>
                        <path
                          d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
    c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
    c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
    c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
    c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
    C37.425,15.013,37.226,15.808,36.683,16.339z'
                        />
                      </g>
                    </svg>
                  </div>
                  <p
                    style={{ fontFamily: 'airbnb-book' }}
                    className='text-gray-750'>
                    110 Reviews
                  </p>
                </div>
                <div className='ml-2 pr-2'>
                  <div className='flex items-center justify-start'>
                    <div className='pr-2'>
                      <svg
                        viewBox='0 0 512.02797 512'
                        className='h-3 w-3'
                        style={{ fill: '#E61E4D' }}
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='m441.644531 247.59375-11.457031-32.554688-123.582031 123.585938c-12.074219 12.097656-28.160157 18.75-45.25 18.75-17.085938 0-33.171875-6.652344-45.246094-18.75l-90.667969-90.667969c-12.097656-12.074219-18.753906-28.160156-18.753906-45.246093 0-17.089844 6.65625-33.175782 18.753906-45.25 12.074219-12.09375 28.160156-18.75 45.246094-18.75 17.089844 0 33.175781 6.65625 45.25 18.75l45.417969 45.398437 121.6875-121.683594-8.195313-23.253906-3.773437-22.570313c-2.367188-14.464843-11.90625-26.453124-25.453125-32.066406-13.609375-5.652344-28.796875-3.902344-40.722656 4.652344l-59.285157 42.921875-59.949219-43.03125c-12.03125-8.488281-27.261718-10.175781-40.789062-4.5-13.4375 5.632813-22.890625 17.601563-25.257812 31.980469l-11.605469 72.253906-72.683594 12.074219c-14.441406 2.371093-26.429687 11.90625-32.0625 25.453125-5.632813 13.589844-3.882813 28.820312 4.671875 40.746094l42.902344 59.285156-43.03125 59.945312c-8.46875 12.03125-10.175782 27.285156-4.5 40.789063 5.652344 13.441406 17.597656 22.890625 31.976562 25.261719l72.257813 11.625 12.074219 72.660156c2.347656 14.421875 11.820312 26.390625 25.257812 32.023437 13.546875 5.671875 28.800781 3.988281 40.941406-4.609375l59.285156-42.921875 59.796876 42.921875c7.316406 5.226563 15.828124 7.914063 24.46875 7.914063 5.480468 0 10.984374-1.066407 16.253906-3.261719 13.570312-5.632812 23.085937-17.621094 25.453125-32.023438l11.625-72.253906 72.660156-12.074218c14.421875-2.371094 26.371094-11.820313 32.023437-25.261719 5.675782-13.503907 3.988282-28.757813-4.609374-40.9375zm0 0' />
                        <path d='m261.355469 314.710938c-5.460938 0-10.921875-2.089844-15.082031-6.25l-90.667969-90.667969c-8.339844-8.339844-8.339844-21.824219 0-30.164063 8.34375-8.34375 21.824219-8.34375 30.167969 0l75.582031 75.582032 214.25-214.25c8.34375-8.339844 21.824219-8.339844 30.167969 0 8.339843 8.339843 8.339843 21.824218 0 30.164062l-229.335938 229.335938c-4.160156 4.160156-9.621094 6.25-15.082031 6.25zm0 0' />
                      </svg>
                    </div>
                    <p
                      style={{ fontFamily: 'airbnb-book' }}
                      className='text-gray-750'>
                      Verified
                    </p>
                  </div>
                </div>
                <div className='ml-2 pr-2'>
                  <div className='flex items-center justify-start'>
                    <div className='pr-2'>
                      <svg
                        className='h-3 w-3'
                        style={{ fill: '#E61E4D' }}
                        viewBox='0 0 511.999 511.999'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clip-rule='evenodd' fill-rule='evenodd'>
                          <path d='m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z' />
                          <path d='m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z' />
                          <path d='m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z' />
                          <path d='m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z' />
                        </g>
                      </svg>
                    </div>
                    <p
                      style={{ fontFamily: 'airbnb-book' }}
                      className='text-gray-750'>
                      Superhost
                    </p>
                  </div>
                </div>
              </div>
              <div className='my-4'>{renderDescription(description)}</div>
              <div className='py-3'>
                <p
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-gray-850 py-3'>
                  Maria Henriqueta is a Superhost
                </p>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750'>
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </p>
              </div>
            </div>
          </div>

          <div className='w-1/2'>
            <div className='my-4'>
              <p className='text-gray-750 pb-3'>
                Languages:&nbsp;
                <span style={{ fontFamily: 'airbnb-medium' }}>
                  English, Espanol
                </span>
              </p>
              <p className='text-gray-750 pb-3'>
                Response rate:&nbsp;
                <span style={{ fontFamily: 'airbnb-medium' }}>100%</span>
              </p>
              <p className='text-gray-750 pb-3'>
                Response time:&nbsp;
                <span style={{ fontFamily: 'airbnb-medium' }}>
                  within an hour
                </span>
              </p>
              <button
                style={{ fontFamily: 'airbnb-medium' }}
                className='mb-4 border border-black rounded-lg py-3 px-5 text-gray-850 text-sm mt-2'>
                Contact Host
              </button>
              <div>
                <div className='flex items-center justify-start w-15/31'>
                  <div>
                    <img src={shield1} className='h-full w-12' />
                  </div>
                  <p
                    style={{ fontFamily: 'airbnb-book' }}
                    className='ml-4 text-xs text-gray-750'>
                    To protect your payment, never transfer money or communicate
                    outside of the Airbnb website or app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <h3 style={{ fontFamily: 'airbnb-bold' }} className='text-gray-750'>
            Interaction with guests
          </h3>
          {renderDescription(interactionDescription)}
        </div>

        <div className='my-4'>
          <p className='text-gray-750'>
            <span style={{ fontFamily: 'airbnb-medium' }}>
              Always communicate through Airbnb ·&nbsp;
            </span>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.&nbsp;
            <a
              className='hover:border-green-850 border-b text-green-850 border-transparent'
              style={{ fontFamily: 'airbnb-medium' }}
              href='/#'>
              Learn more
            </a>
          </p>
        </div> */}
      </div>
    </>
  );
};
