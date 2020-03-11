import * as React from 'react';

interface Props {
  icon: string;
  title: string;
  description: string;
  last: boolean;
}

export const GetStartedCard: React.FC<Props> = ({
  icon,
  title,
  description,
  last
}) => {
  const renderIcon: (type: string) => React.ReactNode = (type) => {
    switch (type) {
      case 'connected':
        return (
          <img
            className='w-full h-full'
            src='https://a0.muscache.com/pictures/b611b345-a32a-48af-a3db-13ac0ad47d95.jpg'
          />
        );

      case 'handshake':
        return (
          <img
            className='w-full h-full'
            src='https://a0.muscache.com/pictures/7834e234-3a9f-46a6-8e22-f521312f715f.jpg'
          />
        );

      case 'money':
        return (
          <img
            className='w-full h-full'
            src='https://a0.muscache.com/pictures/0fca42d5-7287-449d-9c24-2f76864ee5d2.jpg'
          />
        );
    }
  };

  return (
    <div className='md:w-full lg:w-1/3 mb-12 lg:mb-0'>
      {last ? (
        <div>
          {icon === 'handshake' ? (
            <div className='h-12 w-24'>{renderIcon(icon)}</div>
          ) : (
            <div className='h-12 w-12'>{renderIcon(icon)}</div>
          )}

          <div className='my-4'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 md:leading-loose'>
              {description}
            </p>
          </div>
        </div>
      ) : (
        <div className='md:w-85p lg:w-90p'>
          {icon === 'handshake' ? (
            <div className='h-12 w-16'>{renderIcon(icon)}</div>
          ) : (
            <div className='h-12 w-12'>{renderIcon(icon)}</div>
          )}
          <div className='my-4'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-2xl'>
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontFamily: 'airbnb-book' }}
              className='text-gray-750 md:leading-loose lg:leading-7'>
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
