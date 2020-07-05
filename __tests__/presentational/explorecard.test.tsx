import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { ExploreCard } from '../../src/components/functions/ExploreCard';

describe('ExploreCard', () => {
  it('should render correctly in "debug" mode', () => {
    const info = {
      title: 'testtitle',
      img: 'testimg'
    };
    const component = shallow(<ExploreCard {...info} />);
    expect(component).toMatchSnapshot();
  });
});
