import * as React from 'react';
import { useState } from 'react';

// Component
import { FooterContent } from './FooterContent';
import { FooterInducer } from './FooterInducer';

export const Footer: React.FC<{}> = () => {
  const [display, setDisplay] = useState<boolean>(false);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      {display ? (
        <FooterContent swap={changeDisplay} />
      ) : (
        <FooterInducer swap={changeDisplay} />
      )}
    </>
  );
};
