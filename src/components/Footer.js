import React, { useState } from 'react';

// Component
import FooterContent from './FooterContent';
import FooterInducer from './FooterInducer';

export default () => {
  const [display, setDisplay] = useState(false);

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
