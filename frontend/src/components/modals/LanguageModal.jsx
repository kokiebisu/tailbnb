import * as React from 'react';
import { useState } from 'react';

const suggestedLanguages = [
  {
    name: 'English',
    country: 'United States'
  },
  {
    name: 'English',
    country: 'United Kingdom'
  },
  {
    name: 'Français',
    country: 'Canada'
  }
];

const languages = [
  {
    name: 'English',
    country: 'Canada'
  },
  {
    name: 'Azərbaycan dili',
    country: 'Azərbaycan'
  },
  {
    name: 'Bahasa Indonesia',
    country: 'Indonesia'
  },
  {
    name: 'Bosanski',
    country: 'Bosna i Hercegovina'
  },
  {
    name: 'Català',
    country: 'Espanya'
  },
  {
    name: 'Čeština',
    country: 'Česká republika'
  },
  {
    name: 'Crnogorski',
    country: 'Crna Gora'
  },
  {
    name: 'Dansk',
    country: 'Danmark'
  },
  {
    name: 'Deutsch',
    country: 'Deutschland'
  },
  {
    name: 'Deutsch',
    country: 'Österreich'
  },
  {
    name: 'Deutsch',
    country: 'Schweiz'
  },
  {
    name: 'Eesti',
    country: 'Eesti'
  },
  {
    name: 'English',
    country: 'Australia'
  },
  {
    name: 'English',
    country: 'Guyana'
  },
  {
    name: 'English',
    country: 'India'
  },
  {
    name: 'English',
    country: 'Ireland'
  },
  {
    name: 'English',
    country: 'New Zealand'
  },
  {
    name: 'English',
    country: 'Singapore'
  },
  {
    name: 'English',
    country: 'United Arab Emirates'
  },
  {
    name: 'Español',
    country: 'Argentina'
  },
  {
    name: 'Español',
    country: 'Belice'
  },
  {
    name: 'Español',
    country: 'El Salvador'
  },
  {
    name: 'Español',
    country: 'España'
  },
  {
    name: 'Español',
    country: 'Estados Unidos'
  },
  {
    name: 'Español',
    country: 'Guatemala'
  },
  {
    name: 'Español',
    country: 'Honduras'
  },
  {
    name: 'Español',
    country: 'Latinoamérica'
  },
  {
    name: 'Español',
    country: 'México'
  },
  {
    name: 'Español',
    country: 'Nicaragua'
  },
  {
    name: 'Español',
    country: 'Panamá'
  },
  {
    name: 'Español',
    country: 'Paraguay'
  },
  {
    name: 'Español',
    country: 'Perú'
  },
  {
    name: 'Español',
    country: 'Venezuela'
  },
  {
    name: 'Français',
    country: 'Belgique'
  },
  {
    name: 'Français',
    country: 'France'
  },
  {
    name: 'Français',
    country: 'Suisse'
  }
];

export const LanguageModal = ({ setLanguageModal }) => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'English',
    country: 'Canada'
  });

  const filteredLanguages = languages.filter(
    (language) => !_.isEqual(language, selectedLanguage)
  );

  return (
    <>
      <div
        id='darkOverlay'
        className='fixed w-full h-full top-0 left-0 z-20 overflow-hidden'
      />
      <div
        id='centerAbsolute'
        className='relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50'>
        <div className='w-full border-b border-gray-300'>
          <div className='w-full mx-auto max-w-5xl mt-2 flex justify-center items-center'>
            <div className='bg-green-850 relative w-full px-4 flex justify-center items-center my-6'>
              <div className='w-full flex items-center absolute left-0 z-20'>
                <button onClick={() => setLanguageModal(false)}>
                  <div className='inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 47.971 47.971'>
                      <g>
                        <path
                          d='M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z'
                        />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-75v overflow-y-scroll overflow-hidden'>
          <div className='w-full mx-auto max-w-5xl'>
            <div
              style={{ fontFamily: 'airbnb-medium' }}
              className='w-full text-2xl py-6 text-gray-750'>
              Suggested languages and regions
            </div>
            <div className='w-full flex flex-wrap'>
              {suggestedLanguages.map((language) => {
                return (
                  <div className='w-1/5 flex mb-4'>
                    <button className='w-90p hover:bg-gray-250  rounded-lg flex justify-center'>
                      <div className='w-85p py-1'>
                        <div className='flex'>
                          <p
                            style={{ fontFamily: 'airbnb-book' }}
                            className='text-sm'>
                            {language.name}
                          </p>
                        </div>
                        <div className='flex'>
                          <p
                            style={{ fontFamily: 'airbnb-book' }}
                            className='text-sm text-gray-650'>
                            {language.country}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{ fontFamily: 'airbnb-medium' }}
              className='w-full text-2xl py-6 text-gray-750'>
              Choose a language and region
            </div>
            <div className='w-full flex flex-wrap'>
              <div className='w-1/5 flex mb-4'>
                <button className='w-90p border border-gray-750 rounded-lg flex justify-center'>
                  <div className='w-85p py-1'>
                    <div className='flex'>
                      <p
                        style={{ fontFamily: 'airbnb-book' }}
                        className='text-sm'>
                        {selectedLanguage.name}
                      </p>
                    </div>
                    <div className='flex'>
                      <p
                        style={{ fontFamily: 'airbnb-book' }}
                        className='text-sm text-gray-650'>
                        {selectedLanguage.country}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              {languages.map((language) => {
                return (
                  <div className='w-1/5 flex mb-4'>
                    <button className='w-90p hover:bg-gray-250  rounded-lg flex justify-center'>
                      <div className='w-85p py-1'>
                        <div className='flex'>
                          <p
                            style={{ fontFamily: 'airbnb-book' }}
                            className='text-sm'>
                            {language.name}
                          </p>
                        </div>
                        <div className='flex'>
                          <p
                            style={{ fontFamily: 'airbnb-book' }}
                            className='text-sm text-gray-650'>
                            {language.country}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
