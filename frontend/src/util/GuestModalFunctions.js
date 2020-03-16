export const calculateGuests = (adultNumber, childrenNumber) => {
  if (adultNumber === 0 && childrenNumber === 0) {
    return 'Guest';
  } else if (adultNumber + childrenNumber == 1) {
    return `${adultNumber + childrenNumber} guest`;
  } else if (adultNumber + childrenNumber > 1) {
    return `${adultNumber + childrenNumber} guests`;
  }
};

const calculateInfants = (adultNumber, infantNumber) => {
  if (adultNumber == 0 || infantNumber === 0) {
    return '';
  } else if (infantNumber === 0) {
    return `${infantNumber} infant`;
  } else if (infantNumber > 0) {
    return `${infantNumber} infants`;
  }
};
