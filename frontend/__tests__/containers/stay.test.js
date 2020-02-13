import React from 'react';
import { shallow, mount } from 'enzyme';

// Query
import { MockProvider } from '@apollo/react-testing';
import { GET_STAYS } from '../../src/components/containers/Stay';

// // Component
import Stay from '../../src/components/containers/Stay';

const mock = [
  {
    request: {
      query: GET_STAYS
    },
    result: () => {
      return {
        data: {
          stay: {
            id: '1',
            hostType: 'normal',
            location: 'testing cocation',
            title: 'testing citle',
            cost: 'testing cost',
            ratings: 'testing ratings',
            img: 'testing img',
            imglow: 'testing imglow'
          }
        }
      };
    }
  }
];

describe('Stay', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <MockProvider mocks={mock}>
        <Stay />
      </MockProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
