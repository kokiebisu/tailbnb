import * as React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { gql } from 'apollo-boost';

// Component
import { TopRated } from '../../src/components/containers/TopRated';

// Query
const GET_EXPERIENCES = gql`
  query {
    experiences {
      id
      title
      cost
      ratings
      reviews
      ratings
      location
      img
    }
  }
`;

describe('TopRated', () => {
  it('should render correctly in "debug" mode', () => {
    const mocks = [
      {
        request: {
          query: GET_EXPERIENCES
        },
        result: {
          data: {
            experiences: [
              {
                location: 'Florence',
                img:
                  'https://a0.muscache.com/im/pictures/22c51ce6-fd30-42d7-8ed7-025d93e58a2b.jpg?aki_policy=poster',
                id: 'ck75azi2n00740866a6orxce9',
                cost: 187,
                reviews: 1789,
                ratings: 5,
                title: 'Luca & Lorenzo, cooking in Chianti hills'
              }
            ]
          }
        }
      }
    ];
    const component = shallow(
      <MockedProvider mocks={mocks}>
        <TopRated />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
