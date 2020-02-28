import * as React from 'react';
import { shallow } from 'enzyme';
import { gql } from 'apollo-boost';

// Query
import { MockedProvider } from '@apollo/react-testing';

// // Component
import { Stay } from '../../src/components/containers/Stay';

const GET_STAYS = gql`
  query {
    stays {
      id
      host_is_superhost
      country
      name
      price
      reviews_per_month
      picture_url
    }
  }
`;

describe('Stay', () => {
  it('should render correctly in "debug" mode', () => {
    const mocks = [
      {
        request: {
          query: GET_STAYS
        },
        result: {
          data: {
            stays: [
              {
                name: 'Unique 1 bedroom villa in Seminyak',
                price: 324,
                country: 'Indonesia',
                id: 'ck75azi17006z0866b8ckpx0q',
                reviews_per_month: 4.94,
                host_is_superhost: 't',
                picture_url:
                  'https://a0.muscache.com/im/pictures/22148644/74d38f0b_original.jpg?aki_policy=large'
              }
            ]
          }
        }
      }
    ];
    const component = shallow(
      <MockedProvider mocks={mocks}>
        <Stay />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
