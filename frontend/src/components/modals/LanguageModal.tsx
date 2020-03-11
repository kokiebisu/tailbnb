import * as React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';

const suggestedLanguages = [
  {
    name: 'English',
    location: 'United States'
  },
  {
    name: 'English',
    location: 'United Kingdom'
  },
  {
    name: 'Français',
    location: 'Canada'
  }
];

const languages = [
  {
    name: 'English',
    location: 'Canada'
  },
  {
    name: 'Azərbaycan dili',
    location: 'Azərbaycan'
  },
  {
    name: 'Bahasa Indonesia',
    location: 'Indonesia'
  },
  {
    name: 'Bosanski',
    location: 'Bosna i Hercegovina'
  },
  {
    name: 'Català',
    location: 'Espanya'
  },
  {
    name: 'Čeština',
    location: 'Česká republika'
  },
  {
    name: 'Crnogorski',
    location: 'Crna Gora'
  },
  {
    name: 'Dansk',
    location: 'Danmark'
  },
  {
    name: 'Deutsch',
    location: 'Deutschland'
  },
  {
    name: 'Deutsch',
    location: 'Österreich'
  },
  {
    name: 'Deutsch',
    location: 'Schweiz'
  },
  {
    name: 'Eesti',
    location: 'Eesti'
  },
  {
    name: 'English',
    location: 'Australia'
  },
  {
    name: 'English',
    location: 'Guyana'
  },
  {
    name: 'English',
    location: 'India'
  },
  {
    name: 'English',
    location: 'Ireland'
  },
  {
    name: 'English',
    location: 'New Zealand'
  },
  {
    name: 'English',
    location: 'Singapore'
  },
  {
    name: 'English',
    location: 'United Arab Emirates'
  },
  {
    name: 'Español',
    location: 'Argentina'
  },
  {
    name: 'Español',
    location: 'Belice'
  },
  {
    name: 'Español',
    location: 'El Salvador'
  },
  {
    name: 'Español',
    location: 'España'
  },
  {
    name: 'Español',
    location: 'Estados Unidos'
  },
  {
    name: 'Español',
    location: 'Guatemala'
  },
  {
    name: 'Español',
    location: 'Honduras'
  },
  {
    name: 'Español',
    location: 'Latinoamérica'
  },
  {
    name: 'Español',
    location: 'México'
  },
  {
    name: 'Español',
    location: 'Nicaragua'
  },
  {
    name: 'Español',
    location: 'Panamá'
  },
  {
    name: 'Español',
    location: 'Paraguay'
  },
  {
    name: 'Español',
    location: 'Perú'
  },
  {
    name: 'Español',
    location: 'Venezuela'
  },
  {
    name: 'Français',
    location: 'Belgique'
  },
  {
    name: 'Français',
    location: 'France'
  },
  {
    name: 'Français',
    location: 'Suisse'
  },
  {
    name: 'Gaeilge',
    location: 'Éire'
  },
  {
    name: 'Hrvatski',
    location: 'Hrvatska'
  },
  {
    name: 'isiXhosa',
    location: 'eMzantsi Afrika'
  },
  {
    name: 'isiZulu',
    location: 'iNingizimu Afrika'
  },
  {
    name: 'Íslenska',
    location: 'Ísland'
  },
  {
    name: 'Italiano',
    location: 'Italia'
  },
  {
    name: 'Italiano',
    location: 'Svizzera'
  },
  {
    name: 'Kiswahili',
    location: 'Āfrika'
  },
  {
    name: 'Latviešu',
    location: 'Latvija'
  },
  {
    name: 'Lietuvių',
    location: 'Lietuva'
  },
  {
    name: 'Magyar',
    location: 'Magyarország'
  },
  {
    name: 'Malti',
    location: 'Malta'
  },
  {
    name: 'Melayu',
    location: 'Malaysia'
  },
  {
    name: 'Nederlands',
    location: 'België'
  },
  {
    name: 'Nederlands',
    location: 'Nederland'
  },
  {
    name: 'Norsk',
    location: 'Norge'
  },
  {
    name: 'Polski',
    location: 'Polska'
  },
  {
    name: 'Português',
    location: 'Brasil'
  },
  {
    name: 'Português',
    location: 'Portugal'
  },
  {
    name: 'Română',
    location: 'Română'
  },
  {
    name: 'Shqip',
    location: 'Shqipëri'
  },
  {
    name: 'Slovenčina',
    location: 'Slovensko'
  },
  {
    name: 'Slovenščina',
    location: 'Slovenija'
  },
  {
    name: 'Srpski',
    location: 'Srbija'
  },
  {
    name: 'Suomi',
    location: 'Suomi'
  },
  {
    name: 'Svenska',
    location: 'Sverige'
  },
  {
    name: 'Tagalog',
    location: 'Pilipinas'
  },
  {
    name: 'Tiếng Việt',
    location: 'Việt Nam'
  },
  {
    name: 'Türkçe',
    location: 'Türkiye'
  },
  {
    name: 'Ελληνικά',
    location: 'Ελλάδα'
  },
  {
    name: 'Български',
    location: 'България'
  },
  {
    name: 'Македонски',
    location: 'Северна Македонија'
  },
  {
    name: 'Русский',
    location: 'Россия'
  },
  {
    name: 'Українська',
    location: 'Україна'
  },
  {
    name: 'ქართული',
    location: 'საქართველო'
  },
  {
    name: 'Հայերեն',
    location: 'Հայաստան'
  },
  {
    name: 'עברית',
    location: 'ישראל'
  },
  {
    name: 'العربية',
    location: 'العالم'
  },
  {
    name: 'हिन्दी',
    location: 'भारत'
  },
  {
    name: 'ไทย',
    location: 'ประเทศไทย'
  },
  {
    name: '한국어',
    location: '대한민국'
  },
  {
    name: '日本語',
    location: '日本'
  },
  {
    name: '简体中文',
    location: '美国'
  },
  {
    name: '繁體中文',
    location: '美國'
  },
  {
    name: '简体中文',
    location: '中国'
  },
  {
    name: '繁體中文',
    location: '香港'
  },
  {
    name: '繁體中文',
    location: '台灣'
  }
];

interface Props {
  location: string;
  setLanguageModal: (boolean: boolean) => void;
}

export const LanguageModal: React.FC<Props> = ({
  location,
  setLanguageModal
}) => {
  const defaultLanguage = languages.find(
    (language) => language.location == location
  );

  const [selectedLanguage, setSelectedLanguage] = useState<any>(
    defaultLanguage
  );

  const filteredLanguages = languages.filter(
    (language) => !_.isEqual(language, selectedLanguage)
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setLanguageModal(false);
      }
    }
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <div
        id='darkOverlay'
        className='md:block fixed w-full h-full top-0 left-0 z-20 overflow-hidden'
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
                            {language.location}
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
                        {selectedLanguage.location}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              {filteredLanguages.map((language) => {
                return (
                  <div className='w-1/5 flex mb-4'>
                    <button
                      onClick={() => {
                        setSelectedLanguage(language);
                      }}
                      className='w-90p hover:bg-gray-250  rounded-lg flex justify-center'>
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
                            {language.location}
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
