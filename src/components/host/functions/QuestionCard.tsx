import * as React from 'react';

interface Props {
  title: string;
}

export const QuestionCard: React.FC<Props> = ({ title }) => {
  return (
    <a className='text-green-850 md:text-lg' href=''>
      {title}
    </a>
  );
};
