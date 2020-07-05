import * as React from 'react';
import { shallow } from 'enzyme';
import { gql } from 'apollo-boost';
import { MockedProvider } from '@apollo/react-testing';

// Component
import { Adventures } from '../../src/components/containers/Adventures';

const GET_ADVENTURES = gql`
  query {
    adventures {
      id
      title
      period
      cost
      country
      img
    }
  }
`;

describe('Adventure', () => {
  it('should render correctly in "debug" mode', () => {
    const mocks = [
      {
        request: {
          query: GET_ADVENTURES
        },
        result: {
          data: {
            adventures: [
              {
                img:
                  'https://a0.muscache.com/im/pictures/56ba0225-92af-483f-a5c4-6d449d60f09b.jpg?aki_policy=poster',
                country: 'Morocco',
                id: 'ck75azi3g00790866ludvey0a',
                cost: 128,
                title: 'Atlas Mountains Experience',
                period: 2
              }
            ]
          }
        }
      }
    ];
    const component = shallow(
      <MockedProvider mocks={mocks}>
        <Adventures />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
