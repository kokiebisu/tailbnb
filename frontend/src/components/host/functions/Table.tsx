import * as React from 'react';

const renderString = (text: string) => {
  return <p>{text}</p>;
};

const renderBoolean = (truefalse: boolean) => {
  if (truefalse) {
    return (
      <div className='h-4 w-4'>
        <svg
          style={{ fill: '#008489' }}
          className='w-full h-full'
          viewBox='0 0 24 24'>
          <path d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z'></path>
        </svg>
      </div>
    );
  } else {
    return (
      <div className='h-4 w-4'>
        <svg
          viewBox='0 0 24 24'
          style={{ fill: '#484848' }}
          className='w-full h-full'>
          <path d='m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'></path>
        </svg>
      </div>
    );
  }
};

interface Props {
  head: { column1: string; column2: string; column3: string; column4: string };
  body: {
    column1: string;
    column2: boolean;
    column3: boolean;
    column4: boolean;
  }[];
}

export const Table: React.FC<Props> = ({ head, body }) => {
  return (
    <div className='w-full mx-auto relative'>
      <div
        style={{ top: 32 }}
        id='tableSmallScreen'
        className='w-48 absolute bg-white w-40 z-50'>
        <div className='py-5'>
          <h3
            style={{ fontFamily: 'airbnb-bold' }}
            className='text-gray-750 text-2xl'>
            {head.column1}
          </h3>
        </div>
        {body.map((row) => {
          return (
            <div style={{ height: 97 }} className='flex items-center'>
              <div>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-gray-750 text-sm py-3'>
                  {row.column1}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='overflow-x-scroll'>
        <table
          style={{ fontFamily: 'airbnb-book' }}
          className='relative z-0 w-full table-fixed text-gray-750 my-8 top-0'>
          <tbody>
            <tr>
              <td
                className='w-48 md:w-2/5 pr-4 py-5 text-2xl text-left border-b border-gray-300'
                style={{ fontFamily: 'airbnb-bold' }}>
                {head.column1}
              </td>
              <td
                id='tableShadowTop'
                className='w-32  md:w-1/5 border-b border-gray-300 text-center text-sm'>
                {head.column2}
              </td>
              <td className='w-32 md:w-1/5 border-b border-gray-300 text-center text-sm'>
                {head.column3}
              </td>
              <td className='w-32 md:w-1/5 border-b border-gray-300 text-center text-sm'>
                {head.column4}
              </td>
            </tr>

            {body.map((row) => {
              return (
                <>
                  <tr>
                    <td className='h-24 md:py-8 text-sm border-b border-gray-300 text-left'>
                      {row.column1}
                    </td>
                    <td
                      id='tableShadowMiddle'
                      className='h-24 md:py-8 text-sm border-b border-gray-300 text-center'>
                      <div className='flex justify-center'>
                        {typeof row.column2 === 'string'
                          ? renderString(row.column2)
                          : renderBoolean(row.column2)}
                      </div>
                    </td>
                    <td className='h-24 md:py-8 text-sm border-b border-gray-300 text-center'>
                      <div className='flex justify-center'>
                        {typeof row.column3 === 'string'
                          ? renderString(row.column3)
                          : renderBoolean(row.column3)}
                      </div>
                    </td>
                    <td className='h-24 md:py-8 text-sm border-b border-gray-300 text-center'>
                      <div className='flex justify-center'>
                        {typeof row.column4 === 'string'
                          ? renderString(row.column4)
                          : renderBoolean(row.column4)}
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='mt-3 mb-32 lg:my-3'>
        <p
          style={{ fontFamily: 'airbnb-book' }}
          className='text-gray-650 text-sm'>
          Last updated June 2018
        </p>
      </div>
    </div>
  );
};
