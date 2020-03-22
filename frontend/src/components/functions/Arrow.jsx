import * as React from 'react';
import styled from 'styled-components';

const leftArrow =
  'https://image.shutterstock.com/image-vector/left-arrow-icon-vector-trendy-260nw-1236567772.jpg';
const rightArrow =
  'https://image.shutterstock.com/image-vector/left-arrow-icon-vector-trendy-260nw-1236567772.jpg';

const Arrow = ({ direction, handleClick }) => {
  return (
    <Div direction={direction} onClick={handleClick}>
      {direction === 'right' ? (
        <img src={rightArrow} />
      ) : (
        <img src={leftArrow} />
      )}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'right' ? 'right: 25px' : 'left: 25px')}}
  height: 50px;
  width: 50px;
  justify-conent: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${({ direction }) => (direction === 'left' ? '-2' : '2')}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

export default Arrow;
